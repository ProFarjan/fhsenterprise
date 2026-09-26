import type { Metadata } from "next";
import { notFound } from "next/navigation";
import AgroMedPageHeader from "@/components/company/agromed/AgroMedPageHeader";
import ProductGrid from "@/components/company/agromed/ProductGrid";
import { accentFor } from "@/components/company/agromed/categoryAccents";
import { agroMedicineContent } from "@/data/companies/agro-medicine";
import { getAgroMedDbProducts } from "@/lib/publicContent";
import type { AppLocale } from "@/i18n/routing";

export function generateStaticParams() {
  return agroMedicineContent.en.categories.map((category) => ({ category: category.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; category: string }>;
}): Promise<Metadata> {
  const { locale, category } = await params;
  const content = agroMedicineContent[locale as AppLocale] ?? agroMedicineContent.en;
  const cat = content.categories.find((c) => c.slug === category);
  if (!cat) return {};
  return { title: `${cat.name} · ${content.name}`, description: cat.description };
}

export default async function AgroMedCategoryPage({
  params,
}: {
  params: Promise<{ locale: string; category: string }>;
}) {
  const { locale, category } = await params;
  const content = agroMedicineContent[locale as AppLocale];
  const cat = content.categories.find((c) => c.slug === category);
  if (!cat) notFound();

  const { productsPage, categories } = content;
  const dbProducts = await getAgroMedDbProducts();
  const products = [...content.products, ...dbProducts];
  const items = products.filter((p) => p.category === category);
  // Clean, subdomain-relative base — the proxy rewrites it to the internal
  // /companies/agro-medicine path (see FeedProductCard).
  const base = `/${locale}`;

  return (
    <main className="flex-1 bg-white">
      <AgroMedPageHeader
        header={{
          eyebrow: `${productsPage.categoryHeaderPrefix} ${cat.name}`,
          title: cat.name,
          description: cat.description,
          image: cat.image,
        }}
      />

      <section className="mx-auto max-w-6xl px-6 pt-16 lg:px-8 lg:pt-20">
        {/* Category switcher */}
        <div className="flex flex-wrap gap-2.5">
          <a
            href={`${base}/products`}
            className="rounded-full bg-vet-cloud px-4 py-2 text-sm font-medium text-vet-ink/75 ring-1 ring-vet-line transition-colors hover:bg-vet-mist hover:text-vet-teal-dark"
          >
            {productsPage.allLabel}
          </a>
          {categories.map((c) => {
            const accent = accentFor(c.slug);
            const isActive = c.slug === category;
            return (
              <a
                key={c.slug}
                href={`${base}/products/${c.slug}`}
                aria-current={isActive ? "page" : undefined}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-vet-ink text-white"
                    : "bg-vet-cloud text-vet-ink/75 ring-1 ring-vet-line hover:bg-vet-mist hover:text-vet-teal-dark"
                }`}
              >
                <span className={`h-2 w-2 rounded-full ${accent.dot}`} />
                {c.name}
              </a>
            );
          })}
        </div>

        <p className="mt-8 text-sm text-vet-ink/60">
          {items.length} {productsPage.productsCountLabel}
        </p>
      </section>

      <div className="mx-auto max-w-6xl px-6 pb-20 pt-8 lg:px-8 lg:pb-28">
        <ProductGrid products={items} labels={productsPage} basePath={base} />
      </div>
    </main>
  );
}
