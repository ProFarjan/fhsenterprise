// Read-only data access for the public site's News, Gallery, and Events.
// Backed by the same MediaItem / NewsItem / EventItem tables the admin panel
// writes to (see prisma/schema.prisma and src/app/admin/(panel)/media/).
//
// The MR Group main site (News, Gallery, Events) and the Gallery pages for
// the Filling Station and Agro subsidiaries are wired to the database. Other
// subsidiary pages still read their own static data under
// src/data/companies/ — the `getSite*` functions below are already
// site-parameterised so wiring a new one is just calling them with that
// site's key.
import { prisma } from "@/lib/prisma";
import { SiteKey } from "@/generated/prisma/enums";
import { youtubeThumbnailUrl } from "@/lib/youtube";
import { parseProductBenefits, parseProductSpecs } from "@/lib/productJson";
import { getSiteConfig } from "@/data/site";
import type { AppLocale } from "@/i18n/routing";
import type { Company, FaqItem } from "@/types/content";


export type PublicNewsItem = {
  id: number;
  title: string;
  excerpt: string;
  date: string; // ISO — serializable across the Server/Client boundary
  image: string;
  href: string;
};

// All news links to the same list page (matches the previous static data —
// there's no individual news detail page in this project yet).
const NEWS_HREF = "/media/news";

export async function getMrGroupNews(limit?: number): Promise<PublicNewsItem[]> {
  const rows = await prisma.newsItem.findMany({
    where: { site: SiteKey.FHS_ENTERPRISE },
    orderBy: { date: "desc" },
    take: limit,
    select: { title: true, excerpt: true, date: true, id: true },
  });

  return rows.map((row) => ({
    id: row.id,
    title: row.title,
    excerpt: row.excerpt,
    date: row.date.toISOString(),
    image: `/api/news/${row.id}/image`,
    href: NEWS_HREF,
  }));
}

export type PublicGalleryPhoto = {
  id: number;
  caption: string;
  image: string;
};

export type PublicGalleryVideo = {
  id: number;
  title: string;
  thumbnail: string;
  youtubeUrl?: string;
  videoUrl?: string;
  description?: string;
};

export async function getMrGroupGallery(locale: AppLocale = "en"): Promise<{
  photos: PublicGalleryPhoto[];
  videos: PublicGalleryVideo[];
}> {
  return getSiteGallery(SiteKey.FHS_ENTERPRISE, locale);
}

// Same as getMrGroupGallery but parameterised by site — used by the
// subsidiary company sites once they're wired to the admin-managed MediaItem table.
export async function getSiteGallery(
  site: SiteKey,
  locale: AppLocale = "en",
): Promise<{
  photos: PublicGalleryPhoto[];
  videos: PublicGalleryVideo[];
}> {
  const rows = await prisma.mediaItem.findMany({
    where: { site },
    orderBy: { createdAt: "desc" },
    select: { id: true, type: true, title: true, youtubeUrl: true },
  });

  const photos: PublicGalleryPhoto[] = [];
  const videos: PublicGalleryVideo[] = [];

  for (const row of rows) {
    if (row.type === "IMAGE") {
      photos.push({ id: row.id, caption: row.title, image: `/api/media/${row.id}/image` });
    } else if (row.youtubeUrl) {
      const thumbnail = youtubeThumbnailUrl(row.youtubeUrl);
      if (thumbnail) {
        videos.push({ id: row.id, title: row.title, thumbnail, youtubeUrl: row.youtubeUrl });
      }
    }
  }

  // Fallback to static site gallery content when no database items exist
  if (photos.length === 0 && videos.length === 0) {
    const cfg = getSiteConfig(locale).mediaPages;
    const fallbackPhotos: PublicGalleryPhoto[] = (cfg.galleryPhotos || []).map((p, idx) => ({
      id: idx + 1,
      caption: p.caption,
      image: p.image,
    }));
    const fallbackVideos: PublicGalleryVideo[] = (cfg.galleryVideos || []).map((v, idx) => ({
      id: idx + 1,
      title: v.title,
      thumbnail: v.thumbnail,
      videoUrl: v.videoUrl,
      youtubeUrl: v.youtubeUrl,
      description: v.description,
    }));
    return { photos: fallbackPhotos, videos: fallbackVideos };
  }

  return { photos, videos };
}

