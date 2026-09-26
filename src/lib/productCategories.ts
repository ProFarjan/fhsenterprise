import { SiteKey } from "@/generated/prisma/enums";

// Shared product category definitions for the admin panel and public pages.
// Each subsidiary can have its own category schema. If a site doesn't have
// products (or doesn't categorize them), leave it as an empty array.
export type ProductCategory = { slug: string; name: string };

export const PRODUCT_CATEGORIES: Record<SiteKey, ProductCategory[]> = {
  [SiteKey.FHS_ENTERPRISE]: [],
  [SiteKey.AUTO_RICE_MILL]: [
    { slug: "premium-rice", name: "Premium Rice" },
    { slug: "parboiled-rice", name: "Parboiled Rice" },
    { slug: "aromatic-rice", name: "Aromatic Rice" },
  ],
  [SiteKey.VEHICLE_SOLUTIONS]: [
    { slug: "vehicle-parts", name: "Vehicle Parts" },
    { slug: "repairing", name: "Repairing" },
    { slug: "tyres", name: "Tyres" },
    { slug: "lubricants", name: "Lubricants" },
    { slug: "accessories", name: "Accessories" },
  ],
  [SiteKey.DAILY_BAZAR]: [],
};

export function categoriesForSite(site: SiteKey): ProductCategory[] {
  return PRODUCT_CATEGORIES[site] || [];
}

export function isValidCategory(site: SiteKey, slug: string): boolean {
  return categoriesForSite(site).some((c) => c.slug === slug);
}

export function categoryLabel(site: SiteKey, slug: string): string {
  const category = categoriesForSite(site).find((c) => c.slug === slug);
  return category ? category.name : slug;
}
