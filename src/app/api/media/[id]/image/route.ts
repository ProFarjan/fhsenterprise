import { prisma } from "@/lib/prisma";
import { CACHE_IMMUTABLE, imageResponse, notFound, parseId } from "@/lib/imageResponse";

// Serves an uploaded image's bytes straight out of the database — there is no
// object storage in this project, so MediaItem.imageData IS the file. Public
// and unauthenticated on purpose: this is marketing content meant to be
// visible on the public site. (Video rows have no image bytes → 404.)
export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const id = parseId((await params).id);
  if (id === null) return notFound();

  const item = await prisma.mediaItem.findUnique({
    where: { id },
    select: { imageData: true, imageMimeType: true },
  });
  if (!item?.imageData || !item.imageMimeType) return notFound();

  // Immutable: a new upload gets a new row id, so this id's bytes never change.
  return imageResponse(item.imageData, item.imageMimeType, {
    cacheControl: CACHE_IMMUTABLE,
  });
}
