"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import LanguageSwitcher from "@/components/layout/LanguageSwitcher";
import AgroMedIcon from "@/components/company/agromed/AgroMedIcon";
import type { AppLocale } from "@/i18n/routing";
import type { NavItem } from "@/types/content";

function Chevron({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
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

// Bespoke navbar for the MR Agro Medicine subdomain — a clean white healthcare
// bar with a teal accent and a hover/click "Products" dropdown listing the
// species categories. Distinct from the generic CompanyChrome header.
export default function AgroMedNavbar({
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
  const [openDesktopMenu, setOpenDesktopMenu] = useState<string | null>(null);
  const [openMobileSub, setOpenMobileSub] = useState<string | null>(null);
  const pathname = usePathname();

  const resolveHref = (href: string) =>
    href.startsWith("#") ? href : `/${locale}${href === "/" ? "" : href}`;

  const currentPath = (() => {
    let path = pathname.replace(new RegExp(`^/${locale}`), "");
    path = path.replace(/^\/companies\/agro-medicine/, "");
    return path === "" ? "/" : path;
  })();

  const isActive = (href: string) => {
    if (href.startsWith("#")) return false;
    if (href === "/") return currentPath === "/";
    return currentPath === href || currentPath.startsWith(`${href}/`);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-vet-line bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <a href={resolveHref("/")} className="flex items-center gap-2.5 text-vet-ink">
          {logoUrl ? (
            // eslint-disable-next-line @next/next/no-img-element -- served from our own byte-serving route, not an optimizable local asset
            <img src={logoUrl} alt={name} className="h-13.75 w-21.25 object-contain" />
          ) : (
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-vet-teal text-white">
              <AgroMedIcon name="shield" className="h-5 w-5" />
            </span>
          )}
          <span className="text-lg font-bold tracking-tight">{name}</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex lg:items-center lg:gap-1">
          {nav.map((item) =>
            item.children && item.children.length > 0 ? (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setOpenDesktopMenu(item.href)}
                onMouseLeave={() => setOpenDesktopMenu(null)}
              >
                <a
                  href={resolveHref(item.href)}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  aria-expanded={openDesktopMenu === item.href}
                  className={`flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    isActive(item.href) ? "bg-vet-mist text-vet-teal-dark" : "text-vet-ink/70 hover:text-vet-ink"
                  }`}
                >
                  {item.label}
                  <Chevron className="h-3.5 w-3.5" />
                </a>
                {openDesktopMenu === item.href && (
                  <div className="absolute left-1/2 top-full z-50 w-60 -translate-x-1/2 pt-2">
                    <div className="overflow-hidden rounded-2xl border border-vet-line bg-white p-2 shadow-xl shadow-vet-ink/5">
                      {item.children.map((child) => (
                        <a
                          key={child.href}
                          href={resolveHref(child.href)}
                          aria-current={isActive(child.href) ? "page" : undefined}
                          className={`flex items-center gap-2 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                            isActive(child.href)
                              ? "bg-vet-mist text-vet-teal-dark"
                              : "text-vet-ink/75 hover:bg-vet-mist hover:text-vet-teal-dark"
                          }`}
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-vet-lime" />
                          {child.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <a
                key={item.href}
                href={resolveHref(item.href)}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  isActive(item.href) ? "bg-vet-mist text-vet-teal-dark" : "text-vet-ink/70 hover:text-vet-ink"
                }`}
              >
                {item.label}
              </a>
            )
          )}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher accentClassName="bg-vet-teal" />
          <a
            href={`//${rootDomain}/${locale}`}
            className="rounded-full bg-vet-teal px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-vet-teal-dark"
          >
            {backToGroupLabel}
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="inline-flex items-center justify-center rounded-md p-2 text-vet-ink lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <MenuIcon open={isMenuOpen} />
        </button>
      </div>

      {/* Mobile nav */}
      {isMenuOpen && (
        <nav className="border-t border-vet-line bg-white px-6 pb-6 lg:hidden">
          <div className="flex flex-col gap-1 pt-4">
            {nav.map((item) =>
              item.children && item.children.length > 0 ? (
                <div key={item.href}>
                  <button
                    type="button"
                    onClick={() => setOpenMobileSub((cur) => (cur === item.href ? null : item.href))}
                    aria-expanded={openMobileSub === item.href}
                    className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm font-medium text-vet-ink/80"
                  >
                    {item.label}
                    <Chevron className={`h-4 w-4 transition-transform ${openMobileSub === item.href ? "rotate-180" : ""}`} />
                  </button>
                  {openMobileSub === item.href && (
                    <div className="ml-3 flex flex-col border-l border-vet-line pl-3">
                      <a
                        href={resolveHref(item.href)}
                        onClick={() => setIsMenuOpen(false)}
                        className="rounded-lg px-3 py-2 text-sm font-medium text-vet-teal-dark"
                      >
                        {item.label}
                      </a>
                      {item.children.map((child) => (
                        <a
                          key={child.href}
                          href={resolveHref(child.href)}
                          onClick={() => setIsMenuOpen(false)}
                          aria-current={isActive(child.href) ? "page" : undefined}
                          className={`rounded-lg px-3 py-2 text-sm ${
                            isActive(child.href) ? "text-vet-teal-dark" : "text-vet-ink/70"
                          }`}
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={item.href}
                  href={resolveHref(item.href)}
                  onClick={() => setIsMenuOpen(false)}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`rounded-lg px-3 py-2 text-sm font-medium ${
                    isActive(item.href) ? "bg-vet-mist text-vet-teal-dark" : "text-vet-ink/80"
                  }`}
                >
                  {item.label}
                </a>
              )
            )}
            <div className="mt-3 flex items-center justify-between border-t border-vet-line pt-4">
              <LanguageSwitcher accentClassName="bg-vet-teal" />
              <a
                href={`//${rootDomain}/${locale}`}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-full bg-vet-teal px-5 py-2.5 text-sm font-semibold text-white"
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
