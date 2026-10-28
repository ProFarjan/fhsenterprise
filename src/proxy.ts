import createMiddleware from "next-intl/middleware";
import { NextResponse, type NextRequest } from "next/server";
import { routing } from "./i18n/routing";
import { COMPANY_SUBDOMAINS, getRootDomain } from "./lib/companies";

// Next.js 16 renamed `middleware.ts` to `proxy.ts` (the exported function is
// still a plain (req) => Response handler, so next-intl's middleware factory
// works unchanged here).
const handleI18n = createMiddleware(routing);

// Hostname only (no port). Same source of truth as companyUrl() in
// src/lib/companies.ts, so subdomain detection and the links built for company
// cards can never disagree.
const ROOT_DOMAIN = getRootDomain().split(":")[0].toLowerCase();

// Subsidiaries that run as their own deployments. Requests for these hosts (and
// their aliases) are sent to the canonical URL.
const EXTERNAL_COMPANY_URLS: Record<string, string> = {
  [`vehiclesolutions.${ROOT_DOMAIN}`]: "https://vehiclesolutions.fhsenterprise.com",
  "vehicle-solutions.fhsenterprise.com": "https://vehiclesolutions.fhsenterprise.com",
  [`dailybazar.${ROOT_DOMAIN}`]: "https://dailybazar.fhsenterprise.com",
  [`daily-bazar.${ROOT_DOMAIN}`]: "https://dailybazar.fhsenterprise.com",
  "daily-bazar.fhsenterprise.com": "https://dailybazar.fhsenterprise.com",
};

// "auto-rice-mill.fhsenterprise.com" -> "auto-rice-mill"; "fhsenterprise.com" / "www.fhsenterprise.com" -> null.
// `hostname` must already be lower-cased and port-free.
function companySubdomain(hostname: string): string | null {
  if (hostname === ROOT_DOMAIN || hostname === `www.${ROOT_DOMAIN}`) return null;
  if (!hostname.endsWith(`.${ROOT_DOMAIN}`)) return null;
  const sub = hostname.slice(0, -`.${ROOT_DOMAIN}`.length);
  return COMPANY_SUBDOMAINS.has(sub) ? sub : null;
}

export function proxy(request: NextRequest) {
  const hostname = (request.headers.get("host") ?? "").split(":")[0].toLowerCase();

  // Redirect external company hosts to their canonical URL — but never to the
  // host the request already arrived on: if DNS ever points that hostname at
  // this app, redirecting to itself would loop forever.
  const externalUrl = EXTERNAL_COMPANY_URLS[hostname];
  if (externalUrl && new URL(externalUrl).hostname !== hostname) {
    return NextResponse.redirect(externalUrl, 307);
  }

  const subdomain = companySubdomain(hostname);
  if (!subdomain) return handleI18n(request);

  const segments = request.nextUrl.pathname.split("/").filter(Boolean);
  const [maybeLocale, ...rest] = segments;
  if (!routing.locales.includes(maybeLocale as (typeof routing.locales)[number])) {
    // No locale in the path yet — let next-intl add it (redirect keeps the host).
    return handleI18n(request);
  }

  const internalSubdomain =
    subdomain === "autorice" || subdomain === "autorice-mill"
      ? "auto-rice-mill"
      : subdomain;

  // Rewrite (URL stays clean) to the hidden internal company path.
  const url = request.nextUrl.clone();
  url.pathname = `/${maybeLocale}/companies/${internalSubdomain}/${rest.join("/")}`.replace(/\/+$/, "");
  return NextResponse.rewrite(url);
}

export const config = {
  // `admin` is excluded so the admin panel lives at a clean, locale-free
  // `/admin` — next-intl must not prefix it into `/bn/admin` or `/en/admin`.
  // `api` and `admin` must match a WHOLE path segment: a bare prefix would also
  // skip locale handling for unrelated paths such as /administrator or /api-docs.
  matcher: ["/((?!api(?:/|$)|admin(?:/|$)|_next|.*\\..*).*)"],
};
