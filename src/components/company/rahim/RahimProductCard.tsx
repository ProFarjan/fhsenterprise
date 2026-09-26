import Image from "next/image";
import type { RahimProduct } from "@/types/rahim";
import type { AppLocale } from "@/i18n/routing";

// Shared product card used on category pages, the featured grid, and the
// "related products" strip. Clicking navigates to /products/[slug]. Light
// white card with a cyan accent.
export default function RahimProductCard({
  product,
  categoryName,
  viewDetailsLabel,
  locale,
}: {
  product: RahimProduct;
  categoryName?: string;
  viewDetailsLabel: string;
  locale: AppLocale;
}) {
  return (
    <a
      href={`/${locale}/products/${product.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-rahim-line bg-white shadow-sm transition-all hover:-translate-y-1 hover:border-rahim-cyan/40 hover:shadow-xl hover:shadow-rahim-slate/10"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-rahim-cloud">
        <Image
          src={product.image}
          alt=""
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-rahim-slate/10 via-transparent to-transparent" />
        {categoryName && (
          <span className="absolute left-4 top-4 rounded-full bg-rahim-cyan px-3 py-1 text-xs font-semibold text-white">
            {categoryName}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-2 p-6">
        <h3 className="font-rahim text-lg font-bold text-rahim-slate">{product.name}</h3>
        <p className="flex-1 text-sm leading-6 text-rahim-steel">{product.tagline}</p>
        <span className="mt-1 inline-flex items-center gap-1.5 text-sm font-semibold text-rahim-cyan-dark">
          {viewDetailsLabel}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 transition-transform group-hover:translate-x-1">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </a>
  );
}
