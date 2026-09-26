import FeedPageHeader from "@/components/company/feed/FeedPageHeader";
import FeedGallery from "@/components/company/feed/sections/FeedGallery";
import { feedContent } from "@/data/companies/feed";
import { getSiteGallery } from "@/lib/publicContent";
import { SiteKey } from "@/generated/prisma/enums";
import type { AppLocale } from "@/i18n/routing";

export default async function FeedGalleryPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const { galleryPage } = feedContent[locale as AppLocale];
  const { photos, videos } = await getSiteGallery(SiteKey.FEED);

  return (
    <main className="flex-1 bg-white">
      <FeedPageHeader header={galleryPage.header} />

      <section className="mx-auto max-w-3xl px-6 pt-16 text-center lg:px-8 lg:pt-20">
        <p className="text-lg leading-8 text-feed-brown/80">{galleryPage.intro}</p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24 pt-10 lg:px-8 lg:pb-28 lg:pt-12">
        <FeedGallery
          photos={photos}
          videos={videos}
          labels={{
            photos: galleryPage.photosLabel,
            videos: galleryPage.videosLabel,
            noPhotos: galleryPage.noPhotos,
            noVideos: galleryPage.noVideos,
          }}
        />
      </section>
    </main>
  );
}