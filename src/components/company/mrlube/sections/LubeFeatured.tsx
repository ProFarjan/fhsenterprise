import LubeProductCard from "@/components/company/mrlube/LubeProductCard";
import type { LubeContent } from "@/types/mrlube";
import type { AppLocale } from "@/i18n/routing";

// Featured products — one representative product per category on a steel band.
export default function LubeFeatured({
  featured,
  categories,
  products,
  viewDetailsLabel,
  locale,
}: {
  featured: LubeContent["featured"];
  categories: LubeContent["categories"];
  products: LubeContent["products"];
  viewDetailsLabel: string;
  locale: AppLocale;
}) {
  const categoryName = (slug: string) => categories.find((c) => c.slug === slug)?.name ?? slug;
  const picks = categories
    .map((category) => products.find((p) => p.category === category.slug))
    .filter((p): p is LubeContent["products"][number] => Boolean(p));

  return (
    <section className="bg-lube-cream-dark py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-lube-red">
              <span className="h-px w-8 bg-lube-red" />
              {featured.eyebrow}
            </span>
            <h2 className="mt-5 font-lube text-3xl font-bold uppercase leading-tight tracking-tight text-lube-ink sm:text-4xl">
              {featured.heading}
            </h2>
            <p className="mt-4 text-lg leading-8 text-lube-slate">{featured.subtitle}</p>
          </div>
          <a
            href={`/${locale}/categories`}
            className="inline-flex shrink-0 items-center gap-1.5 rounded-sm border border-lube-ink/25 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-lube-ink transition-colors hover:border-lube-red hover:bg-lube-red hover:text-white"
          >
            {featured.viewAllLabel}
          </a>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {picks.map((product) => (
            <LubeProductCard
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
