"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import type { AppLocale } from "@/i18n/routing";
import type { LubeHeroSlide } from "@/types/mrlube";

function Arrow({ dir }: { dir: "left" | "right" }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      {dir === "left" ? <path d="m15 18-6-6 6-6" /> : <path d="m9 18 6-6-6-6" />}
    </svg>
  );
}

const AUTOPLAY_MS = 6000;

// Full-bleed autoplaying hero slider for the MR Lube homepage. Modelled on
// AgritechHeroSlider but restyled for the dark racing-red identity — carbon
// backdrop, a skewed red accent tab, and uppercase display headings.
export default function LubeHeroSlider({
  slides,
  locale,
}: {
  slides: LubeHeroSlide[];
  locale: AppLocale;
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = slides.length;
  const resolveHref = (href: string) => (href.startsWith("#") ? href : `/${locale}${href === "/" ? "" : href}`);

  const go = useCallback((next: number) => setIndex(((next % count) + count) % count), [count]);

  useEffect(() => {
    if (paused || count <= 1) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % count), AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused, count]);

  return (
    <section
      className="relative isolate h-[86vh] min-h-[560px] overflow-hidden bg-lube-cream"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
    >
      {slides.map((slide, i) => (
        <div
          key={slide.image}
          className={`absolute inset-0 transition-opacity duration-1000 ease-out ${i === index ? "opacity-100" : "opacity-0"}`}
          aria-hidden={i !== index}
        >
          <Image
            src={slide.image}
            alt=""
            fill
            priority={i === 0}
            sizes="100vw"
            className={`object-cover transition-transform duration-[7000ms] ease-out ${i === index ? "scale-105" : "scale-100"}`}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-lube-cream via-lube-cream/80 to-lube-cream/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-lube-cream/90 via-transparent to-transparent" />
        </div>
      ))}

      <div className="relative z-10 mx-auto flex h-full max-w-6xl items-center px-6 lg:px-8">
        <div className="max-w-2xl">
          {slides.map((slide, i) => (
            <div
              key={slide.image}
              className={`transition-all duration-700 ${i === index ? "block opacity-100" : "hidden opacity-0"}`}
            >
              <span className="inline-flex items-center gap-2.5 bg-lube-red px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-white [clip-path:polygon(0_0,100%_0,94%_100%,0%_100%)]">
                {slide.eyebrow}
              </span>
              <h1 className="mt-6 font-lube text-4xl font-extrabold uppercase leading-[1.02] tracking-tight text-lube-ink sm:text-6xl lg:text-7xl">
                {slide.headingLead}{" "}
                <span className="text-lube-red">{slide.headingEmphasis}</span>
                {slide.headingTail ? ` ${slide.headingTail}` : ""}
              </h1>
              <p className="mt-6 max-w-xl text-base leading-7 text-lube-slate sm:text-lg">{slide.body}</p>
              <div className="mt-8">
                <a
                  href={resolveHref(slide.ctaHref)}
                  className="inline-flex items-center gap-2 rounded-sm bg-lube-red px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-white shadow-lg shadow-lube-red/30 transition-colors hover:bg-lube-red-dark"
                >
                  {slide.ctaLabel}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Arrows — one on each side, vertically centered */}
      <button
        type="button"
        onClick={() => go(index - 1)}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-sm border border-lube-line bg-white/70 text-lube-ink backdrop-blur transition-colors hover:border-lube-red hover:text-lube-red lg:left-8"
      >
        <Arrow dir="left" />
      </button>
      <button
        type="button"
        onClick={() => go(index + 1)}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-sm border border-lube-line bg-white/70 text-lube-ink backdrop-blur transition-colors hover:border-lube-red hover:text-lube-red lg:right-8"
      >
        <Arrow dir="right" />
      </button>

      {/* Status bars — bottom-left corner */}
      <div className="absolute bottom-8 left-6 z-20 flex items-center gap-2 lg:left-8">
        {slides.map((slide, i) => (
          <button
            key={slide.image}
            type="button"
            onClick={() => go(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === index}
            className={`h-1.5 transition-all ${i === index ? "w-10 bg-lube-red" : "w-5 bg-lube-ink/25 hover:bg-lube-ink/50"}`}
          />
        ))}
      </div>
    </section>
  );
}
