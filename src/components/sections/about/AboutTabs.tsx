"use client";

import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";

export default function AboutTabs() {
  const pathname = usePathname();
  const t = useTranslations("tabs");

  const TABS = [
    { label: t("overview"), href: "/about" },
    { label: t("history"), href: "/about/history" },
    { label: t("founder"), href: "/about/founder" },
    { label: t("missionVision"), href: "/about/mission-vision" },
    { label: t("milestones"), href: "/about/milestones" },
    { label: t("facilities"), href: "/about/facilities" },
    { label: t("faq"), href: "/about/faq" },
  ];

  return (
    <nav className="flex items-center gap-1.5 overflow-x-auto py-3">
      {TABS.map((tab) => {
        const isActive = pathname === tab.href;
        return (
          <Link
            key={tab.href}
            href={tab.href}
            className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition-all ${
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
