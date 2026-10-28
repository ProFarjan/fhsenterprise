import type { NavItem } from "@/types/content";

// Bespoke content model for the MR Agro subdomain homepage
// (src/app/[locale]/companies/agro). Richer than the generic
// CompanySiteContent used by the other, not-yet-designed company sites.

export type AgroIconName =
  | "leaf"
  | "price"
  | "seedling"
  | "growth"
  | "shield"
  | "report"
  | "truck"
  | "handshake";

export interface AgroFeature {
  icon: AgroIconName;
  title: string;
  body: string;
}

export interface AgroBenefitBlock {
  headingLead: string;
  headingEmphasis: string;
  intro: string;
  image: string;
  features: AgroFeature[];
}

export interface AgroStat {
  value: string;
  label: string;
}

export interface AgroTestimonial {
  quote: string;
  name: string;
  role: string;
  logo: string;
}

export interface AgroNewsItem {
  category: string;
  date: string;
  title: string;
  excerpt: string;
  image: string;
}

export interface AgroFooterContent {
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

export interface AgroPageHeader {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
}

export interface AgroValue {
  title: string;
  body: string;
}

export interface AgroAboutPage {
  header: AgroPageHeader;
  storyHeading: string;
  storyParagraphs: string[];
  storyImage: string;
  missionHeading: string;
  mission: string;
  visionHeading: string;
  vision: string;
  valuesHeading: string;
  values: AgroValue[];
}

export interface AgroProductCategory {
  slug: string;
  name: string;
  description: string;
}

export interface AgroProductSpec {
  label: string;
  value: string;
}

export interface AgroProduct {
  slug: string;
  category: string;
  name: string;
  tagline: string;
  image: string;
  description: string;
  specs: AgroProductSpec[];
  benefits: string[];
}

export interface AgroProductsPage {
  header: AgroPageHeader;
  intro: string;
  allLabel: string;
  viewDetailsLabel: string;
  categories: AgroProductCategory[];
  products: AgroProduct[];
  backLabel: string;
  specsHeading: string;
  benefitsHeading: string;
  relatedHeading: string;
  enquireLabel: string;
}

export interface AgroGalleryPage {
  header: AgroPageHeader;
  intro: string;
  photosLabel: string;
  videosLabel: string;
  noPhotos: string;
  noVideos: string;
}

export interface AgroContactPage {
  header: AgroPageHeader;
  formHeading: string;
  formIntro: string;
  officeHeading: string;
  addressLabel: string;
  emailLabel: string;
  phoneLabel: string;
}

export interface AgroContent {
  name: string;
  tagline: string;
  nav: NavItem[];
  hero: {
    headingLead: string;
    headingEmphasis: string;
    headingTail: string;
    ctaFarmer: string;
    ctaBuyer: string;
    scrollLabel: string;
    image: string;
  };
  farmers: AgroBenefitBlock;
  buyers: AgroBenefitBlock;
  impact: {
    eyebrow: string;
    stats: AgroStat[];
  };
  network: {
    eyebrow: string;
    heading: string;
    body: string;
    regions: string[];
    image: string;
  };
  partners: {
    heading: string;
    subtitle: string;
    items: AgroTestimonial[];
  };
  news: {
    heading: string;
    subtitle: string;
    viewMore: string;
    items: AgroNewsItem[];
  };
  cta: {
    heading: string;
    button: string;
  };
  footer: AgroFooterContent;
  aboutPage: AgroAboutPage;
  productsPage: AgroProductsPage;
  galleryPage: AgroGalleryPage;
  contactPage: AgroContactPage;
}
