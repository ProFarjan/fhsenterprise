"use client";

import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";

export default function SustainabilityTabs() {
  const pathname = usePathname();
  const t = useTranslations("tabs");

  const TABS = [
    { label: t("overview"), href: "/sustainability" },
    { label: t("health"), href: "/sustainability/health" },
    { label: t("education"), href: "/sustainability/education" },
    { label: t("communityDevelopment"), href: "/sustainability/community-development" },
    { label: t("environment"), href: "/sustainability/environment" },
  ];

  return (
    <nav className="flex flex-wrap items-center gap-1.5 rounded-full border border-neutral-200 bg-white p-1.5 shadow-sm">
      {TABS.map((tab) => {
        const isActive = pathname === tab.href;
        return (
          <Link
            key={tab.href}
            href={tab.href}
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
