import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// Serves one image from a company's hero gallery (CompanyHeroImage) straight
// out of the database — same convention as /api/media/[id]/image. Unlike
// Company's own logo/banner, a hero image row is immutable once created (no
// edit action, only create/delete/reorder), so its id's bytes never change —
// safe to cache as immutable.
export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const image = await prisma.companyHeroImage.findUnique({
    where: { id: Number(id) },
    select: { imageData: true, imageMimeType: true },
  });

  if (!image) {
    return NextResponse.json({ error: "Not found." }, { status: 404 });
  }

  return new NextResponse(new Uint8Array(image.imageData), {
    headers: {
      "Content-Type": image.imageMimeType,
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
