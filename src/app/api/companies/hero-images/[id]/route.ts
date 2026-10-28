import { prisma } from "@/lib/prisma";
import { CACHE_IMMUTABLE, imageResponse, notFound, parseId } from "@/lib/imageResponse";

// Serves one image from a company's hero gallery (CompanyHeroImage) straight
// out of the database — same convention as /api/media/[id]/image. Unlike
// Company's own logo/banner, a hero image row's bytes are immutable once
// created (the edit action only changes its text; images are added/removed/
// reordered), so its id's bytes never change — safe to cache as immutable.
export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const id = parseId((await params).id);
  if (id === null) return notFound();

  const image = await prisma.companyHeroImage.findUnique({
    where: { id },
    select: { imageData: true, imageMimeType: true },
  });
  if (!image) return notFound();

  return imageResponse(image.imageData, image.imageMimeType, {
    cacheControl: CACHE_IMMUTABLE,
  });
}
