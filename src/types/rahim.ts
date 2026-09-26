import type { NavItem } from "@/types/content";

// Bespoke content model for the Rahim Enterprise subdomain
// (src/app/[locale]/companies/rahim) — a nationwide ammonia gas supplier.
// Structurally mirrors the MR Lube content shape (src/types/mrlube.ts) — a
// hero slider plus a Categories-driven product structure — but for ammonia
// (refrigeration, industrial, water-treatment, agricultural) instead of
// lubricants, and rendered in a light "slate + cyan" design.

export type RahimIconName =
  | "cylinder"
  | "snowflake"
  | "molecule"
  | "flask"
  | "factory"
  | "droplet"
  | "shield"
  | "truck"
  | "gauge"
  | "leaf"
  | "tank"
  | "thermometer"
  | "wave"
  | "check"
  | "pin";

export interface RahimHeroSlide {
  image: string;
  eyebrow: string;
  headingLead: string;
  headingEmphasis: string;
  headingTail: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
}

export interface RahimFeature {
  icon: RahimIconName;
  title: string;
  body: string;
}

export interface RahimStat {
  value: string;
  label: string;
}

export interface RahimProcessStep {
  title: string;
  body: string;
}

export interface RahimTestimonial {
  quote: string;
  name: string;
  role: string;
}

export interface RahimProductCategory {
  slug: string;
  name: string;
  icon: RahimIconName;
  tagline: string;
  description: string;
  image: string;
}

export interface RahimProductSpec {
  label: string;
  value: string;
}

export interface RahimProduct {
  slug: string;
  category: string;
  name: string;
  tagline: string;
  image: string;
  description: string;
  specs: RahimProductSpec[];
  benefits: string[];
}

export interface RahimFooterContent {
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

export interface RahimPageHeaderContent {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
}

export interface RahimValue {
  title: string;
  body: string;
}

export interface RahimContent {
  name: string;
  tagline: string;
  nav: NavItem[];
  hero: {
    slides: RahimHeroSlide[];
  };
  why: {
    eyebrow: string;
    headingLead: string;
    headingEmphasis: string;
    intro: string;
    features: RahimFeature[];
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
  stats: {
    eyebrow: string;
    heading: string;
    items: RahimStat[];
  };
  process: {
    eyebrow: string;
    heading: string;
    body: string;
    image: string;
    steps: RahimProcessStep[];
  };
  testimonials: {
    heading: string;
    subtitle: string;
    items: RahimTestimonial[];
  };
  cta: {
    heading: string;
    body: string;
    button: string;
  };
  categories: RahimProductCategory[];
  products: RahimProduct[];
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
  footer: RahimFooterContent;
  aboutPage: {
    header: RahimPageHeaderContent;
    storyHeading: string;
    storyParagraphs: string[];
    storyImage: string;
    missionHeading: string;
    mission: string;
    visionHeading: string;
    vision: string;
    valuesHeading: string;
    values: RahimValue[];
  };
  categoriesPage: {
    header: RahimPageHeaderContent;
    intro: string;
  };
  galleryPage: {
    header: RahimPageHeaderContent;
    intro: string;
    photosLabel: string;
    videosLabel: string;
    noPhotos: string;
    noVideos: string;
  };
  contactPage: {
    header: RahimPageHeaderContent;
    formHeading: string;
    formIntro: string;
    officeHeading: string;
    emailLabel: string;
    phoneLabel: string;
  };
}
