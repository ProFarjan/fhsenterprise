import type { Metadata } from "next";

export const SITE_URL = "https://fhsenterprise.com";
export const SITE_NAME = "FHS Enterprise";

export interface PageMetadataInput {
  locale: string;
  path: string; // e.g. "/about", "/about/history"
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  type?: "website" | "article" | "profile";
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
  image = "/logos/fhs_logo.png",
  type = "website",
}: PageMetadataInput): Metadata {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  const canonicalUrl = `${SITE_URL}/${locale}${cleanPath === "/" ? "" : cleanPath}`;
  const enUrl = `${SITE_URL}/en${cleanPath === "/" ? "" : cleanPath}`;
  const bnUrl = `${SITE_URL}/bn${cleanPath === "/" ? "" : cleanPath}`;

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
    : `${SITE_URL}${image.startsWith("/") ? image : `/${image}`}`;

  return {
    title,
    description,
    keywords: fullKeywords,
    authors: [{ name: "FHS Enterprise" }],
    creator: "FHS Enterprise",
    publisher: "FHS Enterprise",
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: enUrl,
        bn: bnUrl,
        "x-default": enUrl,
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
          width: 1200,
          height: 630,
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
 * Organization Schema (JSON-LD)
 */
export function getOrganizationJsonLd(locale: string = "en") {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: locale === "bn" ? "এফএইচএস এন্টারপ্রাইজ" : "FHS Enterprise",
    alternateName: "FHS Group",
    url: SITE_URL,
    logo: `${SITE_URL}/logos/fhs_logo.png`,
    description:
      locale === "bn"
        ? "এফএইচএস এন্টারপ্রাইজ ময়মনসিংহের ফুলবাড়িয়ায় অবস্থিত একটি অগ্রগামী গ্রুপ অব কোম্পানিজ। আমাদের প্রধান অঙ্গপ্রতিষ্ঠান: মেসার্স বাংলাদেশ অটো রাইস মিল, ভেহিকেল সলিউশনস এবং ডেইলি বাজার।"
        : "FHS Enterprise is a progressive, diversified conglomerate based in Fulbariya, Mymensingh, Bangladesh operating Bangladesh Auto Rice Mill, Vehicle Solutions, and Daily Bazar.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Main Road",
      addressLocality: "Fulbariya",
      addressRegion: "Mymensingh",
      addressCountry: "BD",
    },
    founder: {
      "@type": "Person",
      name: "Fakhrul Hasan Suton",
      jobTitle: "Proprietor",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+880123456789",
      contactType: "customer service",
      areaServed: "BD",
      availableLanguage: ["English", "Bengali"],
    },
    sameAs: [
      "https://www.facebook.com",
    ],
  };
}

/**
 * Breadcrumb Schema (JSON-LD)
 */
export function getBreadcrumbJsonLd(
  items: { name: string; path: string }[],
  locale: string = "en"
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}/${locale}${item.path === "/" ? "" : item.path}`,
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
