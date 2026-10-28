"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import LanguageSwitcher from "@/components/layout/LanguageSwitcher";
import FillingIcon from "@/components/company/filling/FillingIcon";
import type { AppLocale } from "@/i18n/routing";
import type { NavItem } from "@/types/content";

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

// Bespoke navbar for the MR Filling Station subdomain — a clean, solid white bar
// with a single blue accent and a black "Get in touch" pill, echoing the
// Soltera-inspired look. Distinct from the generic CompanyChrome header used by
// the other, not-yet-designed company sites.
export default function FillingNavbar({
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
  const resolveHref = (href: string) =>
    href.startsWith("#") ? href : `/${locale}${href === "/" ? "" : href}`;

  // Strip the locale prefix and — when visited directly on the main domain
  // rather than through the filling-station subdomain rewrite — the
  // "/companies/filling-station" prefix too, so both URL shapes resolve to the
  // same clean path as the nav items' href values (e.g. "/services").
  const currentPath = (() => {
    let path = pathname.replace(new RegExp(`^/${locale}`), "");
    path = path.replace(/^\/companies\/filling-station/, "");
    return path === "" ? "/" : path;
  })();

  const isActive = (href: string) => {
    if (href.startsWith("#")) return false;
    if (href === "/") return currentPath === "/";
    return currentPath === href || currentPath.startsWith(`${href}/`);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-fuel-line bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <a href={resolveHref("/")} className="flex items-center gap-2.5 text-fuel-ink">
          {logoUrl ? (
            // eslint-disable-next-line @next/next/no-img-element -- served from our own byte-serving route, not an optimizable local asset
            <img src={logoUrl} alt={name} className="h-13.75 w-21.25 object-contain" />
          ) : (
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-fuel-ink text-white">
              <FillingIcon name="fuel" className="h-5 w-5" />
            </span>
          )}
          <span className="text-lg font-bold tracking-tight">{name}</span>
        </a>

        <nav className="hidden lg:flex lg:items-center lg:gap-1">
          {nav.map((item) => (
            <a
              key={item.href}
              href={resolveHref(item.href)}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                isActive(item.href)
                  ? "bg-fuel-sky text-fuel-blue-dark"
                  : "text-fuel-steel hover:text-fuel-ink"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher accentClassName="bg-fuel-blue" />
          <a
            href={`//${rootDomain}/${locale}`}
            className="rounded-full bg-fuel-ink px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-fuel-slate"
          >
            {backToGroupLabel}
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="inline-flex items-center justify-center rounded-md p-2 text-fuel-ink lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <MenuIcon open={isMenuOpen} />
        </button>
      </div>

      {isMenuOpen && (
        <nav className="border-t border-fuel-line bg-white px-6 pb-6 lg:hidden">
          <div className="flex flex-col gap-1 pt-4">
            {nav.map((item) => (
              <a
                key={item.href}
                href={resolveHref(item.href)}
                onClick={() => setIsMenuOpen(false)}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`rounded-lg px-3 py-2 text-sm font-medium ${
                  isActive(item.href) ? "bg-fuel-sky text-fuel-blue-dark" : "text-fuel-steel"
                }`}
              >
                {item.label}
              </a>
            ))}
            <div className="mt-3 flex items-center justify-between border-t border-fuel-line pt-4">
              <LanguageSwitcher accentClassName="bg-fuel-blue" />
              <a
                href={`//${rootDomain}/${locale}`}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-full bg-fuel-ink px-5 py-2.5 text-sm font-semibold text-white"
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
