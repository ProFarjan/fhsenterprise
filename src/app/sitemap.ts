import type { MetadataRoute } from "next";
import { getSiteConfig } from "@/data/site";
import { SITE_URL } from "@/lib/seo";
import { SHOW_UNVERIFIED_SECTIONS } from "@/data/organization";
import { routing } from "@/i18n/routing";

// Every public page, once per locale, each pointing at its translation (hreflang)
// and at the default-locale version as "x-default".
//
// Deliberately NOT listed:
//  - lastModified / changeFrequency: there is no real per-page modification date
//    to report, and a made-up one ("always today", "daily") teaches crawlers to
//    ignore the field. Omitting them is accurate; search engines work fine.
//  - the subsidiary microsites: they live on their own subdomains (a different
//    host), so they can't be listed in this host's sitemap.
export default function sitemap(): MetadataRoute.Sitemap {
  const pillars = getSiteConfig("en").sustainabilityPages.pillars;
  const publicRoutes = [
    "",
    "/about",
    "/about/history",
    "/about/founder",
    "/about/mission-vision",
    "/about/facilities",
    "/about/faq",
    "/companies",
    "/media",
    "/media/news",
    "/media/events",
    "/media/gallery",
    // The Sustainability section exists only once at least one pillar has content;
    // each pillar is its own page (pillars without content 404).
    ...(pillars.length > 0 ? ["/sustainability", ...pillars.map((p) => `/sustainability/${p.slug}`)] : []),
    "/contact",
    // Only once the draft legal text has been reviewed (SHOW_UNVERIFIED_SECTIONS.legalPages).
    ...(SHOW_UNVERIFIED_SECTIONS.legalPages ? ["/privacy", "/terms"] : []),
    ...(SHOW_UNVERIFIED_SECTIONS.milestones ? ["/about/milestones"] : []),
  ];

  const priorityFor = (route: string) =>
    route === "" ? 1.0 : route === "/companies" || route === "/about" ? 0.9 : route === "/contact" || route.startsWith("/media") ? 0.8 : 0.7;

  return publicRoutes.flatMap((route) => {
    const languages = {
      ...Object.fromEntries(routing.locales.map((l) => [l, `${SITE_URL}/${l}${route}`])),
      "x-default": `${SITE_URL}/${routing.defaultLocale}${route}`,
    };
    return routing.locales.map((locale) => ({
      url: `${SITE_URL}/${locale}${route}`,
      priority: priorityFor(route),
      alternates: { languages },
    }));
  });
}
