import Image from "next/image";
import AgroMedIcon from "@/components/company/agromed/AgroMedIcon";
import { accentFor } from "@/components/company/agromed/categoryAccents";
import type { AgroMedContent } from "@/types/agromed";

// Species category tiles — each a photo card linking to that category's product
// page. The core of the "Products" navigation surfaced on the home page.
export default function AgroMedCategories({
  categorySection,
  categories,
  locale,
}: {
  categorySection: AgroMedContent["categorySection"];
  categories: AgroMedContent["categories"];
  locale: string;
}) {
  // Clean, subdomain-relative base — the proxy rewrites it to the internal
  // /companies/agro-medicine path (see FeedProductCard).
  const base = `/${locale}`;

  return (
    <section className="bg-vet-mist py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-vet-teal">
              <span className="h-px w-8 bg-vet-teal" />
              {categorySection.eyebrow}
            </span>
            <h2 className="mt-5 font-vet text-3xl font-semibold tracking-tight text-vet-ink sm:text-4xl">
              {categorySection.heading}
            </h2>
            <p className="mt-4 text-base leading-7 text-vet-ink/65">{categorySection.body}</p>
          </div>
          <a
            href={`${base}/products`}
            className="shrink-0 text-sm font-semibold text-vet-teal-dark transition-colors hover:text-vet-ink"
          >
            {categorySection.viewAll} →
          </a>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => {
            const accent = accentFor(category.slug);
            return (
              <a
                key={category.slug}
                href={`${base}/products/${category.slug}`}
                className="group flex flex-col overflow-hidden rounded-3xl bg-white ring-1 ring-vet-line transition-shadow hover:shadow-xl hover:shadow-vet-ink/5"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={category.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className={`absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-xl backdrop-blur ${accent.chip}`}>
                    <AgroMedIcon name={category.icon} className="h-6 w-6" />
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className={`text-xs font-semibold uppercase tracking-wide ${accent.text}`}>
                    {category.tagline}
                  </p>
                  <h3 className="mt-1.5 text-xl font-semibold text-vet-ink">{category.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-6 text-vet-ink/65">{category.description}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-vet-teal-dark">
                    {categorySection.exploreLabel}
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
