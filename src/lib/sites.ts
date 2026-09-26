import { SiteKey } from "@/generated/prisma/enums";

// Display names for the `SiteKey` enum in prisma/schema.prisma. Single source
// of truth for the "which site" dropdowns in the admin panel — keep in sync
// with COMPANY_SUBDOMAINS in src/lib/companies.ts (MR_GROUP is the one entry
// with no subdomain, for content not tied to a subsidiary).
export const SITE_OPTIONS: { key: SiteKey; label: string }[] = [
  { key: SiteKey.MR_GROUP, label: "MR Group" },
  { key: SiteKey.AGRO, label: "Rabeya Agro" },
  { key: SiteKey.FEED, label: "MR Feed" },
  { key: SiteKey.AGRO_MEDICINE, label: "MR Chemical (Agro Medicine)" },
  { key: SiteKey.FILLING_STATION, label: "Sattar Filling Station" },
  { key: SiteKey.AGRI_TECH, label: "MR Agri Technology" },
  { key: SiteKey.MR_LUBE, label: "MR Lube" },
  { key: SiteKey.MAHIN, label: "Mahin Enterprise (LPG)" },
  { key: SiteKey.RAHIM, label: "Rahim Enterprise (Ammonia)" },
];

const LABEL_BY_KEY = new Map(SITE_OPTIONS.map((o) => [o.key, o.label]));

export function siteLabel(key: SiteKey): string {
  return LABEL_BY_KEY.get(key) ?? key;
}

export function isSiteKey(value: string): value is SiteKey {
  return LABEL_BY_KEY.has(value as SiteKey);
}
