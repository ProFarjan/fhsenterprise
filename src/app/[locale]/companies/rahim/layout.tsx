import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Space_Grotesk } from "next/font/google";
import { hasLocale } from "next-intl";
import { setRequestLocale, getTranslations } from "next-intl/server";
import RahimNavbar from "@/components/company/rahim/RahimNavbar";
import RahimFooter from "@/components/company/rahim/RahimFooter";
import { rahimContent } from "@/data/companies/rahim";
import { getRootDomain } from "@/lib/companies";
import { getCompanyLogo } from "@/lib/publicContent";
import { SiteKey } from "@/generated/prisma/enums";
import { routing, type AppLocale } from "@/i18n/routing";

// Technical, scientific geometric sans used for Rahim Enterprise's display
// headings (via `font-rahim`, wired to --font-space-grotesk in globals.css).
// Scoped to this subtree.
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const content = rahimContent[locale as AppLocale] ?? rahimContent.en;
  return { title: `${content.name} | MR Group`, description: content.tagline };
}

export default async function RahimLayout({
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
  const content = rahimContent[locale as AppLocale];
  const t = await getTranslations({ locale, namespace: "companySite" });
  const rootDomain = getRootDomain();
  const logoUrl = await getCompanyLogo(SiteKey.RAHIM);

  return (
    <div className={`${spaceGrotesk.variable} flex min-h-full flex-1 flex-col bg-rahim-frost text-rahim-slate`}>
      <RahimNavbar
        name={content.name}
        logoUrl={logoUrl}
        nav={content.nav}
        locale={locale as AppLocale}
        rootDomain={rootDomain}
        backToGroupLabel={t("backToGroup")}
      />
      {children}
      <RahimFooter
        name={content.name}
        footer={content.footer}
        nav={content.nav}
        locale={locale as AppLocale}
        rootDomain={rootDomain}
      />
    </div>
  );
}
