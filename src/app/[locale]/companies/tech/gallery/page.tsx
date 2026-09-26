import AgritechPageHeader from "@/components/company/agritech/AgritechPageHeader";
import AgritechGallery from "@/components/company/agritech/sections/AgritechGallery";
import { agritechContent } from "@/data/companies/agritech";
import { getSiteGallery } from "@/lib/publicContent";
import { SiteKey } from "@/generated/prisma/enums";
import type { AppLocale } from "@/i18n/routing";

export default async function AgritechGalleryPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const { galleryPage } = agritechContent[locale as AppLocale];
  const { photos, videos } = await getSiteGallery(SiteKey.AGRI_TECH);

  return (
    <main className="flex-1 bg-white">
      <AgritechPageHeader header={galleryPage.header} />

      <section className="mx-auto max-w-3xl px-6 pt-16 text-center lg:px-8 lg:pt-20">
        <p className="text-lg leading-8 text-neutral-600">{galleryPage.intro}</p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24 pt-10 lg:px-8 lg:pb-28 lg:pt-12">
        <AgritechGallery
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
