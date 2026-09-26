import AgritechHeroSlider from "@/components/company/agritech/AgritechHeroSlider";
import AgritechWhy from "@/components/company/agritech/sections/AgritechWhy";
import AgritechCategories from "@/components/company/agritech/sections/AgritechCategories";
import AgritechFeatured from "@/components/company/agritech/sections/AgritechFeatured";
import AgritechStats from "@/components/company/agritech/sections/AgritechStats";
import AgritechProcess from "@/components/company/agritech/sections/AgritechProcess";
import AgritechTestimonials from "@/components/company/agritech/sections/AgritechTestimonials";
import AgritechCta from "@/components/company/agritech/sections/AgritechCta";
import HeroSlideshow from "@/components/company/HeroSlideshow";
import { agritechContent } from "@/data/companies/agritech";
import { getCompanyHeroSlides, getSimpleDbProducts } from "@/lib/publicContent";
import { SiteKey } from "@/generated/prisma/enums";
import type { AppLocale } from "@/i18n/routing";

export default async function AgritechPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const content = agritechContent[locale as AppLocale];
  const heroSlides = await getCompanyHeroSlides(SiteKey.AGRI_TECH, locale as AppLocale);
  const dbProducts = await getSimpleDbProducts(SiteKey.AGRI_TECH);
  const products = [...content.products, ...dbProducts];

  return (
    <main className="flex-1">
      {heroSlides.length > 0 ? (
        <HeroSlideshow slides={heroSlides} />
      ) : (
        <AgritechHeroSlider slides={content.hero.slides} locale={locale as AppLocale} />
      )}
      <AgritechWhy why={content.why} />
      <AgritechCategories
        section={content.categoriesSection}
        categories={content.categories}
        locale={locale as AppLocale}
      />
      <AgritechFeatured
        featured={content.featured}
        categories={content.categories}
        products={products}
        viewDetailsLabel={content.labels.viewDetails}
        locale={locale as AppLocale}
      />
      <AgritechStats stats={content.stats} />
      <AgritechProcess process={content.process} />
      <AgritechTestimonials testimonials={content.testimonials} />
      <AgritechCta cta={content.cta} locale={locale as AppLocale} />
    </main>
  );
}
