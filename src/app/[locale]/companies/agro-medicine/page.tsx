import AgroMedHeroSlider from "@/components/company/agromed/sections/AgroMedHeroSlider";
import AgroMedIntro from "@/components/company/agromed/sections/AgroMedIntro";
import AgroMedCategories from "@/components/company/agromed/sections/AgroMedCategories";
import AgroMedQuality from "@/components/company/agromed/sections/AgroMedQuality";
import AgroMedStats from "@/components/company/agromed/sections/AgroMedStats";
import AgroMedCta from "@/components/company/agromed/sections/AgroMedCta";
import ProductGrid from "@/components/company/agromed/ProductGrid";
import HeroSlideshow from "@/components/company/HeroSlideshow";
import { agroMedicineContent } from "@/data/companies/agro-medicine";
import { getAgroMedDbProducts, getCompanyHeroSlides } from "@/lib/publicContent";
import { SiteKey } from "@/generated/prisma/enums";
import type { AppLocale } from "@/i18n/routing";

export default async function AgroMedicinePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const content = agroMedicineContent[locale as AppLocale];
  const heroSlides = await getCompanyHeroSlides(SiteKey.AGRO_MEDICINE, locale as AppLocale);
  const dbProducts = await getAgroMedDbProducts();
  const products = [...content.products, ...dbProducts];

  // One featured product per category for the home preview.
  const featured = content.categories
    .map((c) => products.find((p) => p.category === c.slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <main className="flex-1">
      {heroSlides.length > 0 ? (
        <HeroSlideshow slides={heroSlides} />
      ) : (
        <AgroMedHeroSlider
          hero={content.hero}
          viewAllLabel={content.categorySection.viewAll}
          locale={locale}
        />
      )}
      <AgroMedIntro intro={content.intro} />
      <AgroMedCategories
        categorySection={content.categorySection}
        categories={content.categories}
        locale={locale}
      />
      <AgroMedQuality quality={content.quality} />

      <section className="bg-vet-mist py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-vet-teal">
              <span className="h-px w-8 bg-vet-teal" />
              {content.productsPage.header.eyebrow}
            </span>
            <h2 className="mt-5 font-vet text-3xl font-semibold tracking-tight text-vet-ink sm:text-4xl">
              {content.productsPage.header.title}
            </h2>
          </div>
          <ProductGrid products={featured} labels={content.productsPage} basePath={`/${locale}`} />
        </div>
      </section>

      <AgroMedStats stats={content.stats} />
      <AgroMedCta cta={content.cta} href={`/${locale}/contact`} />
    </main>
  );
}
