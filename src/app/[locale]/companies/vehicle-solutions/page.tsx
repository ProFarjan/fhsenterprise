import { setRequestLocale } from "next-intl/server";
import CompanyHomePage from "@/components/company/CompanyHomePage";
import { vehicleSolutionsContent } from "@/data/companies/vehicle-solutions";
import type { AppLocale } from "@/i18n/routing";

export default async function VehicleSolutionsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const theme = {
    accentBg: "bg-blue-600",
    accentBgHover: "hover:bg-blue-500",
    accentText: "text-blue-600",
    accentBorder: "border-blue-200",
    heroFrom: "from-blue-950",
  };

  return (
    <CompanyHomePage
      content={vehicleSolutionsContent[locale as AppLocale]}
      theme={theme}
      locale={locale as AppLocale}
    />
  );
}
