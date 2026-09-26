"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import LanguageSwitcher from "@/components/layout/LanguageSwitcher";
import type { AppLocale } from "@/i18n/routing";
import type { NavItem } from "@/types/content";

// Flame brand mark — the Mahin Enterprise LPG signature.
function FlameMark() {
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
      <path d="M12 3c1.2 3 4 4.6 4 8.4A4 4 0 0 1 8 12c0-1.6.6-2.7 1.6-3.6.4 1.3 1.4 1.9 2 2.9.8-3.2.5-5.4-.6-8.3z" />
    </svg>
  );
}

function ChevronIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="h-6 w-6">
      {open ? (
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
      ) : (
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
      )}
    </svg>
  );
}

// Bespoke navbar for the Mahin Enterprise subdomain — a clean white bar with
// a flame-orange accent, sitting above the hero slider. Supports a
// hover/focus dropdown for the Products menu. Modelled on the sibling
// company navbars.
export default function MahinNavbar({
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
  const resolveHref = (href: string) => (href.startsWith("#") ? `/${locale}${href}` : `/${locale}${href === "/" ? "" : href}`);

  const currentPath = (() => {
    let path = pathname.replace(new RegExp(`^/${locale}`), "");
    path = path.replace(/^\/companies\/mahin/, "");
    return path === "" ? "/" : path;
  })();

  const isActive = (href: string) => {
    if (href.startsWith("#")) return false;
    if (href === "/") return currentPath === "/";
    return currentPath === href || currentPath.startsWith(`${href}/`);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-mahin-line bg-white text-mahin-navy">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <a href={resolveHref("/")} className="flex items-center gap-2.5 text-mahin-flame">
          {logoUrl ? (
            // eslint-disable-next-line @next/next/no-img-element -- served from our own byte-serving route, not an optimizable local asset
            <img src={logoUrl} alt={name} className="h-13.75 w-21.25 object-contain" />
          ) : (
            <FlameMark />
          )}
          <span className="font-mahin text-lg font-bold tracking-tight text-mahin-navy">{name}</span>
        </a>

        <nav className="hidden lg:flex lg:items-center lg:gap-1">
          {nav.map((item) =>
            item.children && item.children.length > 0 ? (
              <div key={item.href} className="group relative">
                <a
                  href={resolveHref(item.href)}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`flex items-center gap-1 rounded-md px-4 py-2 text-sm font-medium transition-colors group-hover:text-mahin-flame ${
                    isActive(item.href) ? "bg-mahin-mist text-mahin-flame" : "text-mahin-slate"
                  }`}
                >
                  {item.label}
                  <ChevronIcon className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
                </a>
                <div className="invisible absolute left-0 top-full z-50 min-w-64 translate-y-1 pt-2 opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                  <div className="overflow-hidden rounded-2xl border border-mahin-line bg-white py-2 shadow-xl shadow-mahin-navy/10">
                    {item.children.map((child) => (
                      <a
                        key={child.href}
                        href={resolveHref(child.href)}
                        className={`block border-l-2 px-5 py-2.5 text-sm font-medium transition-colors hover:border-mahin-flame hover:bg-mahin-mist ${
                          isActive(child.href) ? "border-mahin-flame text-mahin-flame" : "border-transparent text-mahin-navy"
                        }`}
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <a
                key={item.href}
                href={resolveHref(item.href)}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`rounded-md px-4 py-2 text-sm font-medium transition-colors hover:text-mahin-flame ${
                  isActive(item.href) ? "bg-mahin-mist text-mahin-flame" : "text-mahin-slate"
                }`}
              >
                {item.label}
              </a>
            )
          )}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <LanguageSwitcher accentClassName="bg-mahin-flame" />
          <a
            href={`//${rootDomain}/${locale}`}
            className="rounded-full bg-mahin-flame px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-mahin-flame-dark"
          >
            {backToGroupLabel}
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="inline-flex items-center justify-center rounded-md p-2 text-mahin-navy lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <MenuIcon open={isMenuOpen} />
        </button>
      </div>

      {isMenuOpen && (
        <nav className="border-t border-mahin-line bg-mahin-mist px-6 pb-6 lg:hidden">
          <div className="flex flex-col gap-1 pt-4">
            {nav.map((item) => (
              <div key={item.href}>
                <a
                  href={resolveHref(item.href)}
                  onClick={() => setIsMenuOpen(false)}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`block py-2 text-sm font-medium hover:text-mahin-flame ${
                    isActive(item.href) ? "text-mahin-flame" : "text-mahin-navy"
                  }`}
                >
                  {item.label}
                </a>
                {item.children && item.children.length > 0 && (
                  <div className="ml-3 flex flex-col gap-1 border-l border-mahin-line pl-3">
                    {item.children.map((child) => (
                      <a
                        key={child.href}
                        href={resolveHref(child.href)}
                        onClick={() => setIsMenuOpen(false)}
                        className={`block py-1.5 text-sm hover:text-mahin-flame ${
                          isActive(child.href) ? "text-mahin-flame" : "text-mahin-slate"
                        }`}
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="mt-3 flex items-center justify-between">
              <LanguageSwitcher accentClassName="bg-mahin-flame" />
              <a
                href={`//${rootDomain}/${locale}`}
                className="rounded-full bg-mahin-flame px-5 py-2 text-center text-sm font-semibold text-white hover:bg-mahin-flame-dark"
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
