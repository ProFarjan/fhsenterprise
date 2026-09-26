// Product.benefits / Product.specs are stored as loosely-typed Prisma Json
// columns (see prisma/schema.prisma) — these narrow that JsonValue down to
// the shapes the admin UI actually expects, treating anything unexpected as
// absent rather than throwing.
import type { Prisma } from "@/generated/prisma/client";

export type ProductSpec = { label: string; value: string };

export function parseProductBenefits(value: Prisma.JsonValue | null | undefined): string[] {
  if (!Array.isArray(value)) return [];
  return value.filter((item): item is string => typeof item === "string");
}

export function parseProductSpecs(value: Prisma.JsonValue | null | undefined): ProductSpec[] {
  if (!Array.isArray(value)) return [];
  return value.filter(
    (item): item is ProductSpec =>
      typeof item === "object" &&
      item !== null &&
      !Array.isArray(item) &&
      typeof (item as Record<string, unknown>).label === "string" &&
      typeof (item as Record<string, unknown>).value === "string",
  );
}
