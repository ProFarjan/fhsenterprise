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
  children,
}: {
  name: string;
  tagline: string;
  locale: AppLocale;
  theme: CompanyTheme;
  rootDomain: string;
  children: React.ReactNode;
}) {
  const t = await getTranslations({ locale, namespace: "companySite" });

  return (
    <div className="flex min-h-full flex-1 flex-col bg-white text-neutral-900">
      <header className="border-b border-neutral-200">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
          <a href={`//${rootDomain}/${locale}`} className="flex items-center gap-3">
            <Image
              src="/logos/placeholder.svg"
              alt={name}
              width={36}
              height={36}
              className="h-9 w-9"
            />
            <span className="text-lg font-bold tracking-tight">{name}</span>
          </a>

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
