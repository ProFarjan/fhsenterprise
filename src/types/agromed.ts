import type { NavItem } from "@/types/content";

// Bespoke content model for the MR Agro Medicine subdomain
// (src/app/[locale]/companies/agro-medicine) — an animal-health / veterinary
// medicine site with a hero slider and a Products section organised into
// species categories (aqua, cattle, poultry, pet). Richer than the generic
// CompanySiteContent used by the other, not-yet-designed company sites.

export type AgroMedIconName =
  | "aqua"
  | "cattle"
  | "poultry"
  | "pet"
  | "vaccine"
  | "shield"
  | "flask"
  | "leaf"
  | "pulse"
  | "drop"
  | "truck"
  | "award";

export interface AgroMedStat {
  value: string;
  label: string;
}

export interface AgroMedFeature {
  icon: AgroMedIconName;
  title: string;
  body: string;
}

export interface AgroMedHeroSlide {
  eyebrow: string;
  title: string;
  subtitle: string;
  image: string;
  ctaLabel: string;
  ctaCategory: string; // category slug the primary CTA links to
}

export interface AgroMedCategory {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  icon: AgroMedIconName;
}

export interface AgroMedProduct {
  slug: string;
  category: string; // category slug
  name: string;
  tagline: string;
  form: string;
  pack: string;
  composition: string;
  benefits: string[];
  icon: AgroMedIconName;
  image: string;
  // Detail-page gallery, shown banner-first; falls back to [image] when absent.
  images?: string[];
  // Richer fields surfaced only on the product detail page.
  overview: string;
  indications: string[];
  directions: string;
  storage: string;
}

export interface AgroMedPageHeader {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
}

export interface AgroMedValue {
  title: string;
  body: string;
}

export interface AgroMedFooterContent {
  newsletterHeading: string;
  emailPlaceholder: string;
  submitLabel: string;
  consent: string;
  contactHeading: string;
  email: string;
  phone: string;
  addressHeading: string;
  address: string[];
  followHeading: string;
  socials: { label: string; href: string }[];
  statement: string;
  legal: string;
}

export interface AgroMedContent {
  name: string;
  tagline: string;
  getInTouch: string;
  nav: NavItem[];
  hero: {
    slides: AgroMedHeroSlide[];
  };
  intro: {
    eyebrow: string;
    heading: string;
    body: string;
    features: AgroMedFeature[];
  };
  categorySection: {
    eyebrow: string;
    heading: string;
    body: string;
    viewAll: string;
    exploreLabel: string;
  };
  categories: AgroMedCategory[];
  products: AgroMedProduct[];
  quality: {
    eyebrow: string;
    heading: string;
    body: string;
    image: string;
    points: AgroMedFeature[];
  };
  stats: {
    eyebrow: string;
    heading: string;
    items: AgroMedStat[];
  };
  cta: {
    heading: string;
    body: string;
    button: string;
  };
  footer: AgroMedFooterContent;
  aboutPage: {
    header: AgroMedPageHeader;
    storyHeading: string;
    storyParagraphs: string[];
    storyImage: string;
    missionHeading: string;
    mission: string;
    visionHeading: string;
    vision: string;
    valuesHeading: string;
    values: AgroMedValue[];
    careHeading: string;
    careBody: string;
    careImage: string;
  };
  contactPage: {
    header: AgroMedPageHeader;
    formHeading: string;
    formIntro: string;
    officeHeading: string;
    emailLabel: string;
    phoneLabel: string;
    followHeading: string;
  };
  galleryPage: {
    header: AgroMedPageHeader;
    intro: string;
    photosLabel: string;
    videosLabel: string;
    noPhotos: string;
    noVideos: string;
  };
  productsPage: {
    header: AgroMedPageHeader;
    intro: string;
    allLabel: string;
    formLabel: string;
    packLabel: string;
    compositionLabel: string;
    benefitsLabel: string;
    enquireLabel: string;
    categoryHeaderPrefix: string; // e.g. "Products for"
    productsCountLabel: string; // e.g. "products"
    // Product detail page.
    viewDetailsLabel: string; // card CTA linking to the detail page
    overviewLabel: string;
    indicationsLabel: string;
    directionsLabel: string;
    storageLabel: string;
    relatedLabel: string;
    backToProductsLabel: string;
  };
}
