import { setRequestLocale } from "next-intl/server";
import CompanyHomePage from "@/components/company/CompanyHomePage";
import { autoRiceMillContent, autoRiceMillTheme } from "@/data/companies/auto-rice-mill";
import type { AppLocale } from "@/i18n/routing";

export default async function AutoRiceMillPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <CompanyHomePage
      content={autoRiceMillContent[locale as AppLocale]}
      theme={autoRiceMillTheme}
      locale={locale as AppLocale}
    />
  );
}
