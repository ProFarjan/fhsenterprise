"use client";

import { useState } from "react";
import Image from "next/image";
import type { AgroProduct, AgroProductCategory } from "@/types/agro";
import type { AppLocale } from "@/i18n/routing";

function ArrowIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 transition-transform group-hover:translate-x-1"
    >
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}

// Category pill filter above a modern card grid. Filtering happens client-side
// (no navigation) — clicking a card is what navigates, to /products/[slug].
export default function AgroProductExplorer({
  categories,
  products,
  allLabel,
  viewDetailsLabel,
  locale,
}: {
  categories: AgroProductCategory[];
  products: AgroProduct[];
  allLabel: string;
  viewDetailsLabel: string;
  locale: AppLocale;
}) {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categoryName = (slug: string) => categories.find((c) => c.slug === slug)?.name ?? slug;
  const visibleProducts =
    activeCategory === "all" ? products : products.filter((p) => p.category === activeCategory);

  return (
    <div>
      <div className="flex flex-wrap gap-2.5">
        <button
          type="button"
          onClick={() => setActiveCategory("all")}
          className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
            activeCategory === "all"
              ? "bg-agro-forest text-white"
              : "bg-agro-cream text-agro-forest hover:bg-agro-cream-dark"
          }`}
        >
          {allLabel}
        </button>
        {categories.map((category) => (
          <button
            key={category.slug}
            type="button"
            onClick={() => setActiveCategory(category.slug)}
            className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
              activeCategory === category.slug
                ? "bg-agro-forest text-white"
                : "bg-agro-cream text-agro-forest hover:bg-agro-cream-dark"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {visibleProducts.map((product) => (
          <a
            key={product.slug}
            href={`/${locale}/products/${product.slug}`}
            className="group flex flex-col overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={product.image}
                alt=""
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-agro-forest/50 via-agro-forest/0 to-agro-forest/0" />
              <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-agro-forest backdrop-blur">
                {categoryName(product.category)}
              </span>
            </div>
            <div className="flex flex-1 flex-col gap-2 p-6">
              <h3 className="font-display text-lg font-normal text-agro-forest">{product.name}</h3>
              <p className="flex-1 text-sm leading-6 text-neutral-600">{product.tagline}</p>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-agro-leaf">
                {viewDetailsLabel}
                <ArrowIcon />
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
