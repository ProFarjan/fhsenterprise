"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { logoutAction } from "@/app/admin/actions";
import { NAV_ITEMS } from "./nav";
import { CloseIcon, LogoutIcon } from "./icons";

// A nav entry is active on its own page and any page beneath it, except the
// dashboard root ("/admin") which only matches exactly.
function useIsActive() {
  const pathname = usePathname();
  return (href: string) =>
    href === "/admin"
      ? pathname === "/admin"
      : pathname === href || pathname.startsWith(`${href}/`);
}

export default function Sidebar({
  mobileOpen,
  onClose,
  unreadMessages,
}: {
  mobileOpen: boolean;
  onClose: () => void;
  unreadMessages: number;
}) {
  const isActive = useIsActive();

  return (
    <>
      {/* Mobile backdrop */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-30 bg-black/50 transition-opacity lg:hidden ${
          mobileOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden
      />

      <aside
        className={`fixed inset-y-0 left-0 z-40 flex w-64 flex-col bg-neutral-900 text-neutral-300 transition-transform lg:translate-x-0 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Brand */}
        <div className="flex h-16 items-center gap-3 px-5">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-blue text-sm font-bold text-white">
            FHS
          </div>
          <div className="leading-tight">
            <p className="text-sm font-semibold text-white">FHS Enterprise</p>
            <p className="text-xs text-neutral-500">Admin Panel</p>
          </div>
          <button
            onClick={onClose}
            className="ml-auto rounded-md p-1.5 text-neutral-400 hover:bg-white/5 hover:text-white lg:hidden"
            aria-label="Close menu"
          >
            <CloseIcon className="h-5 w-5" />
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-4">
          <p className="px-3 pb-2 text-[11px] font-semibold tracking-wider text-neutral-600 uppercase">
            Menu
          </p>
          {NAV_ITEMS.map((item) => {
            const active = isActive(item.href);
            const Icon = item.icon;
            const badge = item.href === "/admin/messages" ? unreadMessages : 0;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={`group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                  active
                    ? "bg-brand-blue text-white"
                    : "text-neutral-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                <Icon className="h-5 w-5 shrink-0" />
                <span>{item.label}</span>
                {badge > 0 ? (
                  <span
                    className={`ml-auto rounded-full px-2 py-0.5 text-[11px] font-semibold ${
                      active ? "bg-white/25 text-white" : "bg-brand-blue/90 text-white"
                    }`}
                    aria-label={`${badge} unread`}
                  >
                    {badge > 99 ? "99+" : badge}
                  </span>
                ) : null}
              </Link>
            );
          })}
        </nav>

        {/* Footer / logout — a form posting to a Server Action, so the session
            row and its cookie are destroyed on the server. */}
        <div className="border-t border-white/5 p-3">
          <form action={logoutAction}>
            <button
              type="submit"
              className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-neutral-400 transition-colors hover:bg-white/5 hover:text-white"
            >
              <LogoutIcon className="h-5 w-5 shrink-0" />
              Sign out
            </button>
          </form>
        </div>
      </aside>
    </>
  );
}
