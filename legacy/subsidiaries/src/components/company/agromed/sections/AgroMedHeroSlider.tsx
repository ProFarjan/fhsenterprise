"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import type { AgroMedContent } from "@/types/agromed";

function Arrow({ dir }: { dir: "left" | "right" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d={dir === "left" ? "m15 6-6 6 6 6" : "m9 6 6 6-6 6"}
      />
    </svg>
  );
}

// Auto-rotating hero slider for the MR Agro Medicine home page. Each slide is
// tied to a species category and links its CTA to that category's product page.
export default function AgroMedHeroSlider({
  hero,
  viewAllLabel,
  locale,
}: {
  hero: AgroMedContent["hero"];
  viewAllLabel: string;
  locale: string;
}) {
  const slides = hero.slides;
  const count = slides.length;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = useCallback((next: number) => setIndex((next + count) % count), [count]);

  useEffect(() => {
    if (paused || count <= 1) return;
    const timer = setInterval(() => setIndex((i) => (i + 1) % count), 6000);
    return () => clearInterval(timer);
  }, [paused, count]);

  // Clean, subdomain-relative base — the proxy rewrites it to the internal
  // /companies/agro-medicine path (see FeedProductCard).
  const base = `/${locale}`;

  return (
    <section
      className="relative isolate overflow-hidden bg-vet-deep"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
    >
      <div className="relative min-h-[560px] lg:min-h-[86vh]">
        {slides.map((slide, i) => (
          <div
            key={slide.title}
            className={`absolute inset-0 transition-opacity duration-700 ease-out ${
              i === index ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
            aria-hidden={i !== index}
          >
            <Image
              src={slide.image}
              alt=""
              fill
              priority={i === 0}
              sizes="100vw"
              className={`object-cover transition-transform duration-[7000ms] ease-out ${
                i === index ? "scale-105" : "scale-100"
              }`}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-vet-deep/95 via-vet-deep/70 to-vet-deep/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-vet-deep/80 via-transparent to-transparent" />
          </div>
        ))}

        {/* Slide content */}
        <div className="relative mx-auto flex min-h-[560px] max-w-6xl items-center px-6 lg:min-h-[86vh] lg:px-8">
          {slides.map((slide, i) => (
            <div
              key={slide.title}
              className={`max-w-xl transition-all duration-700 ${
                i === index ? "opacity-100 translate-y-0" : "pointer-events-none absolute opacity-0 translate-y-4"
              }`}
              aria-hidden={i !== index}
            >
              <span className="inline-flex items-center gap-2.5 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-vet-lime backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-vet-lime" />
                {slide.eyebrow}
              </span>
              <h1 className="mt-6 font-vet text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
                {slide.title}
              </h1>
              <p className="mt-5 max-w-lg text-base leading-7 text-teal-50/90 sm:text-lg">
                {slide.subtitle}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href={`${base}/products/${slide.ctaCategory}`}
                  className="inline-flex items-center gap-2 rounded-full bg-vet-lime px-6 py-3 text-sm font-semibold text-vet-deep transition-colors hover:bg-white"
                >
                  {slide.ctaLabel}
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-vet-deep text-white">→</span>
                </a>
                <a
                  href={`${base}/products`}
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  {viewAllLabel}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <div className="absolute inset-x-0 bottom-6 z-10 mx-auto flex max-w-6xl items-center justify-between px-6 lg:px-8">
          <div className="flex items-center gap-2.5">
            {slides.map((slide, i) => (
              <button
                key={slide.title}
                type="button"
                onClick={() => go(i)}
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === index}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? "w-8 bg-vet-lime" : "w-4 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
          <div className="hidden items-center gap-2 sm:flex">
            <button
              type="button"
              onClick={() => go(index - 1)}
              aria-label="Previous slide"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:bg-white/10"
            >
              <Arrow dir="left" />
            </button>
            <button
              type="button"
              onClick={() => go(index + 1)}
              aria-label="Next slide"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:bg-white/10"
            >
              <Arrow dir="right" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
