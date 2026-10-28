// Single source of truth for company subdomains, shared by the proxy
// (host -> internal path rewrite) and the card components (link building).
// Keep in sync with the folders under src/app/[locale]/companies/ and the
// `subdomain` values in src/data/site.en.ts / site.bn.ts.

// Microsites this app serves itself: one folder each under src/app/[locale]/companies/.
export const INTERNAL_COMPANY_SLUGS = ["auto-rice-mill"] as const;

// Extra hostnames that serve one of those microsites -> the folder they map to.
const SUBDOMAIN_ALIASES: Record<string, string> = {
  autorice: "auto-rice-mill",
  "autorice-mill": "auto-rice-mill",
};

// Every subdomain src/proxy.ts treats as a company site (real names + aliases).
export const COMPANY_SUBDOMAINS = new Set<string>([
  ...INTERNAL_COMPANY_SLUGS,
  ...Object.keys(SUBDOMAIN_ALIASES),
]);

// The microsite folder a subdomain resolves to ("autorice" -> "auto-rice-mill").
export function resolveCompanySlug(subdomain: string): string {
  return SUBDOMAIN_ALIASES[subdomain] ?? subdomain;
}

// The ONE place the root domain is decided — src/proxy.ts uses it too, so
// subdomain detection and the links built for company cards can never disagree.
// Unset in production -> the real domain; unset in dev -> localhost:3000, where
// browsers resolve "<sub>.localhost" to 127.0.0.1 with no hosts-file edits.
// (NEXT_PUBLIC_* values are inlined at build time, so set it before `next build`.)
const PRODUCTION_ROOT_DOMAIN = "fhsenterprise.com";
const DEVELOPMENT_ROOT_DOMAIN = "localhost:3000";

export function getRootDomain(): string {
  return (
    process.env.NEXT_PUBLIC_ROOT_DOMAIN ||
    (process.env.NODE_ENV === "production" ? PRODUCTION_ROOT_DOMAIN : DEVELOPMENT_ROOT_DOMAIN)
  );
}

export function companyUrl(subdomain: string, locale?: string): string {
  if (subdomain.includes(".")) {
    if (subdomain.startsWith("http://") || subdomain.startsWith("https://")) {
      return subdomain;
    }
    const root = getRootDomain();
    const protocol = root.startsWith("localhost") ? "http" : "https";
    return `${protocol}://${subdomain}`;
  }
  const root = getRootDomain();
  const protocol = root.startsWith("localhost") ? "http" : "https";
  return locale ? `${protocol}://${subdomain}.${root}/${locale}` : `${protocol}://${subdomain}.${root}`;
}
