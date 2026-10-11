import path from "node:path";
import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  /* config options here */
  turbopack: {
    // Pin the workspace root to this project — an unrelated lockfile in a
    // parent directory would otherwise make Next.js guess the wrong root.
    root: path.resolve(__dirname),
  },
  images: {
    // Next 16 blocks query strings on local (same-origin) images unless the
    // path is allowlisted here (see the version-16 upgrade note in
    // node_modules/next/dist/docs — "Local Images with Query Strings").
    localPatterns: [
      // Preserve the framework's default posture for everything else: any
      // local path, but no query string.
      { pathname: "/**", search: "" },
      // Our own byte-serving company routes version the URL with
      // `?v=<updatedAt>` so a logo/banner re-upload busts the image-optimizer
      // and browser caches (see src/lib/publicContent.ts). The version is
      // dynamic, so `search` can't be an exact match — omit it to allow any
      // query string, scoped to just these (our) routes.
      { pathname: "/api/companies/**" },
    ],
  },
  experimental: {
    serverActions: {
      // Next's default is 1MB. The admin Media & News forms submit images as
      // multipart Server Action bodies (MAX_IMAGE_BYTES in src/lib/imageUpload.ts
      // caps the image itself at 5MB) — this must stay comfortably above that
      // app-level limit, with room for multipart boundary/field overhead, or
      // legitimate uploads get rejected by the framework before validation
      // ever runs.
      bodySizeLimit: "6mb",
    },
  },
  async redirects() {
    return [
      {
        source: "/companies/vehicle-solutions",
        destination: "https://vehiclesolutions.fhsenterprise.com",
        permanent: false,
      },
      {
        source: "/:locale/companies/vehicle-solutions",
        destination: "https://vehiclesolutions.fhsenterprise.com",
        permanent: false,
      },
      {
        source: "/companies/daily-bazar",
        destination: "https://dailybazar.fhsenterprise.com",
        permanent: false,
      },
      {
        source: "/:locale/companies/daily-bazar",
        destination: "https://dailybazar.fhsenterprise.com",
        permanent: false,
      },
      {
        source: "/companies/dailybazar",
        destination: "https://dailybazar.fhsenterprise.com",
        permanent: false,
      },
      {
        source: "/:locale/companies/dailybazar",
        destination: "https://dailybazar.fhsenterprise.com",
        permanent: false,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
