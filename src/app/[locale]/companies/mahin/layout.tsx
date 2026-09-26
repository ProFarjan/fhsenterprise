import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Outfit } from "next/font/google";
import { hasLocale } from "next-intl";
import { setRequestLocale, getTranslations } from "next-intl/server";
import MahinNavbar from "@/components/company/mahin/MahinNavbar";
import MahinFooter from "@/components/company/mahin/MahinFooter";
import { mahinContent } from "@/data/companies/mahin";
import { getRootDomain } from "@/lib/companies";
import { getCompanyLogo } from "@/lib/publicContent";
import { SiteKey } from "@/generated/prisma/enums";
import { routing, type AppLocale } from "@/i18n/routing";

// Clean, friendly geometric sans used for Mahin Enterprise's display
// headings (via `font-mahin`, wired to --font-outfit in globals.css). Scoped
// to this subtree.
const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const content = mahinContent[locale as AppLocale] ?? mahinContent.en;
  return { title: `${content.name} | MR Group`, description: content.tagline };
}

export default async function MahinLayout({
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
  const content = mahinContent[locale as AppLocale];
  const t = await getTranslations({ locale, namespace: "companySite" });
  const rootDomain = getRootDomain();
  const logoUrl = await getCompanyLogo(SiteKey.MAHIN);

  return (
    <div className={`${outfit.variable} flex min-h-full flex-1 flex-col bg-mahin-mist text-mahin-navy`}>
      <MahinNavbar
        name={content.name}
        logoUrl={logoUrl}
        nav={content.nav}
        locale={locale as AppLocale}
        rootDomain={rootDomain}
        backToGroupLabel={t("backToGroup")}
      />
      {children}
      <MahinFooter
        name={content.name}
        footer={content.footer}
        nav={content.nav}
        locale={locale as AppLocale}
        rootDomain={rootDomain}
      />
    </div>
  );
}
