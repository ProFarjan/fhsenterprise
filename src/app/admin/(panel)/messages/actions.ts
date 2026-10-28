"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/session";
import { describeActionError, ignoreNotFound, positiveInt } from "@/lib/actionGuards";

// Every action re-verifies the session itself: the (panel) layout's
// requireAdmin() does not protect Server Actions (each is its own POST endpoint).

// The list itself, plus the whole admin layout — the sidebar's unread badge is
// rendered by the layout, so it must refresh too.
function revalidateMessages() {
  revalidatePath("/admin/messages");
  revalidatePath("/admin", "layout");
}

export async function setMessageReadAction(formData: FormData): Promise<void> {
  await requireAdmin();
  const id = positiveInt(formData.get("id"));
  if (id === null) return;
  const isRead = formData.get("read") === "1";

  try {
    await prisma.contactMessage.update({ where: { id }, data: { isRead } });
  } catch (error) {
    describeActionError(error, "");
    return;
  }
  revalidateMessages();
}

export async function markAllMessagesReadAction(): Promise<void> {
  await requireAdmin();
  try {
    await prisma.contactMessage.updateMany({ where: { isRead: false }, data: { isRead: true } });
  } catch (error) {
    describeActionError(error, "");
    return;
  }
  revalidateMessages();
}

export async function deleteMessageAction(formData: FormData): Promise<void> {
  await requireAdmin();
  const id = positiveInt(formData.get("id"));
  if (id !== null) {
    await prisma.contactMessage.delete({ where: { id } }).catch(ignoreNotFound);
  }
  revalidateMessages();
}
