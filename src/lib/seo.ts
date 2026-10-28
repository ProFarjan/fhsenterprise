import type { Metadata } from "next";
import { getSiteConfig } from "@/data/site";
import { ORGANIZATION } from "@/data/organization";
import { routing } from "@/i18n/routing";

export const SITE_URL = "https://fhsenterprise.com";
export const SITE_NAME = "FHS Enterprise";

// 1200x630 branded card (public/images/og-default.png). Declared with its REAL
// size: social platforms use width/height to decide how to crop the preview.
export const DEFAULT_OG_IMAGE = "/images/og-default.png";

// The default locale is also the "x-default" alternate: where a visitor whose
// language we don't serve is sent. (It used to point at /en while the site's
// default — and where "/" redirects — is /bn.)
const DEFAULT_LOCALE = routing.defaultLocale;

export const SITE_DESCRIPTION = {
  bn: "এফএইচএস এন্টারপ্রাইজ — ময়মনসিংহের ফুলবাড়িয়ায় অবস্থিত একটি বৈচিত্র্যময় ব্যবসা প্রতিষ্ঠান। প্রিমিয়াম চাল উৎপাদন, গাড়ির যন্ত্রাংশ ও সেবা, এবং ডেইলি বাজার অনলাইন শপিং। মেসার্স বাংলাদেশ অটো রাইস মিল, ভেহিকেল সলিউশনস এবং ডেইলি বাজার আমাদের সিস্টার কনসার্ন।",
  en: "FHS Enterprise — A diversified business conglomerate in Fulbariya, Mymensingh, Bangladesh. Premium rice milling (M/s. Bangladesh Auto Rice Mill), automotive parts & services (Vehicle Solutions), and online grocery shopping (Daily Bazar).",
} as const;

// Public URL of a subsidiary: an internal one is "<subdomain>.<root domain>", an
// external one already stores its full hostname.
export function subsidiaryUrl(subdomain: string): string {
  if (subdomain.startsWith("http://") || subdomain.startsWith("https://")) return subdomain;
  if (subdomain.includes(".")) return `https://${subdomain}`;
  return `https://${subdomain}.${new URL(SITE_URL).hostname}`;
}

export interface PageMetadataInput {
  locale: string;
  path: string; // e.g. "/about", "/about/history"
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  type?: "website" | "article" | "profile";
  /** Origin to build canonical/alternate URLs on — a subsidiary's own subdomain. Defaults to SITE_URL. */
  siteUrl?: string;
}

/**
 * Builds standard, SEO-rich Next.js Metadata with canonical, hreflang alternates,
 * OpenGraph, Twitter Cards, robots, and geo tags.
 */
