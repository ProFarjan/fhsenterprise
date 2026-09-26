import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// Serves an event's cover image bytes straight out of the database — see
// src/app/api/news/[id]/image/route.ts for why. Public and unauthenticated
// on purpose: this is marketing content meant to be publicly visible.
export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const item = await prisma.eventItem.findUnique({
    where: { id: Number(id) },
    select: { coverImageData: true, coverImageMimeType: true },
  });

  if (!item) {
    return NextResponse.json({ error: "Not found." }, { status: 404 });
  }

  return new NextResponse(new Uint8Array(item.coverImageData), {
    headers: {
      "Content-Type": item.coverImageMimeType,
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
