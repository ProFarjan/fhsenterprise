import { SiteKey } from "@/generated/prisma/enums";

// Fixed product categories per subsidiary — mirrors the `categories` arrays
// each company's public site already ships in src/data/companies/*.ts (see
// e.g. feedContent.en.categories), so a product's category always lines up
// with a real category slug/name the eventual public product pages use.
// Companies with no product catalogue (MR_GROUP, FILLING_STATION) get an
// empty list.
export type ProductCategory = { slug: string; name: string };

export const PRODUCT_CATEGORIES: Record<SiteKey, ProductCategory[]> = {
  [SiteKey.MR_GROUP]: [],
  [SiteKey.FILLING_STATION]: [],
  [SiteKey.AGRO]: [
    { slug: "cattle-farming", name: "Cattle Farming" },
    { slug: "fishery", name: "Fishery & Aquaculture" },
    { slug: "crop-farming", name: "Crop Farming" },
  ],
  [SiteKey.FEED]: [
    { slug: "poultry-feed", name: "Poultry Feed" },
    { slug: "cattle-feed", name: "Cattle Feed" },
    { slug: "fish-feed", name: "Fish Feed" },
  ],
  [SiteKey.AGRO_MEDICINE]: [
    { slug: "aqua", name: "Aqua" },
    { slug: "cattle", name: "Cattle" },
    { slug: "poultry", name: "Poultry" },
  ],
  [SiteKey.AGRI_TECH]: [
    { slug: "tractors-power", name: "Tractors & Power Equipment" },
    { slug: "irrigation-systems", name: "Irrigation & Water Systems" },
    { slug: "hand-power-tools", name: "Hand & Power Tools" },
    { slug: "smart-farming", name: "Smart Farming Solutions" },
  ],
  [SiteKey.MR_LUBE]: [
    { slug: "automotive-oils", name: "Automotive Engine Oils" },
    { slug: "industrial-lubricants", name: "Industrial Lubricants" },
    { slug: "greases", name: "Greases & Compounds" },
    { slug: "specialty-fluids", name: "Specialty Fluids" },
  ],
  [SiteKey.MAHIN]: [
    { slug: "household-lpg", name: "Household LPG" },
    { slug: "commercial-lpg", name: "Commercial LPG" },
    { slug: "industrial-lpg", name: "Industrial LPG" },
    { slug: "autogas", name: "Auto LPG" },
  ],
  [SiteKey.RAHIM]: [
    { slug: "refrigeration", name: "Refrigeration Ammonia" },
    { slug: "industrial", name: "Industrial Ammonia" },
    { slug: "water-treatment", name: "Water Treatment Ammonia" },
    { slug: "agricultural", name: "Agricultural Ammonia" },
  ],
};

export function categoriesForSite(site: string): ProductCategory[] {
  return PRODUCT_CATEGORIES[site as SiteKey] ?? [];
}

export function isValidCategory(site: string, slug: string): boolean {
  return categoriesForSite(site).some((c) => c.slug === slug);
}

export function categoryLabel(site: string, slug: string): string {
  return categoriesForSite(site).find((c) => c.slug === slug)?.name ?? slug;
}
