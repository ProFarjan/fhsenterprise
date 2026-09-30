import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Companies from "@/components/sections/Companies";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ProductCategories from "@/components/sections/ProductCategories";
import Stats from "@/components/sections/Stats";
import Testimonials from "@/components/sections/Testimonials";
import CallToAction from "@/components/sections/CallToAction";
import LatestNews from "@/components/sections/LatestNews";
import Contact from "@/components/sections/Contact";
import { getCompanies } from "@/lib/publicContent";
import type { AppLocale } from "@/i18n/routing";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const companies = await getCompanies(locale as AppLocale);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    name: "FHS Enterprise",
    alternateName: "এফএইচএস এন্টারপ্রাইজ",
    url: "https://fhsenterprise.com",
    logo: "https://fhsenterprise.com/logos/fhs_logo.png",
    image: "https://fhsenterprise.com/images/gallery/fhs_history.jpg",
    description:
      "FHS Enterprise is a diversified business conglomerate in Fulbariya, Mymensingh, Bangladesh specializing in premium rice milling, automotive parts & services, and online grocery shopping.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Fulbariya",
      addressLocality: "Mymensingh",
      addressRegion: "Mymensingh Division",
      postalCode: "2216",
      addressCountry: "BD",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 24.63,
      longitude: 90.36,
    },
    founder: {
      "@type": "Person",
      name: "Fakhrul Hasan Suton",
      jobTitle: "Proprietor",
    },
    foundingDate: "2010",
    priceRange: "$$",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+880-123456789",
      contactType: "customer service",
      availableLanguage: ["English", "Bengali"],
      areaServed: "BD",
    },
    sameAs: [],
    subOrganization: [
      {
        "@type": "Organization",
        name: "M/s. Bangladesh Auto Rice Mill",
        description:
          "Premium quality rice processing and distribution in Fulbariya, Mymensingh, Bangladesh.",
        url: "https://auto-rice-mill.fhsenterprise.com",
        founder: { "@type": "Person", name: "Md. Saiful Islam Bulbul" },
      },
      {
        "@type": "Organization",
        name: "Vehicle Solutions",
        description:
          "All kinds of vehicle parts, tyre, lubricant, accessories, and repairing services.",
        url: "https://vehicle-solutions.fhsenterprise.com",
      },
      {
        "@type": "Organization",
        name: "Daily Bazar",
        description:
          "Online e-commerce platform for fresh groceries, daily needs, and bazar goods.",
        url: "https://daily-bazar.fhsenterprise.com",
      },
    ],
  };

  return (
    <main className="flex-1">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <About />
      <Companies companies={companies} />
      <WhyChooseUs />
      <ProductCategories />
      <Stats />
      <Testimonials />
      <CallToAction />
      <LatestNews />
      <Contact />
    </main>
  );
}
