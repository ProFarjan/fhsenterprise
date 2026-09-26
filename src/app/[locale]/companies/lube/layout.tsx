import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Saira } from "next/font/google";
import { hasLocale } from "next-intl";
import { setRequestLocale, getTranslations } from "next-intl/server";
import LubeNavbar from "@/components/company/mrlube/LubeNavbar";
import LubeFooter from "@/components/company/mrlube/LubeFooter";
import { mrlubeContent } from "@/data/companies/mrlube";
import { getRootDomain } from "@/lib/companies";
import { getCompanyLogo } from "@/lib/publicContent";
import { SiteKey } from "@/generated/prisma/enums";
import { routing, type AppLocale } from "@/i18n/routing";

// Wide industrial/motorsport sans used for MR Lube's display headings (via
// `font-lube`, wired to --font-saira in globals.css). Scoped to this subtree.
const saira = Saira({
  variable: "--font-saira",
  subsets: ["latin"],
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const content = mrlubeContent[locale as AppLocale] ?? mrlubeContent.en;
  return { title: `${content.name} | MR Group`, description: content.tagline };
}

export default async function LubeLayout({
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
  const content = mrlubeContent[locale as AppLocale];
  const t = await getTranslations({ locale, namespace: "companySite" });
  const rootDomain = getRootDomain();
  const logoUrl = await getCompanyLogo(SiteKey.MR_LUBE);

  return (
    <div className={`${saira.variable} flex min-h-full flex-1 flex-col bg-lube-cream text-lube-ink`}>
      <LubeNavbar
        name={content.name}
        logoUrl={logoUrl}
        nav={content.nav}
        locale={locale as AppLocale}
        rootDomain={rootDomain}
        backToGroupLabel={t("backToGroup")}
      />
      {children}
      <LubeFooter
        name={content.name}
        footer={content.footer}
        nav={content.nav}
        locale={locale as AppLocale}
        rootDomain={rootDomain}
      />
    </div>
  );
}
