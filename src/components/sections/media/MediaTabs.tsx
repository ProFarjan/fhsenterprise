"use client";

import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";

export default function MediaTabs() {
  const pathname = usePathname();
  const t = useTranslations("tabs");

  const TABS = [
    { label: t("overview"), href: "/media" },
    { label: t("news"), href: "/media/news" },
    { label: t("events"), href: "/media/events" },
    { label: t("gallery"), href: "/media/gallery" },
  ];

  return (
    <nav className="flex flex-wrap items-center gap-1.5 rounded-full border border-neutral-200 bg-white p-1.5 shadow-sm">
      {TABS.map((tab) => {
        const isActive = pathname === tab.href;
        return (
          <Link
            key={tab.href}
            href={tab.href}
            aria-current={isActive ? "page" : undefined}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              isActive
                ? "bg-[#0045A0] text-white shadow-sm ring-1 ring-[#0045A0]"
                : "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900"
            }`}
          >
            {tab.label}
          </Link>
        );
      })}
    </nav>
  );
}
