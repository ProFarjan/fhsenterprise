import { prisma } from "@/lib/prisma";
import { getCurrentAdmin } from "@/lib/session";
import {
  CACHE_IMMUTABLE,
  CACHE_PRIVATE,
  CACHE_REVALIDATE,
  etagMatches,
  imageResponse,
  notFound,
  notModified,
  parseId,
} from "@/lib/imageResponse";

// Serves a product's image bytes straight out of the database — same
// convention as /api/media/[id]/image.
//
// Unlike media/news/events, a product's image CAN be replaced in place
// (updateProductAction keeps the id), so the URL is versioned: callers append
// `?v=<updatedAt ms>` (see getSimpleDbProducts and the admin products page).
// Only a request whose `v` matches the current version is cached as immutable;
// anything else (no `v`, or a stale one) always revalidates via the ETag.
//
// Unpublished products are not public: the image is only served to a signed-in
// admin (the admin product cards preview them), and never cacheable.
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const id = parseId((await params).id);
  if (id === null) return notFound();

  const meta = await prisma.product.findUnique({
    where: { id },
    select: { imageMimeType: true, updatedAt: true, isPublished: true },
  });
  if (!meta) return notFound();

  const preview = !meta.isPublished;
  if (preview && !(await getCurrentAdmin())) return notFound();

  const version = String(meta.updatedAt.getTime());
  const requestedVersion = new URL(request.url).searchParams.get("v");
  const cacheControl = preview
    ? CACHE_PRIVATE
    : requestedVersion === version
      ? CACHE_IMMUTABLE
      : CACHE_REVALIDATE;

  const etag = `"${version}"`;
  if (etagMatches(request, etag)) return notModified(etag, cacheControl);

  const row = await prisma.product.findUnique({
    where: { id },
    select: { imageData: true },
  });
  if (!row) return notFound();

  return imageResponse(row.imageData, meta.imageMimeType, { cacheControl, etag });
}
