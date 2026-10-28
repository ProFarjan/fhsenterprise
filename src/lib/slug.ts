// URL-friendly id for a product name: lower-case ASCII words joined by "-".
// Non-ASCII (e.g. Bangla) characters are dropped, so a name with no Latin
// letters yields "" — callers fall back to a generic base and add a numeric
// suffix on collision.
export function slugify(name: string): string {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 200);
}
