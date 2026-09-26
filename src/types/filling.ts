import type { NavItem } from "@/types/content";

// Bespoke content model for the MR Filling Station subdomain
// (src/app/[locale]/companies/filling-station). Richer than the generic
// CompanySiteContent used by the other, not-yet-designed company sites — it
// backs a Soltera-inspired home page plus About, Services and Notice pages.

export type FillingIconName =
  | "fuel"
  | "clock"
  | "shield"
  | "spark"
  | "wash"
  | "store"
  | "oil"
  | "truck"
  | "gauge"
  | "leaf"
  | "card"
  | "pin";

export interface FillingStat {
  value: string;
  label: string;
}

export interface FillingFeature {
  icon: FillingIconName;
  title: string;
  body: string;
}

export interface FillingService {
  icon: FillingIconName;
  name: string;
  description: string;
  image: string;
}

export interface FillingStep {
  title: string;
  body: string;
}

export interface FillingNoticeItem {
  category: string;
  date: string;
  title: string;
  excerpt: string;
  image: string;
}

export interface FillingPageHeader {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
}

export interface FillingValue {
  title: string;
  body: string;
}

export interface FillingHighlightCard {
  value: string;
  label: string;
  description: string;
  image: string;
}

export interface FillingFooterContent {
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

export interface FillingContent {
  name: string;
  tagline: string;
  nav: NavItem[];
  getInTouch: string;
  hero: {
    brandWord: string;
    headingLead: string;
    headingEmphasis: string;
    subtext: string;
    ctaPrimary: string;
    ctaSecondary: string;
    image: string;
    stats: FillingStat[];
  };
  highlights: {
    eyebrow: string;
    heading: string;
    body: string;
    cta: string;
    cards: FillingHighlightCard[];
  };
  services: {
    eyebrow: string;
    heading: string;
    body: string;
    items: FillingService[];
  };
  feature: {
    eyebrow: string;
    heading: string;
    body: string;
    image: string;
    caption: string;
    features: FillingFeature[];
  };
  process: {
    eyebrow: string;
    heading: string;
    body: string;
    image: string;
    steps: FillingStep[];
  };
  notices: {
    eyebrow: string;
    heading: string;
    body: string;
    viewMore: string;
    items: FillingNoticeItem[];
  };
  cta: {
    heading: string;
    body: string;
    button: string;
  };
  footer: FillingFooterContent;
  aboutPage: {
    header: FillingPageHeader;
    storyHeading: string;
    storyParagraphs: string[];
    storyImage: string;
    missionHeading: string;
    mission: string;
    visionHeading: string;
    vision: string;
    valuesHeading: string;
    values: FillingValue[];
    stats: FillingStat[];
  };
  servicesPage: {
    header: FillingPageHeader;
    intro: string;
  };
  noticePage: {
    header: FillingPageHeader;
    intro: string;
  };
  galleryPage: {
    header: FillingPageHeader;
    intro: string;
    photosLabel: string;
    videosLabel: string;
    noPhotos: string;
    noVideos: string;
  };
}
