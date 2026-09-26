import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Companies from "@/components/sections/Companies";
import ProductCategories from "@/components/sections/ProductCategories";
import Stats from "@/components/sections/Stats";
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

  return (
    <main className="flex-1">
      <Hero />
      <About />
      <Companies companies={companies} />
      <ProductCategories />
      <Stats />
      <LatestNews />
      <Contact />
    </main>
  );
}
