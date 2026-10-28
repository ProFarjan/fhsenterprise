import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { getParentGallery } from "@/lib/publicContent";
import GalleryTabs from "@/components/sections/media/GalleryTabs";
import { buildPageMetadata } from "@/lib/seo";
import type { AppLocale } from "@/i18n/routing";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata({
    locale,
    path: "/media/gallery",
    title:
      locale === "bn"
        ? "ভিডিও ও ফটো গ্যালারি | এফএইচএস এন্টারপ্রাইজ"
        : "Video & Photo Gallery | FHS Enterprise",
    description:
      locale === "bn"
        ? "মেসার্স বাংলাদেশ অটো রাইস মিল, ভেহিকেল সলিউশনস ও ডেইলি বাজারের স্বয়ংক্রিয় উৎপাদন, কর্মযজ্ঞ ও স্থাপনার ফটো ও ভিডিও চিত্র।"
        : "Watch our automated rice mill in action, automotive service hubs, and retail super shop operations in high definition video and photos.",
    keywords: [
      "FHS Enterprise video gallery",
      "Bangladesh Auto Rice Mill video",
      "Vehicle Solutions workshop photos",
      "Daily Bazar video",
    ],
    image: "/images/gallery/harvest.jpg",
  });
}

export default async function GalleryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("media");
  const { photos, videos } = await getParentGallery(locale as AppLocale);

  return (
    <section className="mx-auto max-w-6xl px-6 lg:px-8">
      <GalleryTabs
        photos={photos}
        videos={videos}
        labels={{
          photos: t("photos"),
          videos: t("videos"),
          noPhotos: t("noPhotos"),
          noVideos: t("noVideos"),
        }}
      />
    </section>
  );
}
