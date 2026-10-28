import { prisma } from "@/lib/prisma";
import { CACHE_IMMUTABLE, imageResponse, notFound, parseId } from "@/lib/imageResponse";

// Serves an event's cover image bytes straight out of the database — see
// src/app/api/media/[id]/image/route.ts for why. Public and unauthenticated
// on purpose: this is marketing content meant to be publicly visible. There is
// no edit action for events, so an id's bytes never change.
export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const id = parseId((await params).id);
  if (id === null) return notFound();

  const item = await prisma.eventItem.findUnique({
    where: { id },
    select: { coverImageData: true, coverImageMimeType: true },
  });
  if (!item) return notFound();

  return imageResponse(item.coverImageData, item.coverImageMimeType, {
    cacheControl: CACHE_IMMUTABLE,
  });
}
