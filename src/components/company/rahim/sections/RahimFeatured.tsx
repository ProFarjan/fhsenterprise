import RahimProductCard from "@/components/company/rahim/RahimProductCard";
import type { RahimContent } from "@/types/rahim";
import type { AppLocale } from "@/i18n/routing";

// Featured products — one representative product per category on a frost band.
export default function RahimFeatured({
  featured,
  categories,
  products,
  viewDetailsLabel,
  locale,
}: {
  featured: RahimContent["featured"];
  categories: RahimContent["categories"];
  products: RahimContent["products"];
  viewDetailsLabel: string;
  locale: AppLocale;
}) {
  const categoryName = (slug: string) => categories.find((c) => c.slug === slug)?.name ?? slug;
  const picks = categories
    .map((category) => products.find((p) => p.category === category.slug))
    .filter((p): p is RahimContent["products"][number] => Boolean(p));

  return (
    <section className="bg-rahim-frost py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-rahim-cyan-dark">
              <span className="h-px w-8 bg-rahim-cyan" />
              {featured.eyebrow}
            </span>
            <h2 className="mt-5 font-rahim text-3xl font-bold leading-tight tracking-tight text-rahim-slate sm:text-4xl">
              {featured.heading}
            </h2>
            <p className="mt-4 text-lg leading-8 text-rahim-steel">{featured.subtitle}</p>
          </div>
          <a
            href={`/${locale}/categories`}
            className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-rahim-slate/20 px-6 py-3 text-sm font-semibold text-rahim-slate transition-colors hover:border-rahim-cyan hover:bg-rahim-cyan hover:text-white"
          >
            {featured.viewAllLabel}
          </a>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {picks.map((product) => (
            <RahimProductCard
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
