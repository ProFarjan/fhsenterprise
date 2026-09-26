"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { getSiteConfig } from "@/data/site";
import type { AppLocale } from "@/i18n/routing";
import SocialIcon from "@/components/icons/SocialIcon";
import LanguageSwitcher from "@/components/layout/LanguageSwitcher";

export default function Header() {
  const locale = useLocale() as AppLocale;
  const siteConfig = getSiteConfig(locale);
  const t = useTranslations("nav");
  const pathname = usePathname();
  const isHome = pathname === "/";

  // A nav entry is "active" when you're on its page or any page beneath it.
  // Home ("/") only matches exactly so it isn't active on every route.
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openMobileSection, setOpenMobileSection] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (!isHome) return;
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  // Transparent-over-video treatment only makes sense on the homepage hero.
  // Every other page (no video behind the navbar) always gets the solid bar.
  const isTransparent = isHome && !isScrolled;

  const linkColor = isTransparent
    ? "text-white hover:text-orange-400"
    : "text-neutral-700 hover:text-orange-600";

  // Highlight for the current page, tuned for each navbar background.
  const activeColor = isTransparent
    ? "font-semibold text-orange-400"
    : "font-semibold text-orange-600";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        isTransparent
          ? "border-b border-transparent bg-transparent text-white"
          : "border-b border-neutral-200 bg-white text-neutral-900 shadow-sm"
      }`}
    >
      {/* Top utility bar — only on the homepage, at the very top; collapses away on scroll */}
      <div
        className={`overflow-hidden border-b border-white/10 bg-black/10 transition-[max-height,opacity] duration-300 ${
          isTransparent ? "max-h-12 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 lg:px-8">
          <div className="flex items-center gap-4">
            {siteConfig.socials.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="text-white/80 transition-colors hover:text-orange-400"
              >
                <SocialIcon label={social.label} />
              </Link>
            ))}
          </div>
          <Link
            href="/contact"
            className="text-xs font-medium text-white/80 transition-colors hover:text-orange-400"
          >
            {t("contactUs")}
          </Link>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center rounded-lg bg-white px-3 py-1.5">
          <Image
            src="/logos/logo-navbar.png"
            alt={siteConfig.groupName}
            width={800}
            height={540}
            priority
            className="h-9 w-auto sm:h-10"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex lg:items-center lg:gap-1">
          {siteConfig.nav.map((item) =>
            item.children ? (
              <div key={item.href} className="group relative">
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`flex items-center gap-1 rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                    isActive(item.href) ? activeColor : linkColor
                  }`}
                >
                  {item.label}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.168l3.71-3.938a.75.75 0 1 1 1.08 1.04l-4.25 4.5a.75.75 0 0 1-1.08 0l-4.25-4.5a.75.75 0 0 1 .02-1.06Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>

                {/* Dropdown — always solid white for legibility regardless of navbar state */}
                <div className="invisible absolute left-0 top-full z-50 min-w-56 rounded-lg border border-neutral-200 bg-white py-2 opacity-0 shadow-xl transition-all duration-150 group-hover:visible group-hover:opacity-100">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      aria-current={isActive(child.href) ? "page" : undefined}
                      className={`block px-4 py-2 text-sm hover:bg-neutral-50 hover:text-orange-600 ${
                        isActive(child.href)
                          ? "font-semibold text-orange-600"
                          : "text-neutral-700"
                      }`}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                  isActive(item.href) ? activeColor : linkColor
                }`}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher transparent={isTransparent} />
          <Link
            href="/contact"
            className="rounded-md bg-orange-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-orange-500"
          >
            {t("contactUs")}
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          className={`inline-flex items-center justify-center rounded-md p-2 lg:hidden ${
            isTransparent ? "text-white" : "text-neutral-900"
          }`}
          aria-label={t("toggleMenu")}
          aria-expanded={isMenuOpen}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.8}
            stroke="currentColor"
            className="h-6 w-6"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile nav panel — solid white regardless of navbar state */}
      {isMenuOpen && (
        <nav className="border-t border-neutral-200 bg-white px-6 pb-4 text-neutral-900 lg:hidden">
          <div className="flex flex-col gap-1 pt-4">
            {siteConfig.nav.map((item) =>
              item.children ? (
                <div key={item.href}>
                  <button
                    type="button"
                    onClick={() =>
                      setOpenMobileSection((open) => (open === item.href ? null : item.href))
                    }
                    className={`flex w-full items-center justify-between py-2 text-sm font-medium ${
                      isActive(item.href) ? "text-orange-600" : "text-neutral-700"
                    }`}
                  >
                    {item.label}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className={`h-4 w-4 transition-transform ${
                        openMobileSection === item.href ? "rotate-180" : ""
                      }`}
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.168l3.71-3.938a.75.75 0 1 1 1.08 1.04l-4.25 4.5a.75.75 0 0 1-1.08 0l-4.25-4.5a.75.75 0 0 1 .02-1.06Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  {openMobileSection === item.href && (
                    <div className="flex flex-col gap-1 border-l border-neutral-200 pl-4">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setIsMenuOpen(false)}
                          aria-current={isActive(child.href) ? "page" : undefined}
                          className={`py-1.5 text-sm hover:text-orange-600 ${
                            isActive(child.href)
                              ? "font-semibold text-orange-600"
                              : "text-neutral-600"
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`py-2 text-sm font-medium hover:text-orange-600 ${
                    isActive(item.href) ? "font-semibold text-orange-600" : "text-neutral-700"
                  }`}
                >
                  {item.label}
                </Link>
              ),
            )}
            <div className="mt-2 flex items-center justify-between">
              <span className="text-sm font-medium text-neutral-700">{t("language")}</span>
              <LanguageSwitcher />
            </div>
            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="mt-2 rounded-md bg-orange-600 px-5 py-2.5 text-center text-sm font-semibold text-white hover:bg-orange-500"
            >
              {t("contactUs")}
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
