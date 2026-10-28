"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import type { CompanyHeroSlide } from "@/lib/publicContent";

function Arrow({ dir }: { dir: "left" | "right" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
    >
      {dir === "left" ? <path d="m15 18-6-6 6-6" /> : <path d="m9 18 6-6-6-6" />}
    </svg>
  );
}

const AUTOPLAY_MS = 6000;

// Generic full-bleed hero slideshow driven by a subsidiary's admin-managed
// hero gallery (see /admin/companies). Deliberately simpler than each
// subsidiary's bespoke static hero (AgritechHeroSlider, FeedHeroSlider, …) —
// no eyebrow badge, no per-slide CTA button, since the admin-managed gallery
// only captures an image, headline, and tagline per slide. Each
// companies/<subdomain>/page.tsx renders this when the company has 1+ hero
// images in the database, falling back to its original static hero when it
// has none.
export default function HeroSlideshow({ slides }: { slides: CompanyHeroSlide[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = slides.length;

  const go = useCallback((next: number) => setIndex(((next % count) + count) % count), [count]);

  useEffect(() => {
    if (paused || count <= 1) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % count), AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused, count]);

  if (count === 0) return null;

  return (
    <section
      className="relative isolate h-[86vh] min-h-[560px] overflow-hidden bg-neutral-900"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
    >
      {slides.map((slide, i) => (
        <div
          key={slide.id}
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
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10" />
        </div>
      ))}

      {slides.some((s) => s.headline || s.tagline) && (
        <div className="relative z-10 mx-auto flex h-full max-w-6xl items-end px-6 pb-20 lg:px-8">
          <div className="max-w-2xl">
            {slides.map((slide, i) => (
              <div
                key={slide.id}
                className={`transition-all duration-700 ${i === index ? "block opacity-100" : "hidden opacity-0"}`}
              >
                {slide.headline && (
                  <h1 className="text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
                    {slide.headline}
                  </h1>
                )}
                {slide.tagline && (
                  <p className="mt-5 max-w-xl text-base leading-7 text-white/85 sm:text-lg">
                    {slide.tagline}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {count > 1 && (
        <>
          <button
            type="button"
            onClick={() => go(index - 1)}
            aria-label="Previous slide"
            className="absolute top-1/2 left-4 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/20 text-white backdrop-blur transition-colors hover:bg-white/15 lg:left-8"
          >
            <Arrow dir="left" />
          </button>
          <button
            type="button"
            onClick={() => go(index + 1)}
            aria-label="Next slide"
            className="absolute top-1/2 right-4 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/20 text-white backdrop-blur transition-colors hover:bg-white/15 lg:right-8"
          >
            <Arrow dir="right" />
          </button>

          <div className="absolute bottom-8 left-6 z-20 flex items-center gap-2.5 lg:left-8">
            {slides.map((slide, i) => (
              <button
                key={slide.id}
                type="button"
                onClick={() => go(i)}
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === index}
                className={`h-2.5 rounded-full transition-all ${i === index ? "w-8 bg-white" : "w-2.5 bg-white/40 hover:bg-white/70"}`}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
