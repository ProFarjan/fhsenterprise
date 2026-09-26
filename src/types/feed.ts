import type { NavItem } from "@/types/content";

// Bespoke content model for the MR Feed subdomain
// (src/app/[locale]/companies/feed). Richer than the generic
// CompanySiteContent — a full premium multi-page animal-feed brand site,
// modelled on the MR Agro content shape but with a hero slider and a
// Categories-driven product structure (poultry / cattle / fish).

export type FeedIconName =
  | "flask"
  | "shield"
  | "leaf"
  | "truck"
  | "award"
  | "mill"
  | "growth"
  | "clock"
  | "poultry"
  | "cattle"
  | "fish";

export interface FeedHeroSlide {
  image: string;
  eyebrow: string;
  headingLead: string;
  headingEmphasis: string;
  headingTail: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
}

export interface FeedFeature {
  icon: FeedIconName;
  title: string;
  body: string;
}

export interface FeedStat {
  value: string;
  label: string;
}

export interface FeedProcessStep {
  title: string;
  body: string;
}

export interface FeedTestimonial {
  quote: string;
  name: string;
  role: string;
}

export interface FeedProductCategory {
  slug: string;
  name: string;
  icon: FeedIconName;
  tagline: string;
  description: string;
  image: string;
}

export interface FeedProductSpec {
  label: string;
  value: string;
}

export interface FeedProduct {
  slug: string;
  category: string;
  name: string;
  tagline: string;
  image: string;
  description: string;
  specs: FeedProductSpec[];
  benefits: string[];
}

export interface FeedFooterContent {
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

export interface FeedPageHeaderContent {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
}

export interface FeedValue {
  title: string;
  body: string;
}

export interface FeedContent {
  name: string;
  tagline: string;
  nav: NavItem[];
  hero: {
    slides: FeedHeroSlide[];
  };
  why: {
    eyebrow: string;
    headingLead: string;
    headingEmphasis: string;
    intro: string;
    features: FeedFeature[];
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
    items: FeedStat[];
  };
  process: {
    eyebrow: string;
    heading: string;
    body: string;
    image: string;
    steps: FeedProcessStep[];
  };
  testimonials: {
    heading: string;
    subtitle: string;
    items: FeedTestimonial[];
  };
  cta: {
    heading: string;
    body: string;
    button: string;
  };
  categories: FeedProductCategory[];
  products: FeedProduct[];
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
  footer: FeedFooterContent;
  aboutPage: {
    header: FeedPageHeaderContent;
    storyHeading: string;
    storyParagraphs: string[];
    storyImage: string;
    missionHeading: string;
    mission: string;
    visionHeading: string;
    vision: string;
    valuesHeading: string;
    values: FeedValue[];
  };
  categoriesPage: {
    header: FeedPageHeaderContent;
    intro: string;
  };
  galleryPage: {
    header: FeedPageHeaderContent;
    intro: string;
    photosLabel: string;
    videosLabel: string;
    noPhotos: string;
    noVideos: string;
  };
  contactPage: {
    header: FeedPageHeaderContent;
    formHeading: string;
    formIntro: string;
    officeHeading: string;
    emailLabel: string;
    phoneLabel: string;
  };
}
