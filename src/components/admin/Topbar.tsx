"use client";

import { usePathname } from "next/navigation";
import type { CurrentAdmin } from "@/lib/session";
import { NAV_ITEMS } from "./nav";
import { BellIcon, MenuIcon, SearchIcon } from "./icons";

function usePageTitle() {
  const pathname = usePathname();
  const match = NAV_ITEMS.filter(
    (i) => pathname === i.href || (i.href !== "/admin" && pathname.startsWith(i.href)),
  ).sort((a, b) => b.href.length - a.href.length)[0];
  return match?.label ?? "Admin";
}

export default function Topbar({
  admin,
  onOpenMenu,
}: {
  admin: CurrentAdmin;
  onOpenMenu: () => void;
}) {
  const title = usePageTitle();
  const initial = (admin.name || admin.email).charAt(0).toUpperCase();

  return (
    <header className="sticky top-0 z-20 flex h-16 items-center gap-3 border-b border-neutral-200 bg-white/80 px-4 backdrop-blur sm:px-6">
      <button
        onClick={onOpenMenu}
        className="rounded-md p-2 text-neutral-600 hover:bg-neutral-100 lg:hidden"
        aria-label="Open menu"
      >
        <MenuIcon className="h-5 w-5" />
      </button>

      <h1 className="text-base font-semibold text-neutral-900">{title}</h1>

      {/* Search */}
      <div className="relative ml-auto hidden max-w-xs flex-1 sm:block">
        <SearchIcon className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-neutral-400" />
        <input
          type="search"
          placeholder="Search…"
          className="w-full rounded-lg border border-neutral-200 bg-neutral-50 py-2 pr-3 pl-9 text-sm text-neutral-700 placeholder:text-neutral-400 focus:border-orange-400 focus:bg-white focus:ring-2 focus:ring-orange-500/20 focus:outline-none"
        />
      </div>

      <button
        className="relative ml-auto rounded-lg p-2 text-neutral-600 hover:bg-neutral-100 sm:ml-0"
        aria-label="Notifications"
      >
        <BellIcon className="h-5 w-5" />
        <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-orange-600 ring-2 ring-white" />
      </button>

      {/* Profile — the signed-in admin from the verified server session */}
      <div className="flex items-center gap-2.5 pl-1">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-600 text-sm font-semibold text-white">
          {initial}
        </div>
        <div className="hidden leading-tight sm:block">
          <p className="text-sm font-medium text-neutral-900">{admin.name}</p>
          <p className="text-xs text-neutral-500">{admin.email}</p>
        </div>
      </div>
    </header>
  );
}
