"use server";

import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { MAX_PASSWORD_LENGTH, hashPassword, verifyPassword } from "@/lib/password";
import { getClientIp } from "@/lib/clientIp";
import { createRateLimiter } from "@/lib/rateLimit";
import {
  clearSessionCookie,
  createSession,
  deleteExpiredSessions,
  destroyAllSessionsFor,
  destroyCurrentSession,
  requireAdmin,
} from "@/lib/session";

export type LoginState = { error?: string };
export type PasswordState = { error?: string; success?: string };

const MIN_PASSWORD_LENGTH = 8;
const MAX_EMAIL_LENGTH = 254;
const WINDOW_MS = 15 * 60 * 1000;

// Every login attempt costs one scrypt run (~33 MB, ~100 ms) — including for
// unknown accounts, which hash a dummy — so unthrottled it is both a password
// guessing oracle and a cheap CPU/memory DoS. Failures are counted per client
// address and per account; successes clear the account counter. All state is
// in-memory (see src/lib/rateLimit.ts).
//
// Trade-off: anyone can lock a known email out for the window by failing on
// purpose. That's accepted for a small admin panel; the lock expires on its own.
const loginFailuresByIp = createRateLimiter({ name: "login-ip", limit: 20, windowMs: WINDOW_MS });
const loginFailuresByEmail = createRateLimiter({ name: "login-email", limit: 8, windowMs: WINDOW_MS });
// Overall ceiling on scrypt work from the login form, regardless of source —
// the client address is unknown when no trusted proxy header is present.
const loginAttemptsGlobal = createRateLimiter({ name: "login-global", limit: 40, windowMs: 60 * 1000 });
const passwordChangeFailures = createRateLimiter({ name: "password-change", limit: 5, windowMs: WINDOW_MS });

function tooManyAttempts(retryAfterSeconds: number): string {
  const minutes = Math.max(1, Math.ceil(retryAfterSeconds / 60));
  return `Too many attempts. Try again in ${minutes} minute${minutes === 1 ? "" : "s"}.`;
}
export async function loginAction(
  _prev: LoginState,
  formData: FormData,
): Promise<LoginState> {
  const email = String(formData.get("email") ?? "")
    .trim()
    .toLowerCase();
  const password = String(formData.get("password") ?? "");

  if (!email || !password) {
    return { error: "Please enter your email and password." };
  }

  // Same message as a wrong password so oversized input reveals nothing, and it
  // is rejected before any hashing work happens.
  if (email.length > MAX_EMAIL_LENGTH || password.length > MAX_PASSWORD_LENGTH) {
    return { error: "Invalid email or password." };
  }

  const ip = await getClientIp();
  const blocked = [
    loginAttemptsGlobal.hit("*"),
    loginFailuresByEmail.check(email),
    ...(ip ? [loginFailuresByIp.check(ip)] : []),
  ].find((r) => r.limited);
  if (blocked) return { error: tooManyAttempts(blocked.retryAfterSeconds || 60) };

  const admin = await prisma.admin.findUnique({ where: { email } });

  // Verify against a dummy hash when the account is missing so the response
  // time doesn't reveal which emails exist. The message stays identical for
  // "no such account", "wrong password", and "deactivated" for the same reason.
  const storedHash =
    admin?.passwordHash ??
    "scrypt$32768$8$1$AAAAAAAAAAAAAAAAAAAAAA==$AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA";

  const passwordOk = await verifyPassword(password, storedHash);

  if (!admin || !admin.isActive || !passwordOk) {
    loginFailuresByEmail.hit(email);
    if (ip) loginFailuresByIp.hit(ip);
    return { error: "Invalid email or password." };
  }

  loginFailuresByEmail.reset(email);

  // Drop any session this browser already holds so a login always starts a
  // fresh one (no stale row left behind until it expires).
  await destroyCurrentSession();

  const headerList = await headers();
  await createSession(admin.id, {
    userAgent: headerList.get("user-agent"),
    // Taken from the trusted end of x-forwarded-for — see src/lib/clientIp.ts.
    ipAddress: ip,
  });

  // Opportunistic housekeeping: nothing else ever calls this, so expired
  // session rows would otherwise pile up. Best-effort; never blocks sign-in.
  deleteExpiredSessions().catch((error) => console.error("Session cleanup failed:", error));

  await prisma.admin.update({
    where: { id: admin.id },
    data: { lastLoginAt: new Date() },
  });

  // redirect() throws, so it must sit outside any try/catch above.
  redirect("/admin");
}

export async function logoutAction(): Promise<void> {
  await destroyCurrentSession();
  redirect("/admin/login");
}

export async function changePasswordAction(
  _prev: PasswordState,
  formData: FormData,
): Promise<PasswordState> {
  const admin = await requireAdmin();

  const current = String(formData.get("currentPassword") ?? "");
  const next = String(formData.get("newPassword") ?? "");
  const confirm = String(formData.get("confirmPassword") ?? "");

  if (!current || !next || !confirm) {
    return { error: "All fields are required." };
  }
  if (current.length > MAX_PASSWORD_LENGTH) {
    return { error: "Current password is incorrect." };
  }
  if (next.length < MIN_PASSWORD_LENGTH) {
    return {
      error: `New password must be at least ${MIN_PASSWORD_LENGTH} characters.`,
    };
  }
  if (next.length > MAX_PASSWORD_LENGTH) {
    return {
      error: `New password must be ${MAX_PASSWORD_LENGTH} characters or fewer.`,
    };
  }
  if (next !== confirm) {
    return { error: "New passwords do not match." };
  }
  if (next === current) {
    return { error: "New password must be different from the current one." };
  }

  // A stolen session must not be able to brute-force the current password.
  const throttle = passwordChangeFailures.check(String(admin.id));
  if (throttle.limited) return { error: tooManyAttempts(throttle.retryAfterSeconds || 60) };

  const record = await prisma.admin.findUnique({ where: { id: admin.id } });
  if (!record || !(await verifyPassword(current, record.passwordHash))) {
    passwordChangeFailures.hit(String(admin.id));
    return { error: "Current password is incorrect." };
  }
  passwordChangeFailures.reset(String(admin.id));

  await prisma.admin.update({
    where: { id: admin.id },
    data: { passwordHash: await hashPassword(next) },
  });

  // Force every device (including this one) to sign in again with the new
  // password — standard practice after a credential change. Dropping the
  // cookie too means this browser doesn't keep sending a token that no longer
  // resolves to anything.
  await destroyAllSessionsFor(admin.id);
  await clearSessionCookie();
  redirect("/admin/login?passwordChanged=1");
}
