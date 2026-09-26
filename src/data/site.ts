import type { SiteConfig } from "@/types/content";
import type { AppLocale } from "@/i18n/routing";
import { siteConfigBn } from "./site.bn";
import { siteConfigEn } from "./site.en";

// Locale-keyed content loader. Components call this instead of importing a
// static object, so the same call site keeps working once this is swapped
// for a Prisma query that returns a `SiteConfig` per locale.
export function getSiteConfig(locale: AppLocale): SiteConfig {
  return locale === "en" ? siteConfigEn : siteConfigBn;
}
