import type { NavItem } from "@/types/content";

// Bespoke content model for the Mahin Enterprise subdomain
// (src/app/[locale]/companies/mahin) — an LPG gas-cylinder supplier serving
// the Mymensingh division. Structurally mirrors the MR Lube content shape
// (src/types/mrlube.ts) — a hero slider plus a Categories-driven product
// structure — but for LPG cylinders and delivery instead of lubricants, and
// rendered in a light "navy + flame-orange" design.

export type MahinIconName =
  | "cylinder"
  | "flame"
  | "truck"
  | "home"
  | "factory"
  | "shield"
  | "gauge"
  | "wrench"
  | "phone"
  | "clock"
  | "leaf"
  | "car"
  | "pin"
  | "check";

export interface MahinHeroSlide {
  image: string;
  eyebrow: string;
  headingLead: string;
  headingEmphasis: string;
  headingTail: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
}

export interface MahinFeature {
  icon: MahinIconName;
  title: string;
  body: string;
}

export interface MahinStat {
  value: string;
  label: string;
}

export interface MahinProcessStep {
  title: string;
  body: string;
}

export interface MahinTestimonial {
  quote: string;
  name: string;
  role: string;
}

export interface MahinProductCategory {
  slug: string;
  name: string;
  icon: MahinIconName;
  tagline: string;
  description: string;
  image: string;
}

export interface MahinProductSpec {
  label: string;
  value: string;
}

export interface MahinProduct {
  slug: string;
  category: string;
  name: string;
  tagline: string;
  image: string;
  description: string;
  specs: MahinProductSpec[];
  benefits: string[];
}

export interface MahinFooterContent {
  blurb: string;
  exploreHeading: string;
  contactHeading: string;
  email: string;
  phone: string;
  addressHeading: string;
  address: string[];
  followHeading: string;
  socials: { label: string; href: string }[];
  legal: string;
}

export interface MahinPageHeaderContent {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
}

export interface MahinValue {
  title: string;
  body: string;
}

export interface MahinContent {
  name: string;
  tagline: string;
  nav: NavItem[];
  hero: {
    slides: MahinHeroSlide[];
  };
  why: {
    eyebrow: string;
    headingLead: string;
    headingEmphasis: string;
    intro: string;
    features: MahinFeature[];
  };
  categoriesSection: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    exploreLabel: string;
  };
  featured: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    viewAllLabel: string;
  };
  // The service-area band — Mahin only covers the Mymensingh division, so the
  // homepage makes that explicit with a coverage map + district list.
  coverage: {
    eyebrow: string;
    heading: string;
    body: string;
    image: string;
    districts: string[];
    note: string;
  };
  stats: {
    eyebrow: string;
    heading: string;
    items: MahinStat[];
  };
  process: {
    eyebrow: string;
    heading: string;
    body: string;
    image: string;
    steps: MahinProcessStep[];
  };
  testimonials: {
    heading: string;
    subtitle: string;
    items: MahinTestimonial[];
  };
  cta: {
    heading: string;
    body: string;
    button: string;
  };
  categories: MahinProductCategory[];
  products: MahinProduct[];
  labels: {
    allProducts: string;
    viewDetails: string;
    backToCategories: string;
    backToCategory: string;
    inCategory: string;
    specsHeading: string;
    benefitsHeading: string;
    relatedHeading: string;
    enquire: string;
    productsCount: string;
  };
  footer: MahinFooterContent;
  aboutPage: {
    header: MahinPageHeaderContent;
    storyHeading: string;
    storyParagraphs: string[];
    storyImage: string;
    missionHeading: string;
    mission: string;
    visionHeading: string;
    vision: string;
    valuesHeading: string;
    values: MahinValue[];
  };
  categoriesPage: {
    header: MahinPageHeaderContent;
    intro: string;
  };
  galleryPage: {
    header: MahinPageHeaderContent;
    intro: string;
    photosLabel: string;
    videosLabel: string;
    noPhotos: string;
    noVideos: string;
  };
  contactPage: {
    header: MahinPageHeaderContent;
    formHeading: string;
    formIntro: string;
    officeHeading: string;
    emailLabel: string;
    phoneLabel: string;
  };
}
