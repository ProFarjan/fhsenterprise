import { NextResponse } from "next/server";

// Shared plumbing for the byte-serving routes under src/app/api/**/image
// (images live in MySQL LongBlob columns — see prisma/schema.prisma).

// Route params arrive as strings. Prisma throws on NaN / non-integers (a 500),
// and Number("") is 0 — accept only plain positive integers that fit INT.
export function parseId(raw: string): number | null {
  if (!/^\d{1,10}$/.test(raw)) return null;
  const id = Number(raw);
  return id > 0 && id <= 2_147_483_647 ? id : null;
}

export function notFound() {
  return NextResponse.json(
    { error: "Not found." },
    { status: 404, headers: { "X-Content-Type-Options": "nosniff" } },
  );
}

// Content that never changes under a given URL: new uploads get new row ids.
export const CACHE_IMMUTABLE = "public, max-age=31536000, immutable";
// Content edited in place: always revalidate (cheap 304 via ETag).
export const CACHE_REVALIDATE = "public, max-age=0, must-revalidate";
// Anything not meant for the public (unpublished rows previewed in the admin).
export const CACHE_PRIVATE = "private, no-store";

export function etagMatches(request: Request, etag: string): boolean {
  const header = request.headers.get("if-none-match");
  if (!header) return false;
  return header
    .split(",")
    .map((tag) => tag.trim().replace(/^W\//, ""))
    .some((tag) => tag === etag || tag === "*");
}

export function notModified(etag: string, cacheControl: string) {
  return new NextResponse(null, {
    status: 304,
    headers: { ETag: etag, "Cache-Control": cacheControl },
  });
}

export function imageResponse(
  data: Uint8Array<ArrayBuffer>,
  mimeType: string,
  headers: { cacheControl: string; etag?: string },
) {
  return new NextResponse(data, {
    headers: {
      "Content-Type": mimeType,
      "Content-Length": String(data.byteLength),
      "Cache-Control": headers.cacheControl,
      // The stored mime type is only ever one of the validated image types;
      // nosniff stops a browser second-guessing it as something executable.
      "X-Content-Type-Options": "nosniff",
      ...(headers.etag && { ETag: headers.etag }),
    },
  });
}
