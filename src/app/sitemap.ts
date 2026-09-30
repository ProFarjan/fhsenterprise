import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = "https://fhsenterprise.com";
  const now = new Date();

  const publicRoutes = [
    "",
    "/about",
    "/about/history",
    "/about/founder",
    "/about/mission-vision",
    "/about/milestones",
    "/about/facilities",
    "/about/faq",
    "/companies",
    "/companies/auto-rice-mill",
    "/companies/vehicle-solutions",
    "/media",
    "/media/news",
    "/media/events",
    "/media/gallery",
    "/sustainability",
    "/sustainability/health",
    "/sustainability/education",
    "/sustainability/community-development",
    "/sustainability/environment",
    "/contact",
  ];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  for (const route of publicRoutes) {
    // Priority assignment
    let priority = 0.7;
    let changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] = "weekly";

    if (route === "") {
      priority = 1.0;
      changeFrequency = "daily";
    } else if (route === "/companies" || route === "/about") {
      priority = 0.9;
      changeFrequency = "daily";
    } else if (route === "/contact" || route.startsWith("/media")) {
      priority = 0.8;
      changeFrequency = "daily";
    }

    // Both English and Bengali paths
    for (const locale of ["en", "bn"]) {
      const url = `${siteUrl}/${locale}${route}`;
      sitemapEntries.push({
        url,
        lastModified: now,
        changeFrequency,
        priority,
        alternates: {
          languages: {
            en: `${siteUrl}/en${route}`,
            bn: `${siteUrl}/bn${route}`,
          },
        },
      });
    }
  }

  return sitemapEntries;
}
