import Image from "next/image";
import type { FeedProduct } from "@/types/feed";
import type { AppLocale } from "@/i18n/routing";

// Shared product card used on category pages, the featured grid, and the
// "related products" strip. Clicking navigates to /products/[slug].
export default function FeedProductCard({
  product,
  categoryName,
  viewDetailsLabel,
  locale,
}: {
  product: FeedProduct;
  categoryName?: string;
  viewDetailsLabel: string;
  locale: AppLocale;
}) {
  return (
    <a
      href={`/${locale}/products/${product.slug}`}
      className="group flex flex-col overflow-hidden rounded-3xl border border-feed-cream-dark bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-feed-brown/10"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={product.image}
          alt=""
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-feed-bark/45 via-transparent to-transparent" />
        {categoryName && (
          <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-feed-espresso backdrop-blur">
            {categoryName}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-2 p-6">
        <h3 className="font-feed text-lg font-bold text-feed-espresso">{product.name}</h3>
        <p className="flex-1 text-sm leading-6 text-neutral-600">{product.tagline}</p>
        <span className="mt-1 inline-flex items-center gap-1.5 text-sm font-semibold text-feed-amber-dark">
          {viewDetailsLabel}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 transition-transform group-hover:translate-x-1">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </a>
  );
}
