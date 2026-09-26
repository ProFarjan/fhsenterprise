import Image from "next/image";
import type { FillingContent } from "@/types/filling";

// "Why MR" band: an eyebrow beside a large statement + CTA, then two photo cards
// each headlined by a big stat. Echoes the Soltera "benefits" section.
export default function FillingHighlights({
  highlights,
}: {
  highlights: FillingContent["highlights"];
}) {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:items-start lg:gap-16">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-fuel-blue">
            <span className="h-px w-8 bg-fuel-blue" />
            {highlights.eyebrow}
          </span>
          <div>
            <h2 className="text-2xl font-semibold leading-snug tracking-tight text-fuel-ink sm:text-3xl">
              {highlights.heading}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-fuel-steel">{highlights.body}</p>
            <a
              href="#contact"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-fuel-ink px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-fuel-slate"
            >
              {highlights.cta}
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/15">→</span>
            </a>
          </div>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {highlights.cards.map((card) => (
            <article
              key={card.label}
              className="group overflow-hidden rounded-3xl bg-fuel-mist ring-1 ring-fuel-line"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={card.image}
                  alt=""
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-7">
                <p className="font-fuel text-4xl font-extrabold text-fuel-ink sm:text-5xl">
                  {card.value}
                </p>
                <p className="mt-2 text-base font-semibold text-fuel-ink">{card.label}</p>
                <p className="mt-2 text-sm leading-6 text-fuel-steel">{card.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
