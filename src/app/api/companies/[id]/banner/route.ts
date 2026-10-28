import { prisma } from "@/lib/prisma";
import {
  CACHE_REVALIDATE,
  etagMatches,
  imageResponse,
  notFound,
  notModified,
  parseId,
} from "@/lib/imageResponse";

// Serves a company's banner bytes straight out of the database — same
// convention as /api/media/[id]/image. Unlike a MediaItem row, a Company row
// is edited in place (a re-upload keeps the same id), so this must NOT be
// cached as immutable — `updatedAt` drives a conditional GET instead, and the
// (large) blob is only read when the browser's cached copy is stale.
//
// Company.isPublished is deliberately not checked: it only controls the card
// on the parent site, while the subsidiary's own microsite still shows its
// banner.
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const id = parseId((await params).id);
  if (id === null) return notFound();

  const meta = await prisma.company.findUnique({
    where: { id },
    select: { bannerMimeType: true, updatedAt: true },
  });
  if (!meta?.bannerMimeType) return notFound();

  const etag = `"${meta.updatedAt.getTime()}"`;
  if (etagMatches(request, etag)) return notModified(etag, CACHE_REVALIDATE);

  const row = await prisma.company.findUnique({
    where: { id },
    select: { bannerData: true },
  });
  if (!row?.bannerData) return notFound();

  return imageResponse(row.bannerData, meta.bannerMimeType, {
    cacheControl: CACHE_REVALIDATE,
    etag,
  });
}
