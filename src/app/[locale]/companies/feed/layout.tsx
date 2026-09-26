import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Sora } from "next/font/google";
import { hasLocale } from "next-intl";
import { setRequestLocale, getTranslations } from "next-intl/server";
import FeedNavbar from "@/components/company/feed/FeedNavbar";
import FeedFooter from "@/components/company/feed/FeedFooter";
import { feedContent } from "@/data/companies/feed";
import { getRootDomain } from "@/lib/companies";
import { getCompanyLogo } from "@/lib/publicContent";
import { SiteKey } from "@/generated/prisma/enums";
import { routing, type AppLocale } from "@/i18n/routing";

// Modern geometric sans used for MR Feed's display headings (via `font-feed`,
// wired to --font-sora in globals.css). Scoped to this subtree.
const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const content = feedContent[locale as AppLocale] ?? feedContent.en;
  return { title: `${content.name} | MR Group`, description: content.tagline };
}

export default async function FeedLayout({
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
  const content = feedContent[locale as AppLocale];
  const t = await getTranslations({ locale, namespace: "companySite" });
  const rootDomain = getRootDomain();
  const logoUrl = await getCompanyLogo(SiteKey.FEED);

  return (
    <div className={`${sora.variable} flex min-h-full flex-1 flex-col bg-white text-neutral-900`}>
      <FeedNavbar
        name={content.name}
        logoUrl={logoUrl}
        nav={content.nav}
        locale={locale as AppLocale}
        rootDomain={rootDomain}
        backToGroupLabel={t("backToGroup")}
      />
      {children}
      <FeedFooter
        name={content.name}
        footer={content.footer}
        nav={content.nav}
        locale={locale as AppLocale}
        rootDomain={rootDomain}
      />
    </div>
  );
}
