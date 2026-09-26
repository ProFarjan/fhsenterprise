import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Rajdhani } from "next/font/google";
import { hasLocale } from "next-intl";
import { setRequestLocale, getTranslations } from "next-intl/server";
import AgritechNavbar from "@/components/company/agritech/AgritechNavbar";
import AgritechFooter from "@/components/company/agritech/AgritechFooter";
import { agritechContent } from "@/data/companies/agritech";
import { getRootDomain } from "@/lib/companies";
import { getCompanyLogo } from "@/lib/publicContent";
import { SiteKey } from "@/generated/prisma/enums";
import { routing, type AppLocale } from "@/i18n/routing";

// Condensed technical/industrial sans used for MR Agri Technology's display
// headings (via `font-agri`, wired to --font-rajdhani in globals.css).
// Scoped to this subtree.
const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const content = agritechContent[locale as AppLocale] ?? agritechContent.en;
  return { title: `${content.name} | MR Group`, description: content.tagline };
}

export default async function AgritechLayout({
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
  const content = agritechContent[locale as AppLocale];
  const t = await getTranslations({ locale, namespace: "companySite" });
  const rootDomain = getRootDomain();
  const logoUrl = await getCompanyLogo(SiteKey.AGRI_TECH);

  return (
    <div className={`${rajdhani.variable} flex min-h-full flex-1 flex-col bg-white text-neutral-900`}>
      <AgritechNavbar
        name={content.name}
        logoUrl={logoUrl}
        nav={content.nav}
        locale={locale as AppLocale}
        rootDomain={rootDomain}
        backToGroupLabel={t("backToGroup")}
      />
      {children}
      <AgritechFooter
        name={content.name}
        footer={content.footer}
        nav={content.nav}
        locale={locale as AppLocale}
        rootDomain={rootDomain}
      />
    </div>
  );
}
