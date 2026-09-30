import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import { NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Geist, Geist_Mono, Noto_Sans_Bengali } from "next/font/google";
import { getSiteConfig } from "@/data/site";
import { routing, type AppLocale } from "@/i18n/routing";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoSansBengali = Noto_Sans_Bengali({
  variable: "--font-noto-sans-bengali",
  subsets: ["bengali"],
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const site = getSiteConfig(locale as AppLocale);
  const siteUrl = "https://fhsenterprise.com";
  const title = `${site.groupName} | ${site.tagline}`;
  const description =
    locale === "bn"
      ? "এফএইচএস এন্টারপ্রাইজ — ময়মনসিংহের ফুলবাড়িয়ায় অবস্থিত একটি বৈচিত্র্যময় ব্যবসা প্রতিষ্ঠান। প্রিমিয়াম চাল উৎপাদন, গাড়ির যন্ত্রাংশ ও সেবা, এবং ডেইলি বাজার অনলাইন শপিং। মেসার্স বাংলাদেশ অটো রাইস মিল, ভেহিকেল সলিউশনস এবং ডেইলি বাজার আমাদের সিস্টার কনসার্ন।"
      : "FHS Enterprise — A diversified business conglomerate in Fulbariya, Mymensingh, Bangladesh. Premium rice milling (M/s. Bangladesh Auto Rice Mill), automotive parts & services (Vehicle Solutions), and online grocery shopping (Daily Bazar). Over 10 years of trusted excellence.";
  const keywords =
    locale === "bn"
      ? [
          "এফএইচএস এন্টারপ্রাইজ",
          "বাংলাদেশ অটো রাইস মিল",
          "ভেহিকেল সলিউশনস",
          "ডেইলি বাজার",
          "ময়মনসিংহ",
          "ফুলবাড়িয়া",
          "চাল মিল",
          "গাড়ির যন্ত্রাংশ",
          "অনলাইন বাজার",
          "প্রিমিয়াম চাল",
        ]
      : [
          "FHS Enterprise",
          "Bangladesh Auto Rice Mill",
          "Vehicle Solutions",
          "Daily Bazar",
          "Mymensingh",
          "Fulbariya",
          "rice mill Bangladesh",
          "auto parts Mymensingh",
          "online grocery Bangladesh",
          "premium rice",
          "vehicle repair",
          "lubricant",
          "tyre shop",
          "Fakhrul Hasan Suton",
          "fhsenterprise.com",
        ];

  return {
    title,
    description,
    keywords,
    authors: [{ name: "FHS Enterprise" }],
    creator: "FHS Enterprise",
    publisher: "FHS Enterprise",
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: `${siteUrl}/${locale}`,
      languages: {
        en: `${siteUrl}/en`,
        bn: `${siteUrl}/bn`,
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "bn" ? "bn_BD" : "en_US",
      url: `${siteUrl}/${locale}`,
      siteName: "FHS Enterprise",
      title,
      description,
      images: [
        {
          url: `${siteUrl}/logos/fhs_logo.png`,
          width: 1200,
          height: 630,
          alt: "FHS Enterprise — Building industries. Empowering communities.",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${siteUrl}/logos/fhs_logo.png`],
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
      "geo.placename": "Fulbariya, Mymensingh",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);

  return (
    <html
      lang={locale}
      className={`${geistSans.variable} ${geistMono.variable} ${notoSansBengali.variable} h-full antialiased`}
    >
      <body
        className={`min-h-full flex flex-col ${locale === "bn" ? "font-[family-name:var(--font-noto-sans-bengali)]" : ""}`}
        suppressHydrationWarning
      >
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
