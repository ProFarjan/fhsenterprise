import { SiteKey } from "@/generated/prisma/enums";

// Display names for the `SiteKey` enum in prisma/schema.prisma. Single source
// of truth for the "which site" dropdowns in the admin panel — keep in sync
// with COMPANY_SUBDOMAINS in src/lib/companies.ts (FHS_ENTERPRISE is the one entry
// with no subdomain, for content not tied to a subsidiary).
export const SITE_OPTIONS: { key: SiteKey; label: string }[] = [
  { key: SiteKey.FHS_ENTERPRISE, label: "FHS Enterprise" },
  { key: SiteKey.AUTO_RICE_MILL, label: "M/s. Bangladesh Auto Rice Mill" },
  { key: SiteKey.VEHICLE_SOLUTIONS, label: "Vehicle Solutions" },
  { key: SiteKey.DAILY_BAZAR, label: "Daily Bazar" },
];

const LABEL_BY_KEY = new Map(SITE_OPTIONS.map((o) => [o.key, o.label]));

export function siteLabel(key: SiteKey): string {
  return LABEL_BY_KEY.get(key) ?? key;
}

export function isSiteKey(value: string): value is SiteKey {
  return LABEL_BY_KEY.has(value as SiteKey);
}
