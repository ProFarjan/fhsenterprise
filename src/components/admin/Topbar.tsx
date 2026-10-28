"use client";

import { usePathname } from "next/navigation";
import type { CurrentAdmin } from "@/lib/session";
import { NAV_ITEMS } from "./nav";
import { MenuIcon } from "./icons";

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

      {/* Profile — the signed-in admin from the verified server session */}
      <div className="ml-auto flex items-center gap-2.5 pl-1">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-blue text-sm font-semibold text-white">
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
