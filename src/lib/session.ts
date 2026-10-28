import { createHash, randomBytes } from "node:crypto";
import { cache } from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { prisma } from "./prisma";

// Database-backed admin sessions.
//
// The browser holds only an opaque random token; the database stores its
// SHA-256. A leaked database therefore cannot be replayed as a login, and
// sessions stay individually revocable (which a stateless JWT would not be).

const COOKIE_NAME = "mr_admin_session";
const SESSION_DURATION_MS = 7 * 24 * 60 * 60 * 1000; // 7 days

export type CurrentAdmin = {
  id: number;
  email: string;
  name: string;
  role: string;
};

// The token is high-entropy and random, so a fast digest is appropriate here —
// this is a lookup key, not a password.
const hashToken = (token: string) =>
  createHash("sha256").update(token).digest("hex");

export async function createSession(
  adminId: number,
  meta?: { userAgent?: string | null; ipAddress?: string | null },
): Promise<void> {
  const token = randomBytes(32).toString("base64url");
  const expiresAt = new Date(Date.now() + SESSION_DURATION_MS);

  await prisma.session.create({
    data: {
      id: hashToken(token),
      adminId,
      expiresAt,
      userAgent: meta?.userAgent?.slice(0, 255) ?? null,
      ipAddress: meta?.ipAddress?.slice(0, 45) ?? null,
    },
  });

  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, token, {
    httpOnly: true, // not readable by JavaScript
    secure: process.env.NODE_ENV === "production", // https-only in prod
    sameSite: "lax", // survives top-level navigation, blocks cross-site POSTs
    expires: expiresAt,
    path: "/",
  });
}

// Reads the current admin, or null. Wrapped in React's `cache` so the layout,
// the topbar, and any page can each call it within one request without
// repeating the query.
//
// Deliberately performs no writes: this runs during Server Component render,
// where cookies cannot be modified. Expired rows are simply ignored here and
// cleared by `deleteExpiredSessions`.
export const getCurrentAdmin = cache(async (): Promise<CurrentAdmin | null> => {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;
  if (!token) return null;

  // Select only what the app needs — never load `passwordHash` on every request.
  const session = await prisma.session.findUnique({
    where: { id: hashToken(token) },
    select: {
      expiresAt: true,
      admin: { select: { id: true, email: true, name: true, role: true, isActive: true } },
    },
  });

  if (!session) return null;
  if (session.expiresAt.getTime() <= Date.now()) return null;
  if (!session.admin.isActive) return null;

  return {
    id: session.admin.id,
    email: session.admin.email,
    name: session.admin.name,
    role: session.admin.role,
  };
});

// Guard for admin pages — use at the top of a protected layout or page.
export async function requireAdmin(): Promise<CurrentAdmin> {
  const admin = await getCurrentAdmin();
  if (!admin) redirect("/admin/login");
  return admin;
}

// Drops the cookie without touching the database — used when the session rows
// have already been removed. Must be called from a Server Action or Route
// Handler (cookie writes are not allowed during render).
export async function clearSessionCookie(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE_NAME);
}

// Revokes the caller's session row and clears the cookie. Must be called from
// a Server Action or Route Handler (cookie writes are not allowed in render).
export async function destroyCurrentSession(): Promise<void> {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;

  if (token) {
    // Already-deleted rows are fine to ignore — the goal is that it's gone.
    await prisma.session
      .delete({ where: { id: hashToken(token) } })
      .catch(() => undefined);
  }

  cookieStore.delete(COOKIE_NAME);
}

// Used after a password change so other devices are forced to sign in again.
export async function destroyAllSessionsFor(adminId: number): Promise<void> {
  await prisma.session.deleteMany({ where: { adminId } });
}

export async function deleteExpiredSessions(): Promise<void> {
  await prisma.session.deleteMany({ where: { expiresAt: { lte: new Date() } } });
}
