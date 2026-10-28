import Image from "next/image";
import RahimIcon from "@/components/company/rahim/RahimIcon";
import type { RahimContent } from "@/types/rahim";
import type { AppLocale } from "@/i18n/routing";

// Category cards linking to each category page, on a white background.
export default function RahimCategories({
  section,
  categories,
  locale,
}: {
  section: RahimContent["categoriesSection"];
  categories: RahimContent["categories"];
  locale: AppLocale;
}) {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-rahim-cyan-dark">
            {section.eyebrow}
          </span>
          <h2 className="mt-4 font-rahim text-3xl font-bold leading-tight tracking-tight text-rahim-slate sm:text-4xl">
            {section.heading}
          </h2>
          <p className="mt-4 text-lg leading-8 text-rahim-steel">{section.subtitle}</p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <a
              key={category.slug}
              href={`/${locale}/categories/${category.slug}`}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-rahim-line bg-white shadow-sm transition-all hover:-translate-y-1 hover:border-rahim-cyan/50 hover:shadow-2xl hover:shadow-rahim-slate/10"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-rahim-cloud">
                <Image
                  src={category.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-rahim-slate/20 via-transparent to-transparent" />
                <div className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-xl bg-rahim-cyan text-white shadow-lg">
                  <RahimIcon name={category.icon} className="h-5 w-5" />
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-rahim-cyan-dark">{category.tagline}</p>
                <h3 className="mt-1.5 font-rahim text-xl font-bold text-rahim-slate">{category.name}</h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-rahim-steel">{category.description}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-rahim-cyan-dark">
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
