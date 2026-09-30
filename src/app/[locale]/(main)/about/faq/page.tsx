import type { Metadata } from "next";
import { getLocale } from "next-intl/server";
import { getFaqs } from "@/lib/publicContent";
import { buildPageMetadata, getFaqJsonLd } from "@/lib/seo";
import Breadcrumbs from "@/components/navigation/Breadcrumbs";
import FaqAccordion from "@/components/sections/about/FaqAccordion";
import type { AppLocale } from "@/i18n/routing";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata({
    locale,
    path: "/about/faq",
    title:
      locale === "bn"
        ? "সচরাচর জিজ্ঞাসা (FAQ) | এফএইচএস এন্টারপ্রাইজ"
        : "Frequently Asked Questions (FAQ) | FHS Enterprise",
    description:
      locale === "bn"
        ? "এফএইচএস এন্টারপ্রাইজ, মেসার্স বাংলাদেশ অটো রাইস মিল, ভেহিকেল সলিউশনস ও ডেইলি বাজার সম্পর্কিত সাধারণ প্রশ্ন ও উত্তর।"
        : "Answers to common questions about FHS Enterprise, M/s. Bangladesh Auto Rice Mill, Vehicle Solutions, and Daily Bazar in Fulbariya.",
    keywords: [
      "FHS Enterprise FAQ",
      "Bangladesh Auto Rice Mill FAQ",
      "Vehicle Solutions questions",
      "Daily Bazar questions",
    ],
  });
}

// Reads the admin-managed FAQ list (FaqItem table) on the server and hands it
// to the client accordion for the open/closed UI. getFaqs falls back to the
// static site config when no admin rows exist yet, so the page is never empty.
export default async function FaqPage() {
  const locale = (await getLocale()) as AppLocale;
  const faqs = await getFaqs(locale);
  const faqJsonLd = getFaqJsonLd(faqs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="mx-auto max-w-3xl px-6 pt-6 lg:px-8">
        <Breadcrumbs
          locale={locale}
          items={[
            { label: locale === "bn" ? "হোম" : "Home", href: "/" },
            { label: locale === "bn" ? "আমাদের সম্পর্কে" : "About Us", href: "/about" },
            { label: locale === "bn" ? "সচরাচর জিজ্ঞাসা" : "FAQ" },
          ]}
        />
      </div>
      <FaqAccordion faqs={faqs} />
    </>
  );
}
