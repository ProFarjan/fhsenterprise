import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import PageHeader from "@/components/layout/PageHeader";
import CompanyCard from "@/components/sections/companies/CompanyCard";
import { getCompanies } from "@/lib/publicContent";
import { buildPageMetadata } from "@/lib/seo";
import Breadcrumbs from "@/components/navigation/Breadcrumbs";
import type { AppLocale } from "@/i18n/routing";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata({
    locale,
    path: "/companies",
    title:
      locale === "bn"
        ? "আমাদের প্রতিষ্ঠান ও অঙ্গপ্রতিষ্ঠানসমূহ | এফএইচএস এন্টারপ্রাইজ"
        : "Our Companies & Subsidiary Portfolio | FHS Enterprise",
    description:
      locale === "bn"
        ? "এফএইচএস এন্টারপ্রাইজের অঙ্গপ্রতিষ্ঠানসমূহ: মেসার্স বাংলাদেশ অটো রাইস মিল, ভেহিকেল সলিউশনস এবং ডেইলি বাজার সুপার শপ।"
        : "Explore the companies of FHS Enterprise: M/s. Bangladesh Auto Rice Mill (agro), Vehicle Solutions (automotive), and Daily Bazar (super shop e-commerce).",
    keywords: [
      "FHS Enterprise companies",
      "Bangladesh Auto Rice Mill",
      "Vehicle Solutions",
      "Daily Bazar",
      "subsidiary companies Mymensingh",
    ],
    image: "/images/gallery/fhs_vision.jpg",
  });
}

// Prerendered; refreshed at most every 5 minutes (admin edits revalidate immediately).
export const revalidate = 300;

export default async function CompaniesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const [t, companies] = await Promise.all([
    getTranslations("pageHeaders.companies"),
    getCompanies(locale as AppLocale),
  ]);

  return (
    <div className="flex-1 bg-white">
      <PageHeader
        eyebrow={t("eyebrow")}
        title={t("title")}
        description={t("description")}
        image="/images/gallery/fhs_vision.jpg"
      />
      <div className="mx-auto max-w-7xl px-6 pt-6 lg:px-8">
        <Breadcrumbs
          locale={locale}
          items={[
            { label: locale === "bn" ? "হোম" : "Home", href: "/" },
            { label: t("title") },
          ]}
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        {companies.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {companies.map((company) => (
              <CompanyCard key={company.name} company={company} locale={locale as AppLocale} />
            ))}
          </div>
        ) : (
          <p className="py-12 text-center text-neutral-500">{t("empty")}</p>
        )}
      </div>
    </div>
  );
}
