import { Prisma } from "@/generated/prisma/client";

// Small helpers shared by the admin Server Actions (src/app/admin/(panel)/*).

// Max lengths mirror the `@db.VarChar(n)` columns in prisma/schema.prisma.
// `@db.Text` columns get a generous sanity cap instead (MySQL TEXT is 64 KB).
export const LIMITS = {
  title: 200,
  name: 200,
  sector: 120,
  tagline: 300,
  heroHeadline: 255,
  faqQuestion: 500,
  location: 200,
  shortText: 2_000,
  longText: 10_000,
} as const;

// "Name must be 200 characters or fewer." for the first field over its limit.
export function lengthError(checks: [label: string, value: string, max: number][]): string | null {
  for (const [label, value, max] of checks) {
    if (value.length > max) return `${label} must be ${max} characters or fewer.`;
  }
  return null;
}

// Form ids come in as strings; Number("") is 0 and Number("abc") is NaN.
export function positiveInt(raw: unknown): number | null {
  const n = typeof raw === "number" ? raw : Number(raw);
  return Number.isSafeInteger(n) && n > 0 ? n : null;
}

// Validates an id list sent straight from a client component (drag-and-drop
// reorder): bounded, positive integers, no duplicates.
export function parseIdList(input: unknown, max = 200): number[] | null {
  if (!Array.isArray(input) || input.length === 0 || input.length > max) return null;
  const ids: number[] = [];
  for (const raw of input) {
    const id = positiveInt(raw);
    if (id === null) return null;
    ids.push(id);
  }
  return new Set(ids).size === ids.length ? ids : null;
}

function prismaCode(error: unknown): string | null {
  return error instanceof Prisma.PrismaClientKnownRequestError ? error.code : null;
}

// Turns a failed write into a message the admin can act on, and logs the real
// error server-side (production redacts thrown errors, so without this a
// failed save is invisible in the logs).
export function describeActionError(error: unknown, fallback: string): string {
  console.error("Admin action failed:", error);
  switch (prismaCode(error)) {
    case "P2002":
      return "That value already exists. Choose a different one.";
    case "P2025":
      return "That item no longer exists. Refresh the page and try again.";
    case "P2000":
      return "One of the values is too long.";
    default:
      return fallback;
  }
}

export function isNotFoundError(error: unknown): boolean {
  return prismaCode(error) === "P2025";
}

// For `.catch(...)` on deletes: a row that is already gone is fine, anything
// else is logged instead of being swallowed.
export function ignoreNotFound(error: unknown): null {
  if (prismaCode(error) !== "P2025") console.error("Admin delete failed:", error);
  return null;
}
