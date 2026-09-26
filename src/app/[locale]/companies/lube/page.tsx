import LubeHeroSlider from "@/components/company/mrlube/LubeHeroSlider";
import LubeWhy from "@/components/company/mrlube/sections/LubeWhy";
import LubeCategories from "@/components/company/mrlube/sections/LubeCategories";
import LubeFeatured from "@/components/company/mrlube/sections/LubeFeatured";
import LubeStats from "@/components/company/mrlube/sections/LubeStats";
import LubeProcess from "@/components/company/mrlube/sections/LubeProcess";
import LubeTestimonials from "@/components/company/mrlube/sections/LubeTestimonials";
import LubeCta from "@/components/company/mrlube/sections/LubeCta";
import HeroSlideshow from "@/components/company/HeroSlideshow";
import { mrlubeContent } from "@/data/companies/mrlube";
import { getCompanyHeroSlides, getSimpleDbProducts } from "@/lib/publicContent";
import { SiteKey } from "@/generated/prisma/enums";
import type { AppLocale } from "@/i18n/routing";

export default async function LubePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const content = mrlubeContent[locale as AppLocale];
  const heroSlides = await getCompanyHeroSlides(SiteKey.MR_LUBE, locale as AppLocale);
  const dbProducts = await getSimpleDbProducts(SiteKey.MR_LUBE);
  const products = [...content.products, ...dbProducts];

  return (
    <main className="flex-1">
      {heroSlides.length > 0 ? (
        <HeroSlideshow slides={heroSlides} />
      ) : (
        <LubeHeroSlider slides={content.hero.slides} locale={locale as AppLocale} />
      )}
      <LubeWhy why={content.why} />
      <LubeCategories
        section={content.categoriesSection}
        categories={content.categories}
        locale={locale as AppLocale}
      />
      <LubeFeatured
        featured={content.featured}
        categories={content.categories}
        products={products}
        viewDetailsLabel={content.labels.viewDetails}
        locale={locale as AppLocale}
      />
      <LubeStats stats={content.stats} />
      <LubeProcess process={content.process} />
      <LubeTestimonials testimonials={content.testimonials} />
      <LubeCta cta={content.cta} locale={locale as AppLocale} />
    </main>
  );
}
