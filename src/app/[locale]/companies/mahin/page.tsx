import MahinHeroSlider from "@/components/company/mahin/MahinHeroSlider";
import MahinWhy from "@/components/company/mahin/sections/MahinWhy";
import MahinCategories from "@/components/company/mahin/sections/MahinCategories";
import MahinFeatured from "@/components/company/mahin/sections/MahinFeatured";
import MahinCoverage from "@/components/company/mahin/sections/MahinCoverage";
import MahinStats from "@/components/company/mahin/sections/MahinStats";
import MahinProcess from "@/components/company/mahin/sections/MahinProcess";
import MahinTestimonials from "@/components/company/mahin/sections/MahinTestimonials";
import MahinCta from "@/components/company/mahin/sections/MahinCta";
import HeroSlideshow from "@/components/company/HeroSlideshow";
import { mahinContent } from "@/data/companies/mahin";
import { getCompanyHeroSlides, getSimpleDbProducts } from "@/lib/publicContent";
import { SiteKey } from "@/generated/prisma/enums";
import type { AppLocale } from "@/i18n/routing";

export default async function MahinPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const content = mahinContent[locale as AppLocale];
  const heroSlides = await getCompanyHeroSlides(SiteKey.MAHIN, locale as AppLocale);
  const dbProducts = await getSimpleDbProducts(SiteKey.MAHIN);
  const products = [...content.products, ...dbProducts];

  return (
    <main className="flex-1">
      {heroSlides.length > 0 ? (
        <HeroSlideshow slides={heroSlides} />
      ) : (
        <MahinHeroSlider slides={content.hero.slides} locale={locale as AppLocale} />
      )}
      <MahinWhy why={content.why} />
      <MahinCategories
        section={content.categoriesSection}
        categories={content.categories}
        locale={locale as AppLocale}
      />
      <MahinFeatured
        featured={content.featured}
        categories={content.categories}
        products={products}
        viewDetailsLabel={content.labels.viewDetails}
        locale={locale as AppLocale}
      />
      <MahinCoverage coverage={content.coverage} />
      <MahinStats stats={content.stats} />
      <MahinProcess process={content.process} />
      <MahinTestimonials testimonials={content.testimonials} />
      <MahinCta cta={content.cta} locale={locale as AppLocale} />
    </main>
  );
}
