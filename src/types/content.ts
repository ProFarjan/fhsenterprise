// Shared TypeScript types for the landing page's static content.
// These shapes intentionally mirror what a future MySQL/Prisma-backed
// admin panel would return, so swapping `src/data/site.ts` for real
// database queries later is a localized change (see src/lib/prisma.ts).

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface HeroSlide {
  title: string;
  subtitle: string;
  videoSrc: string;
}

export interface AboutContent {
  title: string;
  description: string;
  points: string[];
}

export interface Company {
  name: string;
  sector: string;
  description: string;
  logo: string;
  image: string;
  /** Matches the folder under src/app/[locale]/companies/ and the subdomain host. */
  subdomain: string;
}

export type StatIcon = "calendar" | "building" | "users" | "map-pin";

export interface Stat {
  label: string;
  value: string;
  icon: StatIcon;
}

export type ProductCategoryIcon =
  | "grain"
  | "flask"
  | "cog"
  | "droplet"
  | "flame"
  | "snowflake"
  | "leaf"
  | "fuel";

export interface ProductCategory {
  name: string;
  // The subsidiary that actually produces or supplies this category, so the
  // card can credit it and link through to its site.
  company: string;
  subdomain: string;
  items: string[];
  icon: ProductCategoryIcon;
}

export interface NewsItem {
  title: string;
  excerpt: string;
  date: string;
  image: string;
  href: string;
}

export interface HistoryContent {
  title: string;
  paragraphs: string[];
}

export interface Milestone {
  year: string;
  title: string;
  description: string;
}

export interface MissionVisionContent {
  mission: string;
  vision: string;
  values: string[];
}

export interface Facility {
  name: string;
  location: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FounderContent {
  name: string;
  title: string;
  image: string;
  quote: string;
  bio: string[];
  achievements: { label: string; value: string }[];
}

export interface AboutPagesContent {
  history: HistoryContent;
  founder: FounderContent;
  missionVision: MissionVisionContent;
  milestones: Milestone[];
  facilities: Facility[];
  faqs: FaqItem[];
}

export interface MediaEvent {
  title: string;
  date: string;
  location: string;
  description: string;
  image: string;
}

export interface GalleryPhoto {
  caption: string;
  image: string;
  height: number;
}

export interface GalleryVideo {
  title: string;
  thumbnail: string;
}

export interface MediaPagesContent {
  events: MediaEvent[];
  galleryPhotos: GalleryPhoto[];
  galleryVideos: GalleryVideo[];
}

export type SustainabilityIcon = "heart" | "book" | "users" | "leaf";

export interface SustainabilityInitiative {
  title: string;
  description: string;
}

export interface SustainabilityStat {
  label: string;
  value: string;
}

export interface SustainabilityPillar {
  slug: string;
  icon: SustainabilityIcon;
  title: string;
  summary: string;
  description: string;
  image: string;
  stats: SustainabilityStat[];
  initiatives: SustainabilityInitiative[];
}

export interface SustainabilityPagesContent {
  overviewDescription: string;
  pillars: SustainabilityPillar[];
}

export interface ContactContent {
  title: string;
  description: string;
  address: string;
  email: string;
  phone: string;
}

export interface SiteConfig {
  groupName: string;
  tagline: string;
  nav: NavItem[];
  hero: HeroSlide[];
  about: AboutContent;
  aboutPages: AboutPagesContent;
  companies: Company[];
  productCategories: ProductCategory[];
  stats: Stat[];
  news: NewsItem[];
  mediaPages: MediaPagesContent;
  sustainabilityPages: SustainabilityPagesContent;
  contact: ContactContent;
  socials: SocialLink[];
}
