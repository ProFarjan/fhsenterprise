import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Companies from "@/components/sections/Companies";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ProductCategories from "@/components/sections/ProductCategories";
import Stats from "@/components/sections/Stats";
import VideoShowcase from "@/components/sections/VideoShowcase";
import Testimonials from "@/components/sections/Testimonials";
import CallToAction from "@/components/sections/CallToAction";
import LatestNews from "@/components/sections/LatestNews";
import Contact from "@/components/sections/Contact";
import { getCompanies } from "@/lib/publicContent";
import type { AppLocale } from "@/i18n/routing";
import { jsonLdString } from "@/lib/jsonLd";
import { getOrganizationJsonLd } from "@/lib/seo";
import { SHOW_UNVERIFIED_SECTIONS } from "@/data/organization";
import { setRequestLocale } from "next-intl/server";

// Prerendered; refreshed at most every 5 minutes (admin edits revalidate immediately).
export const revalidate = 300;

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const companies = await getCompanies(locale as AppLocale);

  const jsonLd = getOrganizationJsonLd(locale);

  return (
    <div className="flex-1">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdString(jsonLd) }}
      />
      <Hero />
      <About />
      <Companies companies={companies} />
      <WhyChooseUs />
      <ProductCategories />
      <VideoShowcase />
      {SHOW_UNVERIFIED_SECTIONS.stats && <Stats />}
      {SHOW_UNVERIFIED_SECTIONS.testimonials && <Testimonials />}
      <CallToAction />
      <LatestNews />
      <Contact />
    </div>
  );
}
