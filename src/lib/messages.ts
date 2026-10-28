import { prisma } from "@/lib/prisma";

// Unread contact-form submissions, for the admin sidebar badge and dashboard.
// This runs in the (panel) layout on EVERY admin page, so a failure (e.g. the
// ContactMessage migration not applied yet, or the DB briefly unreachable) must
// degrade to "0" rather than take the whole admin panel down.
export async function getUnreadMessageCount(): Promise<number> {
  try {
    return await prisma.contactMessage.count({ where: { isRead: false } });
  } catch (error) {
    console.error("Failed to count unread contact messages:", error);
    return 0;
  }
}
