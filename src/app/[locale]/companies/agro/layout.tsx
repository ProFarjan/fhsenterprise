import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Fraunces } from "next/font/google";
import { hasLocale } from "next-intl";
import { setRequestLocale, getTranslations } from "next-intl/server";
import AgroNavbar from "@/components/company/agro/AgroNavbar";
import AgroFooter from "@/components/company/agro/AgroFooter";
import { agroContent } from "@/data/companies/agro";
import { getRootDomain } from "@/lib/companies";
import { getCompanyLogo } from "@/lib/publicContent";
import { SiteKey } from "@/generated/prisma/enums";
import { routing, type AppLocale } from "@/i18n/routing";

// Organic, warm serif used for MR Agro's display headings (via `font-display`,
// wired to --font-fraunces in globals.css). Scoped to this subtree.
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const content = agroContent[locale as AppLocale] ?? agroContent.en;
  return { title: `${content.name} | MR Group`, description: content.tagline };
}

export default async function AgroLayout({
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
  const content = agroContent[locale as AppLocale];
  const t = await getTranslations({ locale, namespace: "companySite" });
  const rootDomain = getRootDomain();
  const logoUrl = await getCompanyLogo(SiteKey.AGRO);

  return (
    <div className={`${fraunces.variable} flex min-h-full flex-1 flex-col bg-white text-neutral-900`}>
      <AgroNavbar
        name={content.name}
        logoUrl={logoUrl}
        nav={content.nav ?? []}
        locale={locale as AppLocale}
        rootDomain={rootDomain}
        backToGroupLabel={t("backToGroup")}
      />
      {children}
      <AgroFooter
        name={content.name}
        footer={content.footer}
        locale={locale as AppLocale}
        rootDomain={rootDomain}
      />
    </div>
  );
}
