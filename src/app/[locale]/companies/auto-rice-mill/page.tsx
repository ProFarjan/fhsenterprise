import { setRequestLocale } from "next-intl/server";
import CompanyHomePage from "@/components/company/CompanyHomePage";
import { autoRiceMillContent } from "@/data/companies/auto-rice-mill";
import type { AppLocale } from "@/i18n/routing";

export default async function AutoRiceMillPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const theme = {
    accentBg: "bg-orange-600",
    accentBgHover: "hover:bg-orange-500",
    accentText: "text-orange-600",
    accentBorder: "border-orange-200",
    heroFrom: "from-orange-950",
  };

  return (
    <CompanyHomePage
      content={autoRiceMillContent[locale as AppLocale]}
      theme={theme}
      locale={locale as AppLocale}
    />
  );
}
