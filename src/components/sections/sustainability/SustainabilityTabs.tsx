"use client";

import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";

// Tab label (messages `tabs.*`) per pillar slug. A tab is only shown when the
// pillar has content (`slugs`), so the tab bar never links to a 404.
const PILLAR_TAB_KEYS: Record<string, "health" | "education" | "communityDevelopment" | "environment"> = {
  health: "health",
  education: "education",
  "community-development": "communityDevelopment",
  environment: "environment",
};

// Order the tabs have always been shown in.
const PILLAR_ORDER = ["health", "education", "community-development", "environment"];

export default function SustainabilityTabs({ slugs }: { slugs: string[] }) {
  const pathname = usePathname();
  const t = useTranslations("tabs");

  const TABS = [
    { label: t("overview"), href: "/sustainability" },
    ...PILLAR_ORDER.filter((slug) => slugs.includes(slug)).map((slug) => ({
      label: t(PILLAR_TAB_KEYS[slug]),
      href: `/sustainability/${slug}`,
    })),
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