export function buildPageMetadata({
  locale,
  path,
  title,
  description,
  keywords = [],
  image = DEFAULT_OG_IMAGE,
  type = "website",
  siteUrl = SITE_URL,
}: PageMetadataInput): Metadata {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  const suffix = cleanPath === "/" ? "" : cleanPath;
  const canonicalUrl = `${siteUrl}/${locale}${suffix}`;
  const enUrl = `${siteUrl}/en${suffix}`;
  const bnUrl = `${siteUrl}/bn${suffix}`;

  const defaultKeywords =
    locale === "bn"
      ? [
          "এফএইচএস এন্টারপ্রাইজ",
          "বাংলাদেশ অটো রাইস মিল",
          "ভেহিকেল সলিউশনস",
          "ডেইলি বাজার",
          "ফুলবাড়িয়া",
          "ময়মনসিংহ",
          "চাল প্রক্রিয়াকরণ",
          "গাড়ির যন্ত্রাংশ ও সার্ভিসিং",
          "সুপার শপ",
        ]
      : [
          "FHS Enterprise",
          "Bangladesh Auto Rice Mill",
          "Vehicle Solutions",
          "Daily Bazar",
          "Fulbariya",
          "Mymensingh",
          "rice milling Bangladesh",
          "automotive repair Mymensingh",
          "super shop Fulbariya",
          "Fakhrul Hasan Suton",
        ];

  const fullKeywords = Array.from(new Set([...keywords, ...defaultKeywords]));

  // Ensure absolute image URL for OpenGraph & Twitter
  const imageUrl = image.startsWith("http")
    ? image
    : `${siteUrl}${image.startsWith("/") ? image : `/${image}`}`;
  // Only the default card has known dimensions; for any other image leave them
  // out rather than declare a size that's wrong.
  const imageSize = image === DEFAULT_OG_IMAGE ? { width: 1200, height: 630 } : {};

  return {
    title,
    description,
    keywords: fullKeywords,
    authors: [{ name: "FHS Enterprise" }],
    creator: "FHS Enterprise",
    publisher: "FHS Enterprise",
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: enUrl,
        bn: bnUrl,
        "x-default": DEFAULT_LOCALE === "bn" ? bnUrl : enUrl,
      },
    },
    openGraph: {
      type,
      locale: locale === "bn" ? "bn_BD" : "en_US",
      url: canonicalUrl,
      siteName: SITE_NAME,
      title,
      description,
      images: [
        {
          url: imageUrl,
          ...imageSize,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    other: {
      "geo.region": "BD-35",
      "geo.placename": "Fulbariya, Mymensingh, Bangladesh",
    },
  };
}

/**
 * Organization Schema (JSON-LD) — the one generator, used on the homepage.
 *
 * Built from src/data/organization.ts and the site config, and it only emits a
 * property when we actually HAVE a verified value: no telephone, postal code,
 * coordinates, founding date or social profiles until they are provided. Search
 * engines treat structured data as claims about the business, so a placeholder
 * here is worse than a gap.
 */
export function getOrganizationJsonLd(locale: string = "en") {
  const lang = locale === "bn" ? "bn" : "en";
  const config = getSiteConfig(lang);
  const o = ORGANIZATION;

  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    "@id": `${SITE_URL}/#organization`,
    name: config.groupName,
    alternateName: getSiteConfig(lang === "bn" ? "en" : "bn").groupName,
    url: SITE_URL,
    logo: `${SITE_URL}/logos/fhs_logo.png`,
    image: `${SITE_URL}/images/gallery/fhs_history.jpg`,
    description: SITE_DESCRIPTION[lang],
    email: o.email,
    ...(o.phone && { telephone: o.phone }),
    address: {
      "@type": "PostalAddress",
      ...(o.streetAddress && { streetAddress: o.streetAddress }),
      addressLocality: o.locality,
      addressRegion: o.region,
      ...(o.postalCode && { postalCode: o.postalCode }),
      addressCountry: o.country,
    },
    ...(o.geo && {
      geo: { "@type": "GeoCoordinates", latitude: o.geo.latitude, longitude: o.geo.longitude },
    }),
    founder: { "@type": "Person", name: o.founder.name, jobTitle: o.founder.jobTitle },
    ...(o.foundingYear && { foundingDate: o.foundingYear }),
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: o.email,
      ...(o.phone && { telephone: o.phone }),
      availableLanguage: ["English", "Bengali"],
      areaServed: o.country,
    },
    ...(config.socials.length > 0 && { sameAs: config.socials.map((s) => s.href) }),
    subOrganization: config.companies.map((company) => ({
      "@type": "Organization",
      name: company.name,
      description: company.description,
      url: subsidiaryUrl(company.subdomain),
    })),
  };
}

/**
 * Breadcrumb Schema (JSON-LD)
 *
 * The last crumb is the current page and usually has no path; per Google's
 * guidelines it is then listed by name only (no `item`), instead of pointing at
 * the homepage as it used to.
 */
export function getBreadcrumbJsonLd(
  items: { name: string; path?: string }[],
  locale: string = "en"
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      ...(item.path !== undefined && {
        item: `${SITE_URL}/${locale}${item.path === "/" ? "" : item.path}`,
      }),
    })),
  };
}

/**
 * FAQ Schema (JSON-LD) for rich search snippet accordions
 */
export function getFaqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/**
 * Person / Leadership Schema (JSON-LD)
 */
export function getPersonJsonLd({
  name,
  jobTitle,
  image,
  worksFor,
  description,
}: {
  name: string;
  jobTitle: string;
  image: string;
  worksFor: string;
  description: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name,
    jobTitle,
    image: image.startsWith("http") ? image : `${SITE_URL}${image}`,
    worksFor: {
      "@type": "Organization",
      name: worksFor,
    },
    description,
  };
}
