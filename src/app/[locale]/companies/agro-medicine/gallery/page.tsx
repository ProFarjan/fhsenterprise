import AgroMedPageHeader from "@/components/company/agromed/AgroMedPageHeader";
import AgroMedGallery from "@/components/company/agromed/sections/AgroMedGallery";
import { agroMedicineContent } from "@/data/companies/agro-medicine";
import { getSiteGallery } from "@/lib/publicContent";
import { SiteKey } from "@/generated/prisma/enums";
import type { AppLocale } from "@/i18n/routing";

export default async function AgroMedGalleryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const { galleryPage } = agroMedicineContent[locale as AppLocale];
  const { photos, videos } = await getSiteGallery(SiteKey.AGRO_MEDICINE);

  return (
    <main className="flex-1 bg-white">
      <AgroMedPageHeader header={galleryPage.header} />

      <section className="mx-auto max-w-3xl px-6 pt-16 text-center lg:px-8 lg:pt-20">
        <p className="text-lg leading-8 text-vet-ink/70">{galleryPage.intro}</p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24 pt-10 lg:px-8 lg:pb-28 lg:pt-12">
        <AgroMedGallery
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