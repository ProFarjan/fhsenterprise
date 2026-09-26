import MahinPageHeader from "@/components/company/mahin/MahinPageHeader";
import MahinGallery from "@/components/company/mahin/sections/MahinGallery";
import { mahinContent } from "@/data/companies/mahin";
import { getSiteGallery } from "@/lib/publicContent";
import { SiteKey } from "@/generated/prisma/enums";
import type { AppLocale } from "@/i18n/routing";

export default async function MahinGalleryPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const { galleryPage } = mahinContent[locale as AppLocale];
  const { photos, videos } = await getSiteGallery(SiteKey.MAHIN);

  return (
    <main className="flex-1 bg-mahin-mist">
      <MahinPageHeader header={galleryPage.header} />

      <section className="mx-auto max-w-3xl px-6 pt-16 text-center lg:px-8 lg:pt-20">
        <p className="text-lg leading-8 text-mahin-slate">{galleryPage.intro}</p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24 pt-10 lg:px-8 lg:pb-28 lg:pt-12">
        <MahinGallery
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
