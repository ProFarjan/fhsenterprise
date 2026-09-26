import FillingPageHeader from "@/components/company/filling/FillingPageHeader";
import FillingGallery from "@/components/company/filling/sections/FillingGallery";
import { fillingStationContent } from "@/data/companies/filling-station";
import { getSiteGallery } from "@/lib/publicContent";
import { SiteKey } from "@/generated/prisma/enums";
import type { AppLocale } from "@/i18n/routing";

export default async function FillingGalleryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const content = fillingStationContent[locale as AppLocale];
  const { galleryPage } = content;
  const { photos, videos } = await getSiteGallery(SiteKey.FILLING_STATION);

  return (
    <main className="flex-1 bg-white">
      <FillingPageHeader header={galleryPage.header} />

      <section className="mx-auto max-w-3xl px-6 pt-16 text-center lg:px-8 lg:pt-20">
        <p className="text-lg leading-8 text-fuel-steel">{galleryPage.intro}</p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24 pt-10 lg:px-8 lg:pb-28 lg:pt-12">
        <FillingGallery
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