// FAQ accordion entries for the public About > FAQ page, backed by the
// admin-managed FaqItem table. Falls back to the static site config
// (src/data/site.*.ts) when no admin rows exist yet for the site, so the page
// never renders empty before an admin adds any — mirroring how the company
// hero/banner helpers keep the bespoke static content as a fallback.
export async function getFaqs(
  locale: AppLocale,
  site: SiteKey = SiteKey.FHS_ENTERPRISE,
): Promise<FaqItem[]> {
  try {
    const rows = await prisma.faqItem.findMany({
      where: { site, isPublished: true },
      orderBy: [{ order: "asc" }, { createdAt: "asc" }],
      select: { questionEn: true, questionBn: true, answerEn: true, answerBn: true },
    });

    if (rows.length === 0) {
      return getSiteConfig(locale).aboutPages.faqs;
    }

    return rows.map((row) => ({
      question: (locale === "en" ? row.questionEn : row.questionBn) || row.questionEn || "",
      answer: (locale === "en" ? row.answerEn : row.answerBn) || row.answerEn || "",
    }));
  } catch (error) {
    console.error("Failed to load FAQs from DB, falling back to static config:", error);
    return getSiteConfig(locale).aboutPages.faqs;
  }
}

export type PublicEvent = {
  id: number;
  title: string;
  date: string; // ISO — serializable across the Server/Client boundary
  location: string;
  description: string;
  image: string;
};

export async function getMrGroupEvents(): Promise<PublicEvent[]> {
  return getSiteEvents(SiteKey.FHS_ENTERPRISE);
}

// Same as getMrGroupEvents but parameterised by site — used by subsidiary
// company sites once they get their own events page wired to EventItem.
export async function getSiteEvents(site: SiteKey): Promise<PublicEvent[]> {
  const rows = await prisma.eventItem.findMany({
    where: { site },
    orderBy: { date: "desc" },
    select: { id: true, title: true, date: true, location: true, description: true },
  });

  return rows.map((row) => ({
    id: row.id,
    title: row.title,
    date: row.date.toISOString(),
    location: row.location,
    description: row.description,
    image: `/api/events/${row.id}/image`,
  }));
}

// Static banner fallbacks, keyed by subdomain — used until an admin uploads a
// banner for that company at /admin/companies (a freshly seeded Company row
// has no image bytes yet). Matches the images the site shipped with before
// Companies moved to the database (see src/data/site.en.ts).
const BANNER_FALLBACK: Record<string, string> = {
  agro: "/images/companies/agro-banner.png",
  "filling-station": "/images/companies/filling-station.jpg",
  "agro-medicine": "/images/companies/Chemical.png",
  feed: "/images/companies/feed.jpg",
  "auto-rice-mill": "/images/companies/agro-banner.png",
  "vehicle-solutions": "/images/companies/mr-lube-banner.svg",
  "vehiclesolutions.fhsenterprise.com": "/images/companies/mr-lube-banner.svg",
  "daily-bazar.fhsenterprise.com": "/images/companies/feed.jpg",
  "dailybazar.fhsenterprise.com": "/images/companies/feed.jpg",
  lube: "/images/companies/mr-lube-banner.svg",
  mahin: "/images/companies/mahin-banner.svg",
  rahim: "/images/companies/rahim-banner.svg",
};
const LOGO_FALLBACK = "/logos/fhs_logo.png";

const COMPANY_LOGO_FALLBACK: Record<string, string> = {
  "auto-rice-mill": "/logos/rice-mill.png",
  "vehicle-solutions": "/logos/vehicle_solutions.svg",
  "vehiclesolutions.fhsenterprise.com": "/logos/vehicle_solutions.svg",
  "daily-bazar.fhsenterprise.com": "/logos/daily_bazar.svg",
  "dailybazar.fhsenterprise.com": "/logos/daily_bazar.svg",
};

