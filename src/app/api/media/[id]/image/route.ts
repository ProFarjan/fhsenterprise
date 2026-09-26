import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// Serves an uploaded image's bytes straight out of the database — there is no
// object storage in this project, so MediaItem.imageData IS the file. Public
// and unauthenticated on purpose: this is marketing content meant to be
// visible on the public site once it's wired up to read from the DB.
export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const item = await prisma.mediaItem.findUnique({
    where: { id: Number(id) },
    select: { imageData: true, imageMimeType: true },
  });

  if (!item?.imageData || !item.imageMimeType) {
    return NextResponse.json({ error: "Not found." }, { status: 404 });
  }

  return new NextResponse(new Uint8Array(item.imageData), {
    headers: {
      "Content-Type": item.imageMimeType,
      // Immutable: a new upload gets a new row id, so this id's bytes never change.
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
