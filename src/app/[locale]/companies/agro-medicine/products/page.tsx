import AgroMedPageHeader from "@/components/company/agromed/AgroMedPageHeader";
import AgroMedIcon from "@/components/company/agromed/AgroMedIcon";
import ProductGrid from "@/components/company/agromed/ProductGrid";
import { accentFor } from "@/components/company/agromed/categoryAccents";
import { agroMedicineContent } from "@/data/companies/agro-medicine";
import { getAgroMedDbProducts } from "@/lib/publicContent";
import type { AppLocale } from "@/i18n/routing";

export default async function AgroMedProductsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const content = agroMedicineContent[locale as AppLocale];
  const { productsPage, categories } = content;
  const dbProducts = await getAgroMedDbProducts();
  const products = [...content.products, ...dbProducts];
  // Clean, subdomain-relative base — the proxy rewrites it to the internal
  // /companies/agro-medicine path (see FeedProductCard).
  const base = `/${locale}`;

  return (
    <main className="flex-1 bg-white">
      <AgroMedPageHeader header={productsPage.header} />

      <section className="mx-auto max-w-6xl px-6 pt-16 lg:px-8 lg:pt-20">
        <p className="max-w-3xl text-lg leading-8 text-vet-ink/70">{productsPage.intro}</p>

        {/* Category quick-nav */}
        <div className="mt-8 flex flex-wrap gap-2.5">
          <span className="rounded-full bg-vet-ink px-4 py-2 text-sm font-semibold text-white">
            {productsPage.allLabel}
          </span>
          {categories.map((category) => {
            const accent = accentFor(category.slug);
            return (
              <a
                key={category.slug}
                href={`${base}/products/${category.slug}`}
                className="inline-flex items-center gap-2 rounded-full bg-vet-cloud px-4 py-2 text-sm font-medium text-vet-ink/75 ring-1 ring-vet-line transition-colors hover:bg-vet-mist hover:text-vet-teal-dark"
              >
                <span className={`h-2 w-2 rounded-full ${accent.dot}`} />
                {category.name}
              </a>
            );
          })}
        </div>
      </section>

      {/* Grouped by category */}
      <div className="mx-auto max-w-6xl space-y-16 px-6 py-16 lg:px-8 lg:py-20">
        {categories.map((category) => {
          const accent = accentFor(category.slug);
          const items = products.filter((p) => p.category === category.slug);
          return (
            <section key={category.slug} id={category.slug} className="scroll-mt-24">
              <div className="flex items-center gap-4">
                <span className={`flex h-12 w-12 items-center justify-center rounded-xl ${accent.chip}`}>
                  <AgroMedIcon name={category.icon} className="h-6 w-6" />
                </span>
                <div>
                  <h2 className="font-vet text-2xl font-semibold text-vet-ink">{category.name}</h2>
                  <p className="text-sm text-vet-ink/60">{category.tagline}</p>
                </div>
              </div>
              <div className="mt-8">
                <ProductGrid products={items} labels={productsPage} basePath={base} />
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
}
