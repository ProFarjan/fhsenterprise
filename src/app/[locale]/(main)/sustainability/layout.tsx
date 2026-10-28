import type { Metadata } from "next";
import { useLocale, useTranslations } from "next-intl";
import PageHeader from "@/components/layout/PageHeader";
import SustainabilityTabs from "@/components/sections/sustainability/SustainabilityTabs";
import Breadcrumbs from "@/components/navigation/Breadcrumbs";
import { getSiteConfig } from "@/data/site";
import type { AppLocale } from "@/i18n/routing";
import { buildPageMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  if (getSiteConfig("en").sustainabilityPages.pillars.length === 0) return {};
  const { locale } = await params;
  return buildPageMetadata({
    locale,
    path: "/sustainability",
    title:
      locale === "bn"
        ? "টেকসই উন্নয়ন ও সামাজিক দায়বদ্ধতা | এফএইচএস এন্টারপ্রাইজ"
        : "Sustainability & Social Responsibility | FHS Enterprise",
    description:
      locale === "bn"
        ? "এফএইচএস এন্টারপ্রাইজের স্বাস্থ্য, শিক্ষা, পরিবেশ সুরক্ষা ও কমিউনিটি উন্নয়নে ধারাবাহিক সামাজিক কার্যক্রম ও উদ্যোগসমূহ।"
        : "Discover FHS Enterprise's commitment to community welfare, environmental stewardship, education, and health in Fulbariya, Mymensingh.",
    keywords: [
      "FHS Enterprise sustainability",
      "community development Fulbariya",
      "green initiatives Bangladesh",
      "corporate social responsibility",
    ],
    image: "/images/sustainability/environment.jpg",
  });
}

function SustainabilityLayoutContent({ children }: { children: React.ReactNode }) {
  const t = useTranslations("pageHeaders.sustainability");
  const locale = useLocale();
  const { pillars } = getSiteConfig(locale as AppLocale).sustainabilityPages;

  return (
    <div className="flex-1 bg-white">
      <PageHeader
        eyebrow={t("eyebrow")}
        title={t("title")}
        description={t("description")}
        image="/images/sustainability/environment.jpg"
      />
      <div className="mx-auto max-w-7xl px-6 pt-4 lg:px-8">
        <Breadcrumbs
          locale={locale}
          items={[
            { label: locale === "bn" ? "হোম" : "Home", href: "/" },
            { label: t("title") },
          ]}
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
        <SustainabilityTabs slugs={pillars.map((p) => p.slug)} />
      </div>
      <div className="pb-24">{children}</div>
    </div>
  );
}

// next-intl needs the request locale set before any of its APIs run, and Next
// renders layouts and pages in parallel — so each one sets it itself. That is
// also what lets the page be prerendered instead of rendered on every request.
export default async function SustainabilityLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // No pillar has content yet -> the whole section is off (nav, sitemap, pages).
  if (getSiteConfig("en").sustainabilityPages.pillars.length === 0) notFound();
  const { locale } = await params;
  setRequestLocale(locale);
  return <SustainabilityLayoutContent>{children}</SustainabilityLayoutContent>;
}
