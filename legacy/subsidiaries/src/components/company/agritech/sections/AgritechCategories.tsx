import Image from "next/image";
import AgritechIcon from "@/components/company/agritech/AgritechIcon";
import type { AgritechContent } from "@/types/agritech";
import type { AppLocale } from "@/i18n/routing";

// Category cards linking to each category page.
export default function AgritechCategories({
  section,
  categories,
  locale,
}: {
  section: AgritechContent["categoriesSection"];
  categories: AgritechContent["categories"];
  locale: AppLocale;
}) {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-agri-amber-dark">
            {section.eyebrow}
          </span>
          <h2 className="mt-4 font-agri text-3xl font-bold leading-tight text-agri-graphite sm:text-4xl">
            {section.heading}
          </h2>
          <p className="mt-4 text-lg leading-8 text-neutral-600">{section.subtitle}</p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <a
              key={category.slug}
              href={`/${locale}/categories/${category.slug}`}
              className="group relative flex flex-col overflow-hidden rounded-3xl bg-agri-graphite shadow-sm transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-agri-steel/25"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={category.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-agri-graphite via-agri-graphite/30 to-transparent" />
                <div className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-agri-amber text-agri-graphite shadow-lg">
                  <AgritechIcon name={category.icon} className="h-5 w-5" />
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-agri-gold">{category.tagline}</p>
                <h3 className="mt-1.5 font-agri text-xl font-bold text-white">{category.name}</h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-white/65">{category.description}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-agri-gold">
                  {section.exploreLabel}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 transition-transform group-hover:translate-x-1">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
