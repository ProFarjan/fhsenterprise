"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import LanguageSwitcher from "@/components/layout/LanguageSwitcher";
import type { AppLocale } from "@/i18n/routing";
import type { NavItem } from "@/types/content";

// Molecule brand mark — the Rahim Enterprise ammonia (NH₃) signature.
function MoleculeMark() {
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
      <circle cx="12" cy="6" r="2" />
      <circle cx="6" cy="17" r="2" />
      <circle cx="18" cy="17" r="2" />
      <path d="M11 7.7 7 15.3M13 7.7l4 7.6M8 17h8" />
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

// Bespoke navbar for the Rahim Enterprise subdomain — a clean white bar with
// a cyan accent, sitting above the hero slider. Supports a hover/focus
// dropdown for the Products menu. Modelled on the sibling company navbars.
export default function RahimNavbar({
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
    path = path.replace(/^\/companies\/rahim/, "");
    return path === "" ? "/" : path;
  })();

  const isActive = (href: string) => {
    if (href.startsWith("#")) return false;
    if (href === "/") return currentPath === "/";
    return currentPath === href || currentPath.startsWith(`${href}/`);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-rahim-line bg-white text-rahim-slate">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <a href={resolveHref("/")} className="flex items-center gap-2.5 text-rahim-cyan">
          {logoUrl ? (
            // eslint-disable-next-line @next/next/no-img-element -- served from our own byte-serving route, not an optimizable local asset
            <img src={logoUrl} alt={name} className="h-13.75 w-21.25 object-contain" />
          ) : (
            <MoleculeMark />
          )}
          <span className="font-rahim text-lg font-bold tracking-tight text-rahim-slate">{name}</span>
        </a>

        <nav className="hidden lg:flex lg:items-center lg:gap-1">
          {nav.map((item) =>
            item.children && item.children.length > 0 ? (
              <div key={item.href} className="group relative">
                <a
                  href={resolveHref(item.href)}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`flex items-center gap-1 rounded-md px-4 py-2 text-sm font-medium transition-colors group-hover:text-rahim-cyan ${
                    isActive(item.href) ? "bg-rahim-frost text-rahim-cyan" : "text-rahim-steel"
                  }`}
                >
                  {item.label}
                  <ChevronIcon className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
                </a>
                <div className="invisible absolute left-0 top-full z-50 min-w-72 translate-y-1 pt-2 opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                  <div className="overflow-hidden rounded-2xl border border-rahim-line bg-white py-2 shadow-xl shadow-rahim-slate/10">
                    {item.children.map((child) => (
                      <a
                        key={child.href}
                        href={resolveHref(child.href)}
                        className={`block border-l-2 px-5 py-2.5 text-sm font-medium transition-colors hover:border-rahim-cyan hover:bg-rahim-frost ${
                          isActive(child.href) ? "border-rahim-cyan text-rahim-cyan" : "border-transparent text-rahim-slate"
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
                className={`rounded-md px-4 py-2 text-sm font-medium transition-colors hover:text-rahim-cyan ${
                  isActive(item.href) ? "bg-rahim-frost text-rahim-cyan" : "text-rahim-steel"
                }`}
              >
                {item.label}
              </a>
            )
          )}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <LanguageSwitcher accentClassName="bg-rahim-cyan" />
          <a
            href={`//${rootDomain}/${locale}`}
            className="rounded-full bg-rahim-cyan px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-rahim-cyan-dark"
          >
            {backToGroupLabel}
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="inline-flex items-center justify-center rounded-md p-2 text-rahim-slate lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <MenuIcon open={isMenuOpen} />
        </button>
      </div>

      {isMenuOpen && (
        <nav className="border-t border-rahim-line bg-rahim-frost px-6 pb-6 lg:hidden">
          <div className="flex flex-col gap-1 pt-4">
            {nav.map((item) => (
              <div key={item.href}>
                <a
                  href={resolveHref(item.href)}
                  onClick={() => setIsMenuOpen(false)}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`block py-2 text-sm font-medium hover:text-rahim-cyan ${
                    isActive(item.href) ? "text-rahim-cyan" : "text-rahim-slate"
                  }`}
                >
                  {item.label}
                </a>
                {item.children && item.children.length > 0 && (
                  <div className="ml-3 flex flex-col gap-1 border-l border-rahim-line pl-3">
                    {item.children.map((child) => (
                      <a
                        key={child.href}
                        href={resolveHref(child.href)}
                        onClick={() => setIsMenuOpen(false)}
                        className={`block py-1.5 text-sm hover:text-rahim-cyan ${
                          isActive(child.href) ? "text-rahim-cyan" : "text-rahim-steel"
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
              <LanguageSwitcher accentClassName="bg-rahim-cyan" />
              <a
                href={`//${rootDomain}/${locale}`}
                className="rounded-full bg-rahim-cyan px-5 py-2 text-center text-sm font-semibold text-white hover:bg-rahim-cyan-dark"
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
