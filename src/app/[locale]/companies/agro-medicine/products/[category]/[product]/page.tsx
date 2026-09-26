import type { Metadata } from "next";
import { notFound } from "next/navigation";
import AgroMedIcon from "@/components/company/agromed/AgroMedIcon";
import AgroMedProductGallery from "@/components/company/agromed/AgroMedProductGallery";
import ProductGrid from "@/components/company/agromed/ProductGrid";
import { accentFor } from "@/components/company/agromed/categoryAccents";
import { agroMedicineContent } from "@/data/companies/agro-medicine";
import { getAgroMedDbProducts } from "@/lib/publicContent";
import type { AppLocale } from "@/i18n/routing";

export function generateStaticParams() {
  return agroMedicineContent.en.products.map((product) => ({
    category: product.category,
    product: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; category: string; product: string }>;
}): Promise<Metadata> {
  const { locale, product: slug } = await params;
  const content = agroMedicineContent[locale as AppLocale] ?? agroMedicineContent.en;
  const product = content.products.find((p) => p.slug === slug);
  if (!product) return {};
  return { title: `${product.name} · ${content.name}`, description: product.tagline };
}

// A labeled block in the spec rail — mirrors the Materials / Functionality /
// Dose / Supplies rhythm of a printed datasheet.
function SpecSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-vet-line py-7 first:border-t-0 first:pt-0">
      <h2 className="font-vet text-lg font-semibold text-vet-ink">{title}</h2>
      <div className="mt-3">{children}</div>
    </section>
  );
}

export default async function AgroMedProductPage({
  params,
}: {
  params: Promise<{ locale: string; category: string; product: string }>;
}) {
  const { locale, category, product: slug } = await params;
  const content = agroMedicineContent[locale as AppLocale];
  const dbProducts = await getAgroMedDbProducts();
  const products = [...content.products, ...dbProducts];
  const product = products.find((p) => p.slug === slug && p.category === category);
  if (!product) notFound();

  const { productsPage, categories } = content;
  const cat = categories.find((c) => c.slug === product.category);
  const accent = accentFor(product.category);
  // Clean, subdomain-relative base (the proxy rewrites these to the internal
  // /companies/agro-medicine path). Matches the FeedProductCard convention.
  const base = `/${locale}`;
  const related = products.filter((p) => p.category === product.category && p.slug !== product.slug);

  // Pack strings like "100 g / 500 g" become one line per size, Supplies-style.
  const packSizes = product.pack.split("/").map((size) => size.trim());

  return (
    <main className="flex-1 bg-white">
      <div className="mx-auto max-w-6xl px-6 pb-16 pt-28 lg:px-8 lg:pb-20 lg:pt-32">
        {/* Breadcrumb */}
        <nav className="flex flex-wrap items-center gap-1.5 text-sm text-vet-ink/55">
          <a href={`${base}/products`} className="transition-colors hover:text-vet-teal-dark">
            {productsPage.allLabel}
          </a>
          <span>/</span>
          <a
            href={`${base}/products/${product.category}`}
            className="transition-colors hover:text-vet-teal-dark"
          >
            {cat?.name ?? product.category}
          </a>
          <span>/</span>
          <span className="text-vet-ink/80">{product.name}</span>
        </nav>

        {/* Title block */}
        <header className="mt-10 max-w-3xl">
          <a
            href={`${base}/products/${product.category}`}
            className={`inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] ${accent.text}`}
          >
            <AgroMedIcon name={product.icon} className="h-4 w-4" />
            {cat?.name ?? product.category}
          </a>
          <h1 className="mt-3 font-vet text-3xl font-semibold tracking-tight text-vet-ink sm:text-4xl">
            {product.name}
          </h1>
          <p className="mt-3 text-lg leading-8 text-vet-ink/70">{product.tagline}</p>
        </header>

        {/* Image + spec rail */}
        <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <AgroMedProductGallery
              images={product.images?.length ? product.images : [product.image]}
              name={product.name}
              formLabel={product.form}
              accentBarClass={accent.bar}
            />

            <a
              href={`${base}/contact`}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-vet-teal px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-vet-teal-dark"
            >
              {productsPage.enquireLabel}
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20">→</span>
            </a>
          </div>

          <div>
            <SpecSection title={productsPage.overviewLabel}>
              <p className="text-base leading-8 text-vet-ink/75">{product.overview}</p>
            </SpecSection>

            <SpecSection title={productsPage.compositionLabel}>
              <p className="text-sm leading-7 text-vet-ink/75">{product.composition}</p>
            </SpecSection>

            <SpecSection title={productsPage.benefitsLabel}>
              <ul className="space-y-2.5">
                {product.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3 text-sm leading-6 text-vet-ink/80">
                    <span className={`mt-2 h-2 w-2 shrink-0 rounded-full ${accent.dot}`} />
                    {benefit}
                  </li>
                ))}
              </ul>
            </SpecSection>

            <SpecSection title={productsPage.indicationsLabel}>
              <ul className="space-y-2.5">
                {product.indications.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-6 text-vet-ink/80">
                    <span className={`mt-2 h-2 w-2 shrink-0 rounded-full ${accent.dot}`} />
                    {item}
                  </li>
                ))}
              </ul>
            </SpecSection>

            <SpecSection title={productsPage.directionsLabel}>
              <p className="text-sm leading-7 text-vet-ink/75">{product.directions}</p>
            </SpecSection>

            <SpecSection title={productsPage.packLabel}>
              <ul className="space-y-2">
                {packSizes.map((size) => (
                  <li key={size} className="flex items-center gap-3 text-sm text-vet-ink/80">
                    <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${accent.dot}`} />
                    {size}
                  </li>
                ))}
              </ul>
            </SpecSection>

            <SpecSection title={productsPage.storageLabel}>
              <p className="text-sm leading-7 text-vet-ink/75">{product.storage}</p>
            </SpecSection>
          </div>
        </div>
      </div>

      {/* Related products */}
      {related.length > 0 && (
        <section className="border-t border-vet-line bg-vet-mist py-16 lg:py-20">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="flex items-center justify-between gap-4">
              <h2 className="font-vet text-2xl font-semibold text-vet-ink">{productsPage.relatedLabel}</h2>
              <a
                href={`${base}/products/${product.category}`}
                className="shrink-0 text-sm font-semibold text-vet-teal-dark transition-colors hover:text-vet-ink"
              >
                {cat?.name ?? product.category} →
              </a>
            </div>
            <div className="mt-10">
              <ProductGrid products={related} labels={productsPage} basePath={base} />
            </div>
          </div>
        </section>
      )}

      <div className="mx-auto max-w-6xl px-6 py-10 lg:px-8">
        <a
          href={`${base}/products`}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-vet-ink/60 transition-colors hover:text-vet-teal-dark"
        >
          ← {productsPage.backToProductsLabel}
        </a>
      </div>
    </main>
  );
}
