import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import CompanyChrome from "@/components/company/CompanyChrome";
import { autoRiceMillContent } from "@/data/companies/auto-rice-mill";
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
  const content = autoRiceMillContent[locale as AppLocale] ?? autoRiceMillContent.en;
  return { title: `${content.name} | FHS Enterprise`, description: content.tagline };
}

export default async function AutoRiceMillLayout({
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
  const content = autoRiceMillContent[locale as AppLocale];
  const rootDomain = getRootDomain();
  const logoUrl = await getCompanyLogo(SiteKey.AUTO_RICE_MILL);

  // Reusing a basic theme shape
  const theme = {
    accentBg: "bg-orange-600",
    accentBgHover: "hover:bg-orange-500",
    accentText: "text-orange-600",
    accentBorder: "border-orange-200",
    heroFrom: "from-orange-950",
  };

  return (
    <CompanyChrome
      name={content.name}
      tagline={content.tagline}
      theme={theme}
      locale={locale as AppLocale}
      rootDomain={rootDomain}
      logo={logoUrl || "/logos/rice-mill.png"}
    >
      {children}
    </CompanyChrome>
  );
}
