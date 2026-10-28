import path from "node:path";
import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

// Content-Security-Policy is REPORT-ONLY for now: violations show up in the
// browser console without blocking anything, so it can be tightened against
// real traffic before it is enforced (rename the header to
// "Content-Security-Policy" once the console is clean). 'unsafe-inline' is
// needed for Next's inline bootstrap scripts and Tailwind/next-font styles
// until nonces are wired up. YouTube is allowed for the gallery/video embeds
// and thumbnails (img.youtube.com).
const contentSecurityPolicy = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://img.youtube.com",
  "media-src 'self'",
  "font-src 'self' data:",
  "connect-src 'self'",
  "frame-src https://www.youtube.com https://www.youtube-nocookie.com",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'self'",
].join("; ");

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  { key: "Content-Security-Policy-Report-Only", value: contentSecurityPolicy },
  // HSTS is only meaningful (and only honoured) over HTTPS. Deliberately no
  // includeSubDomains/preload: subsidiary hosts may not all serve HTTPS yet.
  ...(process.env.NODE_ENV === "production"
    ? [{ key: "Strict-Transport-Security", value: "max-age=31536000" }]
    : []),
];

const nextConfig: NextConfig = {
  // Don't advertise the framework in every response.
  poweredByHeader: false,
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
      // Same for product images, versioned with `?v=<updatedAt>`.
      { pathname: "/api/products/**" },
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
  async headers() {
    return [
      { source: "/:path*", headers: securityHeaders },
      // The admin panel is never meant to be framed, even by our own pages.
      {
        source: "/admin/:path*",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          {
            key: "Content-Security-Policy-Report-Only",
            value: contentSecurityPolicy.replace("frame-ancestors 'self'", "frame-ancestors 'none'"),
          },
          { key: "Cache-Control", value: "private, no-store" },
        ],
      },
    ];
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
