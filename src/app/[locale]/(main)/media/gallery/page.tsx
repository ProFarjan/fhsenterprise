import { getTranslations } from "next-intl/server";
import { getMrGroupGallery } from "@/lib/publicContent";
import GalleryTabs from "@/components/sections/media/GalleryTabs";

export default async function GalleryPage() {
  const t = await getTranslations("media");
  const { photos, videos } = await getMrGroupGallery();

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