// Published subsidiary companies for the parent site's company cards (see
// CompanyExplorer and the homepage Companies carousel). Backed by the
// Company table admins edit at /admin/companies.
export async function getCompanies(locale: AppLocale): Promise<Company[]> {
  const rows = await prisma.company.findMany({
    where: { isPublished: true },
    orderBy: { order: "asc" },
    select: {
      id: true,
      subdomain: true,
      nameEn: true,
      nameBn: true,
      sectorEn: true,
      sectorBn: true,
      descriptionEn: true,
      descriptionBn: true,
      logoMimeType: true,
      bannerMimeType: true,
      updatedAt: true,
    },
  });

  return rows.map((row) => {
    // A Company row is edited in place, so its logo/banner URL is otherwise
    // stable across a re-upload. `next/image` (and the browser) cache the
    // optimized result by URL, so without a changing query param a re-upload
    // keeps serving the old image. Version the URL by `updatedAt` to bust
    // both caches whenever the row (and thus its images) changes.
    const v = row.updatedAt.getTime();
    
    const fallbackLogo = COMPANY_LOGO_FALLBACK[row.subdomain] ?? LOGO_FALLBACK;
    
    return {
      name: locale === "en" ? row.nameEn : row.nameBn,
      sector: locale === "en" ? row.sectorEn : row.sectorBn,
      description: locale === "en" ? row.descriptionEn : row.descriptionBn,
      logo: row.logoMimeType ? `/api/companies/${row.id}/logo?v=${v}` : fallbackLogo,
      image: row.bannerMimeType
        ? `/api/companies/${row.id}/banner?v=${v}`
        : (BANNER_FALLBACK[row.subdomain] ?? fallbackLogo),
      subdomain: row.subdomain,
    };
  });
}

export type CompanyHeroSlide = {
  id: number;
  image: string;
  headline: string;
  tagline: string;
};

// A subsidiary's admin-managed hero gallery (CompanyHeroImage), for its own
// subdomain site — e.g. agro.mrgroup.com reading AGRO's slides. Returns []
// when the company has no hero images yet, which the caller should treat as
// "keep rendering the existing bespoke static hero" rather than an empty
// state — see each companies/<subdomain>/page.tsx.
export async function getCompanyHeroSlides(
  site: SiteKey,
  locale: AppLocale,
): Promise<CompanyHeroSlide[]> {
  const company = await prisma.company.findUnique({
    where: { site },
    select: {
      heroImages: {
        orderBy: { order: "asc" },
        select: { id: true, headlineEn: true, headlineBn: true, taglineEn: true, taglineBn: true },
      },
    },
  });
  if (!company) return [];

  return company.heroImages.map((h) => ({
    id: h.id,
    image: `/api/companies/hero-images/${h.id}`,
    headline: (locale === "en" ? h.headlineEn : h.headlineBn) ?? "",
    tagline: (locale === "en" ? h.taglineEn : h.taglineBn) ?? "",
  }));
}

// A subsidiary's admin-uploaded logo (Company.logoData), for its own
// subdomain site's navbar. Returns null when no logo has been uploaded yet —
// unlike getCompanies() (which falls back to a placeholder image for the
// parent site's cards), the navbar caller should treat null as "keep
// rendering the bespoke text/icon brand mark", not a broken image.
export async function getCompanyLogo(site: SiteKey): Promise<string | null> {
  const company = await prisma.company.findUnique({
    where: { site },
    select: { id: true, logoMimeType: true, updatedAt: true },
  });
  if (!company?.logoMimeType) return null;
  // Version by `updatedAt` so a re-upload (which keeps the same id/URL) busts
  // the browser/`next/image` cache — see the note in getCompanies above.
  return `/api/companies/${company.id}/logo?v=${company.updatedAt.getTime()}`;
}

// Product rows for the three subsidiaries whose bespoke product type
// (AgroProduct / FeedProduct / AgritechProduct — see src/types/{agro,feed,
// agritech}.ts) already has exactly this shape. Returned objects are
// structurally assignable to any of the three, so each caller just spreads
// this onto its static `products` array — no per-site mapping needed.
//
// Product has no bn/en fields (see prisma/schema.prisma) — admin-added
// products render with the same text on both locales, unlike the fully
// bilingual static catalogue.
export type SimpleDbProduct = {
  slug: string;
  category: string;
  name: string;
  tagline: string;
  image: string;
  description: string;
  specs: { label: string; value: string }[];
  benefits: string[];
};

export async function getSimpleDbProducts(site: SiteKey): Promise<SimpleDbProduct[]> {
  const rows = await prisma.product.findMany({
    where: { site, isPublished: true },
    orderBy: { createdAt: "desc" },
    select: {
      id: true,
      slug: true,
      category: true,
      name: true,
      tagline: true,
      description: true,
      benefits: true,
      specs: true,
    },
  });

  return rows.map((row) => ({
    slug: row.slug,
    category: row.category,
    name: row.name,
    tagline: row.tagline,
    image: `/api/products/${row.id}/image`,
    description: row.description,
    specs: parseProductSpecs(row.specs),
    benefits: parseProductBenefits(row.benefits),
  }));
}

