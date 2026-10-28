import type { NavItem, SiteConfig, SustainabilityPillar } from "@/types/content";
import type { AppLocale } from "@/i18n/routing";
import { siteConfigBn } from "./site.bn";
import { siteConfigEn } from "./site.en";

const SUSTAINABILITY_HREF = "/sustainability";

// The header menu lists one sub-link per sustainability pillar. Those pages only
// exist for pillars that actually have content in `sustainabilityPages.pillars`,
// so drop the menu entries (and the dropdown itself) for the rest — a link must
// never lead to a page that 404s.
function withAvailablePillarLinks(config: SiteConfig): SiteConfig {
  const available = new Set(config.sustainabilityPages.pillars.map((p) => p.slug));

  const nav = config.nav.map((item): NavItem => {
    if (item.href !== SUSTAINABILITY_HREF || !item.children) return item;
    const children = item.children.filter((child) =>
      available.has(child.href.slice(`${SUSTAINABILITY_HREF}/`.length)),
    );
    return { ...item, children: children.length > 0 ? children : undefined };
  });

  return { ...config, nav };
}

// A social link whose href is still the "#" placeholder would render as a dead
// icon (and, through the locale-aware Link, navigate to /bn#). Only real URLs
// are exposed to the UI and to the structured data's `sameAs`.
function withRealSocials(config: SiteConfig): SiteConfig {
  return {
    ...config,
    socials: config.socials.filter((s) => /^https?:\/\//.test(s.href)),
  };
}

const prepare = (config: SiteConfig) => withRealSocials(withAvailablePillarLinks(config));

const configs: Record<AppLocale, SiteConfig> = {
  en: prepare(siteConfigEn),
  bn: prepare(siteConfigBn),
};

// Locale-keyed content loader. Components call this instead of importing a
// static object, so the same call site keeps working once this is swapped
// for a Prisma query that returns a `SiteConfig` per locale.
export function getSiteConfig(locale: AppLocale): SiteConfig {
  return configs[locale === "en" ? "en" : "bn"];
}

// A single sustainability pillar page's content, or undefined when no content
// has been written for that slug yet (callers should respond with notFound()).
export function getSustainabilityPillar(
  locale: AppLocale,
  slug: string,
): SustainabilityPillar | undefined {
  return getSiteConfig(locale).sustainabilityPages.pillars.find((p) => p.slug === slug);
}
