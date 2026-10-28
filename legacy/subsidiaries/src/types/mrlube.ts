import type { NavItem } from "@/types/content";

// Bespoke content model for the MR Lube subdomain
// (src/app/[locale]/companies/lube). Structurally mirrors the MR Agri
// Technology content shape (src/types/agritech.ts) — a hero slider plus a
// Categories-driven product structure — but for engine oils, industrial
// lubricants, greases, and specialty fluids instead of farm machinery, and
// rendered in a dark "racing red + steel" design rather than agri-tech's
// light steel-and-amber look.

export type LubeIconName =
  | "oil"
  | "engine"
  | "gear"
  | "drum"
  | "shield"
  | "gauge"
  | "flame"
  | "droplet"
  | "snowflake"
  | "factory"
  | "wrench"
  | "molecule";

export interface LubeHeroSlide {
  image: string;
  eyebrow: string;
  headingLead: string;
  headingEmphasis: string;
  headingTail: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
}

export interface LubeFeature {
  icon: LubeIconName;
  title: string;
  body: string;
}

export interface LubeStat {
  value: string;
  label: string;
}

export interface LubeProcessStep {
  title: string;
  body: string;
}

export interface LubeTestimonial {
  quote: string;
  name: string;
  role: string;
}

export interface LubeProductCategory {
  slug: string;
  name: string;
  icon: LubeIconName;
  tagline: string;
  description: string;
  image: string;
}

export interface LubeProductSpec {
  label: string;
  value: string;
}

export interface LubeProduct {
  slug: string;
  category: string;
  name: string;
  tagline: string;
  image: string;
  description: string;
  specs: LubeProductSpec[];
  benefits: string[];
}

export interface LubeFooterContent {
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

export interface LubePageHeaderContent {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
}

export interface LubeValue {
  title: string;
  body: string;
}

export interface LubeContent {
  name: string;
  tagline: string;
  nav: NavItem[];
  hero: {
    slides: LubeHeroSlide[];
  };
  why: {
    eyebrow: string;
    headingLead: string;
    headingEmphasis: string;
    intro: string;
    features: LubeFeature[];
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
    items: LubeStat[];
  };
  process: {
    eyebrow: string;
    heading: string;
    body: string;
    image: string;
    steps: LubeProcessStep[];
  };
  testimonials: {
    heading: string;
    subtitle: string;
    items: LubeTestimonial[];
  };
  cta: {
    heading: string;
    body: string;
    button: string;
  };
  categories: LubeProductCategory[];
  products: LubeProduct[];
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
  footer: LubeFooterContent;
  aboutPage: {
    header: LubePageHeaderContent;
    storyHeading: string;
    storyParagraphs: string[];
    storyImage: string;
    missionHeading: string;
    mission: string;
    visionHeading: string;
    vision: string;
    valuesHeading: string;
    values: LubeValue[];
  };
  categoriesPage: {
    header: LubePageHeaderContent;
    intro: string;
  };
  galleryPage: {
    header: LubePageHeaderContent;
    intro: string;
    photosLabel: string;
    videosLabel: string;
    noPhotos: string;
    noVideos: string;
  };
  contactPage: {
    header: LubePageHeaderContent;
    formHeading: string;
    formIntro: string;
    officeHeading: string;
    emailLabel: string;
    phoneLabel: string;
  };
}
