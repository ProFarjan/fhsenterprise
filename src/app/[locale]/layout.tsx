import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import { NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Geist, Geist_Mono, Noto_Sans_Bengali } from "next/font/google";
import { getSiteConfig } from "@/data/site";
import { routing, type AppLocale } from "@/i18n/routing";
import { SITE_DESCRIPTION, buildPageMetadata } from "@/lib/seo";
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
  const description = locale === "bn" ? SITE_DESCRIPTION.bn : SITE_DESCRIPTION.en;
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

  // Site-wide defaults; every page that exports its own generateMetadata
  // replaces these via buildPageMetadata.
  return buildPageMetadata({
    locale,
    path: "/",
    title: `${site.groupName} | ${site.tagline}`,
    description,
    keywords,
  });
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
