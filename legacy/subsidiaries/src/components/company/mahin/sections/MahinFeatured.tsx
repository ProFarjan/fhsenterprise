import MahinProductCard from "@/components/company/mahin/MahinProductCard";
import type { MahinContent } from "@/types/mahin";
import type { AppLocale } from "@/i18n/routing";

// Featured products — one representative product per category on a mist band.
export default function MahinFeatured({
  featured,
  categories,
  products,
  viewDetailsLabel,
  locale,
}: {
  featured: MahinContent["featured"];
  categories: MahinContent["categories"];
  products: MahinContent["products"];
  viewDetailsLabel: string;
  locale: AppLocale;
}) {
  const categoryName = (slug: string) => categories.find((c) => c.slug === slug)?.name ?? slug;
  const picks = categories
    .map((category) => products.find((p) => p.category === category.slug))
    .filter((p): p is MahinContent["products"][number] => Boolean(p));

  return (
    <section className="bg-mahin-mist py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-mahin-flame-dark">
              <span className="h-px w-8 bg-mahin-flame" />
              {featured.eyebrow}
            </span>
            <h2 className="mt-5 font-mahin text-3xl font-bold leading-tight tracking-tight text-mahin-navy sm:text-4xl">
              {featured.heading}
            </h2>
            <p className="mt-4 text-lg leading-8 text-mahin-slate">{featured.subtitle}</p>
          </div>
          <a
            href={`/${locale}/categories`}
            className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-mahin-navy/20 px-6 py-3 text-sm font-semibold text-mahin-navy transition-colors hover:border-mahin-flame hover:bg-mahin-flame hover:text-white"
          >
            {featured.viewAllLabel}
          </a>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {picks.map((product) => (
            <MahinProductCard
              key={product.slug}
              product={product}
              categoryName={categoryName(product.category)}
              viewDetailsLabel={viewDetailsLabel}
              locale={locale}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
