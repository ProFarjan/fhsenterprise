import type { NavItem } from "@/types/content";

// Bespoke content model for the MR Agri Technology subdomain
// (src/app/[locale]/companies/tech). Modelled directly on the MR Feed
// content shape (src/types/feed.ts) — a hero slider plus a
// Categories-driven product structure — but for farm machinery, irrigation,
// hand tools, and smart-farming equipment instead of animal feed.

export type AgritechIconName =
  | "engine"
  | "shield"
  | "wrench"
  | "truck"
  | "sensor"
  | "leaf"
  | "clock"
  | "award"
  | "tractor"
  | "irrigation"
  | "tools"
  | "drone";

export interface AgritechHeroSlide {
  image: string;
  eyebrow: string;
  headingLead: string;
  headingEmphasis: string;
  headingTail: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
}

export interface AgritechFeature {
  icon: AgritechIconName;
  title: string;
  body: string;
}

export interface AgritechStat {
  value: string;
  label: string;
}

export interface AgritechProcessStep {
  title: string;
  body: string;
}

export interface AgritechTestimonial {
  quote: string;
  name: string;
  role: string;
}

export interface AgritechProductCategory {
  slug: string;
  name: string;
  icon: AgritechIconName;
  tagline: string;
  description: string;
  image: string;
}

export interface AgritechProductSpec {
  label: string;
  value: string;
}

export interface AgritechProduct {
  slug: string;
  category: string;
  name: string;
  tagline: string;
  image: string;
  description: string;
  specs: AgritechProductSpec[];
  benefits: string[];
}

export interface AgritechFooterContent {
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

export interface AgritechPageHeaderContent {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
}

export interface AgritechValue {
  title: string;
  body: string;
}

export interface AgritechContent {
  name: string;
  tagline: string;
  nav: NavItem[];
  hero: {
    slides: AgritechHeroSlide[];
  };
  why: {
    eyebrow: string;
    headingLead: string;
    headingEmphasis: string;
    intro: string;
    features: AgritechFeature[];
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
    items: AgritechStat[];
  };
  process: {
    eyebrow: string;
    heading: string;
    body: string;
    image: string;
    steps: AgritechProcessStep[];
  };
  testimonials: {
    heading: string;
    subtitle: string;
    items: AgritechTestimonial[];
  };
  cta: {
    heading: string;
    body: string;
    button: string;
  };
  categories: AgritechProductCategory[];
  products: AgritechProduct[];
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
  footer: AgritechFooterContent;
  aboutPage: {
    header: AgritechPageHeaderContent;
    storyHeading: string;
    storyParagraphs: string[];
    storyImage: string;
    missionHeading: string;
    mission: string;
    visionHeading: string;
    vision: string;
    valuesHeading: string;
    values: AgritechValue[];
  };
  categoriesPage: {
    header: AgritechPageHeaderContent;
    intro: string;
  };
  galleryPage: {
    header: AgritechPageHeaderContent;
    intro: string;
    photosLabel: string;
    videosLabel: string;
    noPhotos: string;
    noVideos: string;
  };
  contactPage: {
    header: AgritechPageHeaderContent;
    formHeading: string;
    formIntro: string;
    officeHeading: string;
    emailLabel: string;
    phoneLabel: string;
  };
}
