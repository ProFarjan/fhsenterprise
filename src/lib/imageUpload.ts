// Shared validation for images uploaded through admin forms and stored as
// bytes in the database (see MediaItem / NewsItem in prisma/schema.prisma).
//
// Exported so client components can run the identical check the instant a
// file is picked — before it's ever sent over the wire. That client-side
// check is what actually prevents the ugly "Body exceeded 1MB limit" crash
// (next.config.ts's serverActions.bodySizeLimit is the framework-level cap
// behind that error; this MAX_IMAGE_BYTES must stay under it with headroom).
export const ALLOWED_IMAGE_MIME_TYPES = new Set([
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/gif",
]);
export const MAX_IMAGE_BYTES = 5 * 1024 * 1024; // 5MB — comfortably under MySQL's max_allowed_packet.

export const IMAGE_TYPE_ERROR = "Image must be JPEG, PNG, WEBP, or GIF.";
export const IMAGE_SIZE_ERROR = "Image must be smaller than 5MB.";

export type ImageValidationError = { error: string };
export type ValidatedImage = { data: Uint8Array<ArrayBuffer>; mimeType: string };

// Client-side pre-check: mime + size only (no need to read the file's bytes
// just to reject it). Runs the instant a file is picked, so an oversized or
// wrong-type file never reaches the network — the framework's Server Action
// body-size limit (next.config.ts) or the server-side check below would
// otherwise be the first thing to reject it, which is a much worse UX.
export function validateImageFileSync(file: File): string | null {
  if (!ALLOWED_IMAGE_MIME_TYPES.has(file.type)) return IMAGE_TYPE_ERROR;
  if (file.size > MAX_IMAGE_BYTES) return IMAGE_SIZE_ERROR;
  return null;
}

export async function readAndValidateImage(
  file: File,
): Promise<ValidatedImage | ImageValidationError> {
  if (!ALLOWED_IMAGE_MIME_TYPES.has(file.type)) {
    return { error: IMAGE_TYPE_ERROR };
  }
  if (file.size > MAX_IMAGE_BYTES) {
    return { error: IMAGE_SIZE_ERROR };
  }
  if (file.size === 0) {
    return { error: "Please choose an image file." };
  }

  const data = new Uint8Array(await file.arrayBuffer());
  return { data, mimeType: file.type };
}

export function isImageValidationError(
  value: ValidatedImage | ImageValidationError,
): value is ImageValidationError {
  return "error" in value;
}
