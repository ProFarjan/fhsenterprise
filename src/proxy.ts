import createMiddleware from "next-intl/middleware";
import { NextResponse, type NextRequest } from "next/server";
import { routing } from "./i18n/routing";
import { COMPANY_SUBDOMAINS } from "./lib/companies";

// Next.js 16 renamed `middleware.ts` to `proxy.ts` (the exported function is
// still a plain (req) => Response handler, so next-intl's middleware factory
// works unchanged here).
const handleI18n = createMiddleware(routing);

const ROOT_DOMAIN = (process.env.NEXT_PUBLIC_ROOT_DOMAIN || "localhost").split(":")[0];

// "agro.mrgroup.com" -> "agro"; "mrgroup.com" / "www.mrgroup.com" -> null.
function companySubdomain(host: string): string | null {
  const hostname = host.split(":")[0];
  if (hostname === ROOT_DOMAIN || hostname === `www.${ROOT_DOMAIN}`) return null;
  if (!hostname.endsWith(`.${ROOT_DOMAIN}`)) return null;
  const sub = hostname.slice(0, -`.${ROOT_DOMAIN}`.length);
  return COMPANY_SUBDOMAINS.has(sub) ? sub : null;
}

export function proxy(request: NextRequest) {
  const host = request.headers.get("host") ?? "";
  const hostname = host.split(":")[0].toLowerCase();

  // Directly redirect external company subdomains to their destination URLs
  if (
    hostname === `vehiclesolutions.${ROOT_DOMAIN}` ||
    hostname === "vehiclesolutions.fhsenterprise.com" ||
    hostname === "vehicle-solutions.fhsenterprise.com"
  ) {
    return NextResponse.redirect("https://vehiclesolutions.fhsenterprise.com", 307);
  }

  if (
    hostname === `dailybazar.${ROOT_DOMAIN}` ||
    hostname === `daily-bazar.${ROOT_DOMAIN}` ||
    hostname === "dailybazar.fhsenterprise.com" ||
    hostname === "daily-bazar.fhsenterprise.com"
  ) {
    return NextResponse.redirect("https://dailybazar.fhsenterprise.com", 307);
  }

  const subdomain = companySubdomain(host);
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
  matcher: ["/((?!api|admin|_next|.*\\..*).*)"],
};
