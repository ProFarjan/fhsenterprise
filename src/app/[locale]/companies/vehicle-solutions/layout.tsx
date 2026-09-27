import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import CompanyChrome from "@/components/company/CompanyChrome";
import { vehicleSolutionsContent } from "@/data/companies/vehicle-solutions";
import { getRootDomain } from "@/lib/companies";
import { getCompanyLogo } from "@/lib/publicContent";
import { SiteKey } from "@/generated/prisma/enums";
import { routing, type AppLocale } from "@/i18n/routing";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const content = vehicleSolutionsContent[locale as AppLocale] ?? vehicleSolutionsContent.en;
  return { title: `${content.name} | FHS Enterprise`, description: content.tagline };
}

export default async function VehicleSolutionsLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);
  const content = vehicleSolutionsContent[locale as AppLocale];
  const rootDomain = getRootDomain();
  const logoUrl = await getCompanyLogo(SiteKey.VEHICLE_SOLUTIONS);

  const theme = {
    accentBg: "bg-blue-600",
    accentBgHover: "hover:bg-blue-500",
    accentText: "text-blue-600",
    accentBorder: "border-blue-200",
    heroFrom: "from-blue-950",
  };

  return (
    <CompanyChrome
      name={content.name}
      tagline={content.tagline}
      theme={theme}
      locale={locale as AppLocale}
      rootDomain={rootDomain}
      logo={logoUrl || "/logos/vehicle_solutions.svg"}
      nav={content.nav}
    >
      {children}
    </CompanyChrome>
  );
}
