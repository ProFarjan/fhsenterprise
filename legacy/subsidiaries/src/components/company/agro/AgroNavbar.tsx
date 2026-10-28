"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import LanguageSwitcher from "@/components/layout/LanguageSwitcher";
import type { AppLocale } from "@/i18n/routing";
import type { NavItem } from "@/types/content";

function LeafMark() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-7 w-7"
    >
      <path d="M12 21c-4.5 0-8-3.5-8-8 0-6 8-10 8-10s8 4 8 10c0 4.5-3.5 8-8 8z" />
      <path d="M12 21V9" />
    </svg>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.8}
      stroke="currentColor"
      className="h-6 w-6"
    >
      {open ? (
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
      ) : (
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
      )}
    </svg>
  );
}

// Bespoke navbar for the MR Agro subdomain — a solid forest-green bar (same
// tone as AgroFooter) that always sits above the hero, not floating over it.
// Unlike the generic CompanyChrome header (used by the other, not-yet-designed
// company sites), this is agro-only.
export default function AgroNavbar({
  name,
  logoUrl,
  nav,
  locale,
  rootDomain,
  backToGroupLabel,
}: {
  name: string;
  logoUrl?: string | null;
  nav: NavItem[];
  locale: AppLocale;
  rootDomain: string;
  backToGroupLabel: string;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const resolveHref = (href: string) => (href.startsWith("#") ? href : `/${locale}${href === "/" ? "" : href}`);

  // Strip the locale prefix and, when visited directly on the main domain
  // (e.g. in dev/testing) rather than through the agro subdomain rewrite, the
  // "/companies/agro" prefix too, so both URL shapes resolve to the same
  // clean path as the `nav` items' `href` values (e.g. "/products").
  const currentPath = (() => {
    let path = pathname.replace(new RegExp(`^/${locale}`), "");
    path = path.replace(/^\/companies\/agro/, "");
    return path === "" ? "/" : path;
  })();

  const isActive = (href: string) => {
    if (href.startsWith("#")) return false;
    if (href === "/") return currentPath === "/";
    return currentPath === href || currentPath.startsWith(`${href}/`);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-green-900 text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <a href={resolveHref("/")} className="flex items-center gap-2.5">
          {logoUrl ? (
            // eslint-disable-next-line @next/next/no-img-element -- served from our own byte-serving route, not an optimizable local asset
            <img src={logoUrl} alt={name} className="h-13.75 w-21.25 object-contain" />
          ) : (
            <LeafMark />
          )}
          <span className="text-lg font-bold tracking-tight">{name}</span>
        </a>

        <nav className="hidden lg:flex lg:items-center lg:gap-1">
          {nav.map((item) => (
            <a
              key={item.href}
              href={resolveHref(item.href)}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`rounded-md px-4 py-2 text-sm font-medium transition-colors hover:text-agro-gold ${
                isActive(item.href) ? "bg-white/10 text-agro-gold" : "text-green-50/85"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <LanguageSwitcher transparent accentClassName="bg-agro-leaf" />
          <a
            href={`//${rootDomain}/${locale}`}
            className="rounded-full bg-agro-gold px-5 py-2 text-sm font-semibold text-agro-forest transition-colors hover:bg-agro-gold/85"
          >
            {backToGroupLabel}
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="inline-flex items-center justify-center rounded-md p-2 text-white lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <MenuIcon open={isMenuOpen} />
        </button>
      </div>

      {isMenuOpen && (
        <nav className="border-t border-white/10 bg-agro-forest px-6 pb-6 lg:hidden">
          <div className="flex flex-col gap-1 pt-4">
            {nav.map((item) => (
              <a
                key={item.href}
                href={resolveHref(item.href)}
                onClick={() => setIsMenuOpen(false)}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`py-2 text-sm font-medium hover:text-agro-gold ${
                  isActive(item.href) ? "text-agro-gold" : "text-green-50/85"
                }`}
              >
                {item.label}
              </a>
            ))}
            <div className="mt-2 flex items-center justify-between">
              <LanguageSwitcher transparent accentClassName="bg-agro-leaf" />
              <a
                href={`//${rootDomain}/${locale}`}
                className="rounded-full bg-agro-gold px-5 py-2 text-center text-sm font-semibold text-agro-forest hover:bg-agro-gold/85"
              >
                {backToGroupLabel}
              </a>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
