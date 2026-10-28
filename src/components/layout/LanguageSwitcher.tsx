"use client";

import { useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import type { AppLocale } from "@/i18n/routing";

const OPTIONS: { locale: AppLocale; label: string; full: string }[] = [
  { locale: "bn", label: "বাং", full: "বাংলা" },
  { locale: "en", label: "EN", full: "English" },
];

export default function LanguageSwitcher({
  transparent = false,
  accentClassName = "bg-orange-600",
}: {
  transparent?: boolean;
  /** Active-pill background class — lets company subdomains match their own theme. */
  accentClassName?: string;
}) {
  const locale = useLocale() as AppLocale;
  const pathname = usePathname();
  const activeIndex = locale === "en" ? 1 : 0;

  return (
    <div
      className={`relative inline-flex items-center rounded-full p-1 transition-colors duration-300 ${
        transparent ? "bg-white/10 ring-1 ring-white/20" : "bg-neutral-100 ring-1 ring-neutral-200"
      }`}
    >
      <span
        aria-hidden="true"
        className={`absolute inset-y-1 left-1 h-7 w-9 rounded-full shadow-sm transition-transform duration-300 ease-out ${accentClassName} ${
          activeIndex === 1 ? "translate-x-9" : "translate-x-0"
        }`}
      />
      {OPTIONS.map((option) => {
        const isActive = option.locale === locale;
        return (
          <Link
            key={option.locale}
            href={pathname}
            locale={option.locale}
            aria-label={option.full}
            lang={option.locale}
            hrefLang={option.locale}
            aria-current={isActive ? "true" : undefined}
            className={`relative z-10 flex h-7 w-9 items-center justify-center rounded-full text-xs font-semibold transition-colors duration-300 ${
              isActive
                ? "text-white"
                : transparent
                  ? "text-white/70 hover:text-white"
                  : "text-neutral-500 hover:text-neutral-900"
            }`}
          >
            {option.label}
          </Link>
        );
      })}
    </div>
  );
}
