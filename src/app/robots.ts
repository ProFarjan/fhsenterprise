import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Off limits: the admin panel and the non-page endpoints. The image routes
        // for news, gallery, events and products stay crawlable so those images
        // can be indexed (an unpublished product's image is only served to a
        // signed-in admin). The company logo/banner/hero routes are NOT gated by
        // Company.isPublished (see their comments), so they are kept out of search
        // indexes; the same images are still reached through the pages that show them.
        disallow: ["/admin/", "/api/contact", "/api/health", "/api/companies/"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
