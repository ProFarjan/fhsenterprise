"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import type { AppLocale } from "@/i18n/routing";
import type { RahimHeroSlide } from "@/types/rahim";

function Arrow({ dir }: { dir: "left" | "right" }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      {dir === "left" ? <path d="m15 18-6-6 6-6" /> : <path d="m9 18 6-6-6-6" />}
    </svg>
  );
}

const AUTOPLAY_MS = 6000;

// Full-bleed autoplaying hero slider for the Rahim Enterprise homepage.
// Modelled on the sibling hero sliders — a light frost backdrop, slate
// display heading with a cyan emphasis, and a cyan CTA.
export default function RahimHeroSlider({
  slides,
  locale,
}: {
  slides: RahimHeroSlide[];
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
      className="relative isolate h-[86vh] min-h-[560px] overflow-hidden bg-rahim-frost"
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
          <div className="absolute inset-0 bg-gradient-to-r from-rahim-frost via-rahim-frost/80 to-rahim-frost/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-rahim-frost/90 via-transparent to-transparent" />
        </div>
      ))}

      <div className="relative z-10 mx-auto flex h-full max-w-6xl items-center px-6 lg:px-8">
        <div className="max-w-2xl">
          {slides.map((slide, i) => (
            <div
              key={slide.image}
              className={`transition-all duration-700 ${i === index ? "block opacity-100" : "hidden opacity-0"}`}
            >
              <span className="inline-flex items-center gap-2.5 rounded-full bg-rahim-cyan/12 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-rahim-cyan-dark ring-1 ring-rahim-cyan/25">
                <span className="h-1.5 w-1.5 rounded-full bg-rahim-cyan" />
                {slide.eyebrow}
              </span>
              <h1 className="mt-6 font-rahim text-4xl font-bold leading-[1.05] tracking-tight text-rahim-slate sm:text-6xl lg:text-7xl">
                {slide.headingLead}{" "}
                <span className="text-rahim-cyan">{slide.headingEmphasis}</span>
                {slide.headingTail ? ` ${slide.headingTail}` : ""}
              </h1>
              <p className="mt-6 max-w-xl text-base leading-7 text-rahim-steel sm:text-lg">{slide.body}</p>
              <div className="mt-8">
                <a
                  href={resolveHref(slide.ctaHref)}
                  className="inline-flex items-center gap-2 rounded-full bg-rahim-cyan px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-rahim-cyan/30 transition-colors hover:bg-rahim-cyan-dark"
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
        className="absolute left-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-rahim-line bg-white/70 text-rahim-slate backdrop-blur transition-colors hover:border-rahim-cyan hover:text-rahim-cyan lg:left-8"
      >
        <Arrow dir="left" />
      </button>
      <button
        type="button"
        onClick={() => go(index + 1)}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-rahim-line bg-white/70 text-rahim-slate backdrop-blur transition-colors hover:border-rahim-cyan hover:text-rahim-cyan lg:right-8"
      >
        <Arrow dir="right" />
      </button>

      {/* Status dots — bottom-left corner */}
      <div className="absolute bottom-8 left-6 z-20 flex items-center gap-2.5 lg:left-8">
        {slides.map((slide, i) => (
          <button
            key={slide.image}
            type="button"
            onClick={() => go(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === index}
            className={`h-2.5 rounded-full transition-all ${i === index ? "w-8 bg-rahim-cyan" : "w-2.5 bg-rahim-slate/25 hover:bg-rahim-slate/50"}`}
          />
        ))}
      </div>
    </section>
  );
}
