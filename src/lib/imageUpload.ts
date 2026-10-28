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
export const IMAGE_CONTENT_ERROR = "That file isn't a valid JPEG, PNG, WEBP, or GIF image.";

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
  const mimeType = sniffImageMimeType(data);
  if (!mimeType) return { error: IMAGE_CONTENT_ERROR };
  return { data, mimeType };
}

// The browser-supplied `file.type` is just a label the uploader chose, so the
// server also checks the file's leading bytes ("magic numbers") and stores the
// type they prove — an HTML/SVG/script file renamed to .png is rejected.
export function sniffImageMimeType(bytes: Uint8Array): string | null {
  const startsWith = (...sig: number[]) => sig.every((b, i) => bytes[i] === b);

  if (startsWith(0xff, 0xd8, 0xff)) return "image/jpeg";
  if (startsWith(0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a)) return "image/png";
  // "GIF87a" / "GIF89a"
  if (startsWith(0x47, 0x49, 0x46, 0x38) && (bytes[4] === 0x37 || bytes[4] === 0x39) && bytes[5] === 0x61) {
    return "image/gif";
  }
  // "RIFF" <4-byte size> "WEBP"
  if (
    startsWith(0x52, 0x49, 0x46, 0x46) &&
    bytes[8] === 0x57 &&
    bytes[9] === 0x45 &&
    bytes[10] === 0x42 &&
    bytes[11] === 0x50
  ) {
    return "image/webp";
  }
  return null;
}

export function isImageValidationError(
  value: ValidatedImage | ImageValidationError,
): value is ImageValidationError {
  return "error" in value;
}
