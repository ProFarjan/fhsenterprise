import Image from "next/image";
import FeedIcon from "@/components/company/feed/FeedIcon";
import type { FeedContent } from "@/types/feed";
import type { AppLocale } from "@/i18n/routing";

// Three large category cards linking to each category page.
export default function FeedCategories({
  section,
  categories,
  locale,
}: {
  section: FeedContent["categoriesSection"];
  categories: FeedContent["categories"];
  locale: AppLocale;
}) {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-feed-amber-dark">
            {section.eyebrow}
          </span>
          <h2 className="mt-4 font-feed text-3xl font-bold leading-tight text-feed-espresso sm:text-4xl">
            {section.heading}
          </h2>
          <p className="mt-4 text-lg leading-8 text-neutral-600">{section.subtitle}</p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-7 md:grid-cols-3">
          {categories.map((category) => (
            <a
              key={category.slug}
              href={`/${locale}/categories/${category.slug}`}
              className="group relative flex flex-col overflow-hidden rounded-3xl bg-feed-espresso shadow-sm transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-feed-brown/20"
            >
              <div className="relative aspect-[5/4] overflow-hidden">
                <Image
                  src={category.image}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-feed-bark via-feed-bark/30 to-transparent" />
                <div className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-feed-amber text-white shadow-lg">
                  <FeedIcon name={category.icon} className="h-6 w-6" />
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-feed-gold">{category.tagline}</p>
                <h3 className="mt-1.5 font-feed text-2xl font-bold text-white">{category.name}</h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-feed-cream/70">{category.description}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-feed-gold">
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
