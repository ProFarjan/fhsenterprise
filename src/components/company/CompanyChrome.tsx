import Image from "next/image";
import { getTranslations } from "next-intl/server";
import LanguageSwitcher from "@/components/layout/LanguageSwitcher";
import CompanyFooter from "@/components/company/CompanyFooter";
import type { AppLocale } from "@/i18n/routing";
import type { CompanyTheme } from "@/types/company";

// Shared chrome for a company subdomain site: its own header/footer, distinct
// from MR Group's <Header>/<Footer> in src/components/layout. Companies vary
// their look via `theme` (see src/data/companies/theme.ts) but share this
// structural skeleton.
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

          {nav && nav.length > 0 && (
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-600">
              {nav.map((item) => (
                <a key={item.label} href={item.href} className="hover:text-neutral-900 transition-colors">
                  {item.label}
                </a>
              ))}
            </nav>
          )}

          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <a
              href={`//${rootDomain}/${locale}`}
              className={`hidden text-sm font-semibold ${theme.accentText} sm:inline`}
            >
              {t("backToGroup")}
            </a>
          </div>
        </div>
      </header>

      {children}

      <CompanyFooter tagline={tagline} locale={locale} rootDomain={rootDomain} />
    </div>
  );
}
