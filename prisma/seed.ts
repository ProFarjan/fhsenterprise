import "dotenv/config";
import readline from "node:readline";
import { PrismaClient } from "../src/generated/prisma/client";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { hashPassword } from "../src/lib/password";

// Creates (or updates) the first admin account — there is no way to sign in to
// /admin before one exists.
//
//   npm run db:seed
//
// Username, email, and password are all always prompted for interactively
// (the password with hidden input), so the account you create is always the
// one you intended, not a stale .env value, and the plaintext password never
// touches the filesystem or your shell history — only its scrypt hash is
// stored. Nothing about the account lives in .env.
//
// In a non-interactive context (CI, a container build) there is no TTY to
// prompt on, so ADMIN_NAME / ADMIN_EMAIL / ADMIN_PASSWORD are read from the
// environment instead — pass them as one-shot variables, don't commit them
// to .env:
//
//   ADMIN_NAME='Admin' ADMIN_EMAIL='you@example.com' ADMIN_PASSWORD='…' npm run db:seed
//
// Re-running is safe: an existing account with the same email has its
// username and password updated, is re-activated, and has its old sessions
// revoked.

const MIN_PASSWORD_LENGTH = 8;

const prisma = new PrismaClient({
  adapter: new PrismaMariaDb(process.env.DATABASE_URL ?? ""),
});

// One readline interface reused for every question. Opening a fresh interface
// per prompt leaves stdin paused after the first `close()`, so the second
// prompt never receives input and the script hangs.
type Prompter = {
  ask(query: string, opts?: { hidden?: boolean }): Promise<string>;
  close(): void;
};

function createPrompter(): Prompter {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: true,
  });

  // Swap readline's echo for one we can silence, so a typed password never
  // appears on screen or in the terminal's scrollback.
  const internal = rl as unknown as { _writeToOutput: (s: string) => void };
  const writeThrough = internal._writeToOutput.bind(rl);
  let hidden = false;
  internal._writeToOutput = (s: string) => {
    if (!hidden) writeThrough(s);
  };

  return {
    ask(query, { hidden: isHidden = false } = {}) {
      return new Promise((resolve) => {
        hidden = isHidden;
        process.stdout.write(query);
        rl.question("", (answer) => {
          if (hidden) process.stdout.write("\n");
          hidden = false;
          resolve(answer.trim());
        });
      });
    },
    close: () => rl.close(),
  };
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Interactive: always ask, so a stale ADMIN_NAME can't silently win.
async function readUsernameInteractively(prompter: Prompter): Promise<string> {
  for (;;) {
    const name = (await prompter.ask("Enter username: ")).trim();
    if (!name) {
      console.error("  ! Username cannot be empty.\n");
      continue;
    }
    return name;
  }
}

// Interactive: always ask, so a stale ADMIN_EMAIL can't silently win.
async function readEmailInteractively(prompter: Prompter): Promise<string> {
  for (;;) {
    const email = (await prompter.ask("Enter email: ")).trim().toLowerCase();
    if (!EMAIL_RE.test(email)) {
      console.error("  ! Enter a valid email address.\n");
      continue;
    }
    return email;
  }
}

// Interactive: always ask, so a stale ADMIN_PASSWORD can't silently win.
async function readPasswordInteractively(prompter: Prompter): Promise<string> {
  for (;;) {
    const password = await prompter.ask("Enter password: ", { hidden: true });
    if (password.length < MIN_PASSWORD_LENGTH) {
      console.error(`  ! Must be at least ${MIN_PASSWORD_LENGTH} characters.\n`);
      continue;
    }
    const confirm = await prompter.ask("Confirm password: ", { hidden: true });
    if (password !== confirm) {
      console.error("  ! Passwords do not match.\n");
      continue;
    }
    return password;
  }
}

async function main() {
  const interactive = Boolean(process.stdin.isTTY);
  const prompter = interactive ? createPrompter() : null;

  let name: string;
  let email: string;
  let password: string;
  try {
    if (prompter) {
      name = await readUsernameInteractively(prompter);
      email = await readEmailInteractively(prompter);
      password = await readPasswordInteractively(prompter);
    } else {
      name = process.env.ADMIN_NAME?.trim() ?? "";
      email = process.env.ADMIN_EMAIL?.trim().toLowerCase() ?? "";
      if (!name || !email || !process.env.ADMIN_PASSWORD) {
        throw new Error(
          "No TTY to prompt on. Set ADMIN_NAME, ADMIN_EMAIL, and ADMIN_PASSWORD " +
            "for non-interactive seeding, e.g.\n" +
            "  ADMIN_NAME='Admin' ADMIN_EMAIL='you@example.com' ADMIN_PASSWORD='your-password' npm run db:seed",
        );
      }
      password = process.env.ADMIN_PASSWORD;
    }
  } finally {
    prompter?.close();
  }

  if (password.length < MIN_PASSWORD_LENGTH) {
    throw new Error(
      `Password must be at least ${MIN_PASSWORD_LENGTH} characters.`,
    );
  }

  const passwordHash = await hashPassword(password);

  const admin = await prisma.admin.upsert({
    where: { email },
    create: { email, name, passwordHash, role: "SUPER_ADMIN" },
    update: { name, passwordHash, isActive: true },
  });

  // Any existing sessions were issued against the old password.
  await prisma.session.deleteMany({ where: { adminId: admin.id } });

  console.log(`\n✓ Admin ready: ${admin.email} (${admin.name})`);
  console.log("  Sign in at /admin");
}

main()
  .catch((error) => {
    console.error(
      "\n✗ Seed failed:",
      error instanceof Error ? error.message : error,
    );
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
