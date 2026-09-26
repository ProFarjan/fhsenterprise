import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// Serves a product's image bytes straight out of the database — same
// convention as /api/media/[id]/image. A Product row has no edit action yet
// (only create/delete — see src/app/admin/(panel)/products/actions.ts), so
// its image never changes under a given id and can be cached as immutable.
export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const product = await prisma.product.findUnique({
    where: { id: Number(id) },
    select: { imageData: true, imageMimeType: true },
  });

  if (!product) {
    return NextResponse.json({ error: "Not found." }, { status: 404 });
  }

  return new NextResponse(new Uint8Array(product.imageData), {
    headers: {
      "Content-Type": product.imageMimeType,
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
