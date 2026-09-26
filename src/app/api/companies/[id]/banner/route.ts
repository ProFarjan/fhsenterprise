import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// Serves a company's banner bytes straight out of the database — same
// convention as /api/media/[id]/image. Unlike a MediaItem row, a Company row
// is edited in place (a re-upload keeps the same id), so this must NOT be
// cached as immutable — `updatedAt` drives a conditional GET instead.
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const company = await prisma.company.findUnique({
    where: { id: Number(id) },
    select: { bannerData: true, bannerMimeType: true, updatedAt: true },
  });

  if (!company?.bannerData || !company.bannerMimeType) {
    return NextResponse.json({ error: "Not found." }, { status: 404 });
  }

  const etag = `"${company.updatedAt.getTime()}"`;
  if (request.headers.get("if-none-match") === etag) {
    return new NextResponse(null, { status: 304, headers: { ETag: etag } });
  }

  return new NextResponse(new Uint8Array(company.bannerData), {
    headers: {
      "Content-Type": company.bannerMimeType,
      "Cache-Control": "public, max-age=0, must-revalidate",
      ETag: etag,
    },
  });
}
