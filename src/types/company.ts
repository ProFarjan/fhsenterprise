import type { NavItem } from "@/types/content";

// Content shape for an individual company's subdomain site
// (src/app/[locale]/companies/<subdomain>/), separate from the parent
// MR Group `SiteConfig` in content.ts.
export interface CompanySiteContent {
  name: string;
  sector: string;
  tagline: string;
  heroImage: string;
  /** Only set for companies with a bespoke navbar (e.g. agro); anchors into the homepage sections. */
  nav?: NavItem[];
  about: {
    heading: string;
    body: string;
  };
  products: {
    heading: string;
    items: string[];
  };
  contact: {
    heading: string;
    email: string;
    /** null = not provided yet; the row is hidden rather than showing a placeholder. */
    phone: string | null;
    address: string;
  };
}

export interface CompanyTheme {
  /** Solid accent background, e.g. buttons/badges. */
  accentBg: string;
  /** Accent background on hover. */
  accentBgHover: string;
  /** Accent text color. */
  accentText: string;
  /** Accent border color. */
  accentBorder: string;
  /** Gradient "from" stop used behind the hero image. */
  heroFrom: string;
}
