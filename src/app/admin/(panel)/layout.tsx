import { requireAdmin } from "@/lib/session";
import { getUnreadMessageCount } from "@/lib/messages";
import AdminShell from "@/components/admin/AdminShell";

// The `(panel)` route group wraps every authenticated admin page in the
// sidebar + topbar chrome. `/admin/login` sits OUTSIDE this group, so the
// login screen renders full-bleed without the shell.
//
// This is the real authorization boundary: `requireAdmin()` runs on the server
// before any child page renders, and redirects to /admin/login when there's no
// valid session. Nothing protected is ever sent to an unauthenticated browser.
export default async function PanelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const admin = await requireAdmin();
  const unreadMessages = await getUnreadMessageCount();

  return (
    <AdminShell admin={admin} unreadMessages={unreadMessages}>
      {children}
    </AdminShell>
  );
}
