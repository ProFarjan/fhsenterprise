"use server";

import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { hashPassword, verifyPassword } from "@/lib/password";
import {
  clearSessionCookie,
  createSession,
  destroyAllSessionsFor,
  destroyCurrentSession,
  requireAdmin,
} from "@/lib/session";

export type LoginState = { error?: string };
export type PasswordState = { error?: string; success?: string };

const MIN_PASSWORD_LENGTH = 8;

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

  const admin = await prisma.admin.findUnique({ where: { email } });

  // Verify against a dummy hash when the account is missing so the response
  // time doesn't reveal which emails exist. The message stays identical for
  // "no such account", "wrong password", and "deactivated" for the same reason.
  const storedHash =
    admin?.passwordHash ??
    "scrypt$32768$8$1$AAAAAAAAAAAAAAAAAAAAAA==$AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA";

  const passwordOk = await verifyPassword(password, storedHash);

  if (!admin || !admin.isActive || !passwordOk) {
    return { error: "Invalid email or password." };
  }

  const headerList = await headers();
  await createSession(admin.id, {
    userAgent: headerList.get("user-agent"),
    // x-forwarded-for is a list when proxied; the first entry is the client.
    ipAddress: headerList.get("x-forwarded-for")?.split(",")[0].trim() ?? null,
  });

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
  if (next.length < MIN_PASSWORD_LENGTH) {
    return {
      error: `New password must be at least ${MIN_PASSWORD_LENGTH} characters.`,
    };
  }
  if (next !== confirm) {
    return { error: "New passwords do not match." };
  }
  if (next === current) {
    return { error: "New password must be different from the current one." };
  }

  const record = await prisma.admin.findUnique({ where: { id: admin.id } });
  if (!record || !(await verifyPassword(current, record.passwordHash))) {
    return { error: "Current password is incorrect." };
  }

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
