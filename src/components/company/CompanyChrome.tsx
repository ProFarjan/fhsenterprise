import Image from "next/image";
import { getTranslations } from "next-intl/server";
import LanguageSwitcher from "@/components/layout/LanguageSwitcher";
import CompanyFooter from "@/components/company/CompanyFooter";
import type { AppLocale } from "@/i18n/routing";
import type { CompanyTheme } from "@/types/company";

// Shared chrome for a company subdomain site: its own header/footer, distinct
// from the parent site's <Header>/<Footer> in src/components/layout. Companies
// vary their look via `theme` (a CompanyTheme, see src/types/company.ts) but
// share this structural skeleton.
export default async function CompanyChrome({
  name,
  tagline,
  locale,
  theme,
  rootDomain,
  logo,
  nav,
  children,
}: {
  name: string;
  tagline: string;
  locale: AppLocale;
  theme: CompanyTheme;
  rootDomain: string;
  logo?: string | null;
  nav?: { label: string; href: string }[];
  children: React.ReactNode;
}) {
  const t = await getTranslations({ locale, namespace: "companySite" });

  // Nav hrefs in the company data are written as "/#about". On a subdomain that
  // resolves to "/", where the locale-redirect sends everyone to the default
  // language — an English visitor would be bounced to /bn. Keep the visitor's
  // locale: "/#about" -> "/en#about".
  const localizedNav = nav?.map((item) => ({
    ...item,
    href: item.href.startsWith("/") ? `/${locale}${item.href.slice(1)}` : item.href,
  }));

  return (
    <div className="flex min-h-full flex-1 flex-col bg-white text-neutral-900">
      <header className="sticky top-0 z-50 bg-white border-b border-neutral-200">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
          <a href={`//${rootDomain}/${locale}`} className="flex items-center gap-3">
            <Image
              src={logo || "/logos/fhs_logo.png"}
              alt={name}
              width={100}
              height={100}
              className="h-10 w-10 sm:h-12 sm:w-12 object-contain"
            />
            <span className="text-lg font-bold tracking-tight">{name}</span>
          </a>

          {localizedNav && localizedNav.length > 0 && (
            <nav
              aria-label={name}
              className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-600"
            >
              {localizedNav.map((item) => (
                <a key={item.label} href={item.href} className="hover:text-neutral-900 transition-colors">
                  {item.label}
                </a>
              ))}
            </nav>
          )}

          <div className="flex items-center gap-4">
            <LanguageSwitcher accentClassName={theme.accentBg} />
            <a
              href={`//${rootDomain}/${locale}`}
              className={`hidden text-sm font-semibold ${theme.accentText} sm:inline`}
            >
              {t("backToGroup")}
            </a>
          </div>
        </div>
      </header>

      {/* Below md the links above are hidden; this scrollable row keeps the same
          navigation available on phones. */}
      {localizedNav && localizedNav.length > 0 && (
        <nav aria-label={name} className="border-b border-neutral-200 bg-white md:hidden">
          <ul className="flex gap-6 overflow-x-auto px-6 py-3 text-sm font-medium text-neutral-600">
            {localizedNav.map((item) => (
              <li key={item.label} className="shrink-0">
                <a href={item.href} className="hover:text-neutral-900">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}

      {children}

      <CompanyFooter tagline={tagline} locale={locale} rootDomain={rootDomain} />
    </div>
  );
}
