// Single source of truth for company subdomains, shared by the proxy
// (host -> internal path rewrite) and the card components (link building).
// Keep in sync with the folders under src/app/[locale]/companies/ and the
// `subdomain` values in src/data/site.en.ts / site.bn.ts.
export const COMPANY_SUBDOMAINS = new Set([
  "agro",
  "filling-station",
  "agro-medicine",
  "feed",
  "tech",
  "lube",
  "mahin",
  "rahim",
]);

const DEFAULT_ROOT_DOMAIN = "localhost:3000";

export function getRootDomain(): string {
  return process.env.NEXT_PUBLIC_ROOT_DOMAIN || DEFAULT_ROOT_DOMAIN;
}

export function companyUrl(subdomain: string, locale: string): string {
  const root = getRootDomain();
  const protocol = root.startsWith("localhost") ? "http" : "https";
  return `${protocol}://${subdomain}.${root}/${locale}`;
}
