import FeedHeroSlider from "@/components/company/feed/FeedHeroSlider";
import FeedWhy from "@/components/company/feed/sections/FeedWhy";
import FeedCategories from "@/components/company/feed/sections/FeedCategories";
import FeedFeatured from "@/components/company/feed/sections/FeedFeatured";
import FeedStats from "@/components/company/feed/sections/FeedStats";
import FeedProcess from "@/components/company/feed/sections/FeedProcess";
import FeedTestimonials from "@/components/company/feed/sections/FeedTestimonials";
import FeedCta from "@/components/company/feed/sections/FeedCta";
import HeroSlideshow from "@/components/company/HeroSlideshow";
import { feedContent } from "@/data/companies/feed";
import { getCompanyHeroSlides, getSimpleDbProducts } from "@/lib/publicContent";
import { SiteKey } from "@/generated/prisma/enums";
import type { AppLocale } from "@/i18n/routing";

export default async function FeedPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const content = feedContent[locale as AppLocale];
  const heroSlides = await getCompanyHeroSlides(SiteKey.FEED, locale as AppLocale);
  const dbProducts = await getSimpleDbProducts(SiteKey.FEED);
  const products = [...content.products, ...dbProducts];

  return (
    <main className="flex-1">
      {heroSlides.length > 0 ? (
        <HeroSlideshow slides={heroSlides} />
      ) : (
        <FeedHeroSlider slides={content.hero.slides} locale={locale as AppLocale} />
      )}
      <FeedWhy why={content.why} />
      <FeedCategories
        section={content.categoriesSection}
        categories={content.categories}
        locale={locale as AppLocale}
      />
      <FeedFeatured
        featured={content.featured}
        categories={content.categories}
        products={products}
        viewDetailsLabel={content.labels.viewDetails}
        locale={locale as AppLocale}
      />
      <FeedStats stats={content.stats} />
      <FeedProcess process={content.process} />
      <FeedTestimonials testimonials={content.testimonials} />
      <FeedCta cta={content.cta} locale={locale as AppLocale} />
    </main>
  );
}
