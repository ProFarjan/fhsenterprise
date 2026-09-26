import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Archivo } from "next/font/google";
import { hasLocale } from "next-intl";
import { setRequestLocale, getTranslations } from "next-intl/server";
import FillingNavbar from "@/components/company/filling/FillingNavbar";
import FillingFooter from "@/components/company/filling/FillingFooter";
import { fillingStationContent } from "@/data/companies/filling-station";
import { getRootDomain } from "@/lib/companies";
import { getCompanyLogo } from "@/lib/publicContent";
import { SiteKey } from "@/generated/prisma/enums";
import { routing, type AppLocale } from "@/i18n/routing";

// Heavy geometric sans used for MR Filling Station's oversized display headings
// (via `font-fuel`, wired to --font-archivo in globals.css). Scoped to this subtree.
const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const content = fillingStationContent[locale as AppLocale] ?? fillingStationContent.en;
  return { title: `${content.name} | MR Group`, description: content.tagline };
}

export default async function FillingStationLayout({
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
  const content = fillingStationContent[locale as AppLocale];
  const t = await getTranslations({ locale, namespace: "companySite" });
  const rootDomain = getRootDomain();
  const logoUrl = await getCompanyLogo(SiteKey.FILLING_STATION);

  return (
    <div className={`${archivo.variable} flex min-h-full flex-1 flex-col bg-white text-fuel-ink`}>
      <FillingNavbar
        name={content.name}
        logoUrl={logoUrl}
        nav={content.nav ?? []}
        locale={locale as AppLocale}
        rootDomain={rootDomain}
        backToGroupLabel={t("backToGroup")}
      />
      {children}
      <FillingFooter
        name={content.name}
        footer={content.footer}
        locale={locale as AppLocale}
        rootDomain={rootDomain}
      />
    </div>
  );
}
