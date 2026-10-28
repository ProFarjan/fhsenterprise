import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import CompanyChrome from "@/components/company/CompanyChrome";
import { autoRiceMillContent, autoRiceMillTheme } from "@/data/companies/auto-rice-mill";
import { getRootDomain } from "@/lib/companies";
import { getCompanyLogo } from "@/lib/publicContent";
import { buildPageMetadata, subsidiaryUrl } from "@/lib/seo";
import { SiteKey } from "@/generated/prisma/enums";
import { routing, type AppLocale } from "@/i18n/routing";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const content = autoRiceMillContent[locale as AppLocale] ?? autoRiceMillContent.en;
  // This site is served from its own subdomain (rewritten by src/proxy.ts), so
  // that — not /<locale>/companies/auto-rice-mill on the root domain — is the
  // canonical URL. The root-domain path still works but points here.
  return buildPageMetadata({
    locale,
    path: "/",
    siteUrl: subsidiaryUrl("auto-rice-mill"),
    title: `${content.name} | FHS Enterprise`,
    description: content.tagline,
    image: content.heroImage,
  });
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

  return (
    <CompanyChrome
      name={content.name}
      tagline={content.tagline}
      theme={autoRiceMillTheme}
      locale={locale as AppLocale}
      rootDomain={rootDomain}
      logo={logoUrl || "/logos/rice-mill.png"}
      nav={content.nav}
    >
      {children}
    </CompanyChrome>
  );
}
