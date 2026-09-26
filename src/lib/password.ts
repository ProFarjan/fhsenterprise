import { randomBytes, scrypt as scryptCb, timingSafeEqual } from "node:crypto";
import { promisify } from "node:util";

// Password hashing for admin accounts.
//
// Uses scrypt from Node's built-in crypto — a memory-hard KDF recommended by
// OWASP for password storage — so the project takes on no extra dependency for
// something this security-critical. Importing this module from a Client
// Component fails the build (node:crypto has no browser bundle), which is a
// useful guard in itself.
//
// Stored format (single self-describing string, so parameters can be raised
// later without invalidating existing hashes):
//   scrypt$<N>$<r>$<p>$<salt-base64>$<hash-base64>

const scrypt = promisify(scryptCb) as (
  password: string | Buffer,
  salt: Buffer,
  keylen: number,
  options: { N: number; r: number; p: number; maxmem: number },
) => Promise<Buffer>;

// N=32768, r=8, p=1 needs 128*N*r ≈ 33.5 MB and lands around ~100ms on a
// typical server — comfortably above OWASP's floor while staying responsive.
const N = 32768;
const R = 8;
const P = 1;
const KEY_LENGTH = 64;
const SALT_LENGTH = 16;
const MAX_MEM = 96 * 1024 * 1024;

// Normalising means a password typed with a different Unicode composition
// (common for non-ASCII input) still verifies.
const normalize = (password: string) => password.normalize("NFKC");

export async function hashPassword(password: string): Promise<string> {
  const salt = randomBytes(SALT_LENGTH);
  const hash = await scrypt(normalize(password), salt, KEY_LENGTH, {
    N,
    r: R,
    p: P,
    maxmem: MAX_MEM,
  });
  return [
    "scrypt",
    N,
    R,
    P,
    salt.toString("base64"),
    hash.toString("base64"),
  ].join("$");
}

export async function verifyPassword(
  password: string,
  stored: string,
): Promise<boolean> {
  const parts = stored.split("$");
  if (parts.length !== 6 || parts[0] !== "scrypt") return false;

  const [, nRaw, rRaw, pRaw, saltB64, hashB64] = parts;
  const n = Number(nRaw);
  const r = Number(rRaw);
  const p = Number(pRaw);
  if (!Number.isInteger(n) || !Number.isInteger(r) || !Number.isInteger(p)) {
    return false;
  }

  const expected = Buffer.from(hashB64, "base64");
  if (expected.length === 0) return false;

  try {
    const actual = await scrypt(
      normalize(password),
      Buffer.from(saltB64, "base64"),
      expected.length,
      { N: n, r, p, maxmem: MAX_MEM },
    );
    // Constant-time compare so a wrong password can't be narrowed by timing.
    return timingSafeEqual(actual, expected);
  } catch {
    return false;
  }
}
