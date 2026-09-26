import Image from "next/image";
import type { AgroContent } from "@/types/agro";

// Three-up news grid on a cream ground, each card an image over category/date
// meta, title and excerpt.
export default function AgroNews({ news }: { news: AgroContent["news"] }) {
  return (
    <section id="news" className="scroll-mt-20 bg-agro-cream py-24">
      <div className="mx-auto max-w-6xl px-6 text-center lg:px-8">
        <h2 className="font-display text-3xl font-normal text-agro-forest sm:text-4xl">{news.heading}</h2>
        <p className="mx-auto mt-3 max-w-xl text-base leading-7 text-agro-forest/60">{news.subtitle}</p>

        <div className="mt-14 grid grid-cols-1 gap-7 text-left sm:grid-cols-2 lg:grid-cols-3">
          {news.items.map((item) => (
            <article
              key={item.title}
              className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm transition-shadow hover:shadow-xl"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={item.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-agro-leaf">
                  {item.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <time className="text-xs font-medium uppercase tracking-wide text-neutral-400">
                  {item.date}
                </time>
                <h3 className="mt-2 font-display text-xl font-normal leading-snug text-agro-forest">
                  {item.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-neutral-500">{item.excerpt}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12">
          <a
            href="#news"
            className="inline-block rounded-full border border-agro-leaf px-7 py-3 text-sm font-semibold text-agro-leaf transition-colors hover:bg-agro-leaf hover:text-white"
          >
            {news.viewMore}
          </a>
        </div>
      </div>
    </section>
  );
}
