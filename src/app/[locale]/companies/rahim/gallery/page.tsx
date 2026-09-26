import RahimPageHeader from "@/components/company/rahim/RahimPageHeader";
import RahimGallery from "@/components/company/rahim/sections/RahimGallery";
import { rahimContent } from "@/data/companies/rahim";
import { getSiteGallery } from "@/lib/publicContent";
import { SiteKey } from "@/generated/prisma/enums";
import type { AppLocale } from "@/i18n/routing";

export default async function RahimGalleryPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const { galleryPage } = rahimContent[locale as AppLocale];
  const { photos, videos } = await getSiteGallery(SiteKey.RAHIM);

  return (
    <main className="flex-1 bg-rahim-frost">
      <RahimPageHeader header={galleryPage.header} />

      <section className="mx-auto max-w-3xl px-6 pt-16 text-center lg:px-8 lg:pt-20">
        <p className="text-lg leading-8 text-rahim-steel">{galleryPage.intro}</p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24 pt-10 lg:px-8 lg:pb-28 lg:pt-12">
        <RahimGallery
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
