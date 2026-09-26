import RahimHeroSlider from "@/components/company/rahim/RahimHeroSlider";
import RahimWhy from "@/components/company/rahim/sections/RahimWhy";
import RahimCategories from "@/components/company/rahim/sections/RahimCategories";
import RahimFeatured from "@/components/company/rahim/sections/RahimFeatured";
import RahimStats from "@/components/company/rahim/sections/RahimStats";
import RahimProcess from "@/components/company/rahim/sections/RahimProcess";
import RahimTestimonials from "@/components/company/rahim/sections/RahimTestimonials";
import RahimCta from "@/components/company/rahim/sections/RahimCta";
import HeroSlideshow from "@/components/company/HeroSlideshow";
import { rahimContent } from "@/data/companies/rahim";
import { getCompanyHeroSlides, getSimpleDbProducts } from "@/lib/publicContent";
import { SiteKey } from "@/generated/prisma/enums";
import type { AppLocale } from "@/i18n/routing";

export default async function RahimPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const content = rahimContent[locale as AppLocale];
  const heroSlides = await getCompanyHeroSlides(SiteKey.RAHIM, locale as AppLocale);
  const dbProducts = await getSimpleDbProducts(SiteKey.RAHIM);
  const products = [...content.products, ...dbProducts];

  return (
    <main className="flex-1">
      {heroSlides.length > 0 ? (
        <HeroSlideshow slides={heroSlides} />
      ) : (
        <RahimHeroSlider slides={content.hero.slides} locale={locale as AppLocale} />
      )}
      <RahimWhy why={content.why} />
      <RahimCategories
        section={content.categoriesSection}
        categories={content.categories}
        locale={locale as AppLocale}
      />
      <RahimFeatured
        featured={content.featured}
        categories={content.categories}
        products={products}
        viewDetailsLabel={content.labels.viewDetails}
        locale={locale as AppLocale}
      />
      <RahimStats stats={content.stats} />
      <RahimProcess process={content.process} />
      <RahimTestimonials testimonials={content.testimonials} />
      <RahimCta cta={content.cta} locale={locale as AppLocale} />
    </main>
  );
}
