import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Only the admin panel and the contact endpoint are off limits. The
        // other /api/ routes just serve the images shown on public pages
        // (news, gallery, companies...), which search engines need to fetch to
        // index them; unpublished items are not served to the public anyway.
        disallow: ["/admin/", "/api/contact", "/api/health"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
