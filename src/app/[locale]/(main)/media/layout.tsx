import type { Metadata } from "next";
import { useLocale, useTranslations } from "next-intl";
import PageHeader from "@/components/layout/PageHeader";
import MediaTabs from "@/components/sections/media/MediaTabs";
import Breadcrumbs from "@/components/navigation/Breadcrumbs";
import { buildPageMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata({
    locale,
    path: "/media",
    title:
      locale === "bn"
        ? "মিডিয়া সেন্টার — সংবাদ, ভিডিও ও গ্যালারি | এফএইচএস এন্টারপ্রাইজ"
        : "Media Center — News, Videos & Gallery | FHS Enterprise",
    description:
      locale === "bn"
        ? "এফএইচএস এন্টারপ্রাইজ, মেসার্স বাংলাদেশ অটো রাইস মিল, ভেহিকেল সলিউশনস এবং ডেইলি বাজারের সংবাদ, ইভেন্ট ও ফটো-ভিডিও গ্যালারি।"
        : "Latest news, company events, and visual gallery from FHS Enterprise, M/s. Bangladesh Auto Rice Mill, Vehicle Solutions, and Daily Bazar.",
    keywords: [
      "FHS Enterprise news",
      "Bangladesh Auto Rice Mill gallery",
      "Vehicle Solutions events",
      "media center Fulbariya",
    ],
    image: "/images/events/summit.jpg",
  });
}

export default function MediaLayout({ children }: { children: React.ReactNode }) {
  const t = useTranslations("pageHeaders.media");
  const locale = useLocale();

  return (
    <div className="flex-1 bg-white">
      <PageHeader
        eyebrow={t("eyebrow")}
        title={t("title")}
        description={t("description")}
        image="/images/events/summit.jpg"
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
        <MediaTabs />
      </div>
      <div className="pb-24">{children}</div>
    </div>
  );
}
