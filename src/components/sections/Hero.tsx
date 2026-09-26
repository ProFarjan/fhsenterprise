"use client";

import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { getSiteConfig } from "@/data/site";
import type { AppLocale } from "@/i18n/routing";

const AUTOPLAY_INTERVAL_MS = 6000;

function ArrowIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="h-4 w-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d={direction === "left" ? "M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" : "M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"}
      />
    </svg>
  );
}

export default function Hero() {
  const slides = getSiteConfig(useLocale() as AppLocale).hero;
  const t = useTranslations("hero");
  const [index, setIndex] = useState(0);
  const hasMultipleSlides = slides.length > 1;

  useEffect(() => {
    if (!hasMultipleSlides) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, AUTOPLAY_INTERVAL_MS);
    return () => clearInterval(id);
  }, [hasMultipleSlides, slides.length]);

  const goPrev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const goNext = () => setIndex((i) => (i + 1) % slides.length);

  const slide = slides[index];

  return (
    <section id="home" className="relative isolate overflow-hidden bg-neutral-900">
      {slides.map((s, i) => (
        <video
          key={s.videoSrc}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={s.videoSrc} type="video/mp4" />
        </video>
      ))}

      {/* Scrim so white text stays readable over any video */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/50" />

      <div className="relative flex min-h-[85vh] flex-col items-center justify-center px-6 pb-24 pt-32 text-center sm:min-h-screen sm:pt-36 lg:px-8">
        <h1 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-6xl">
          {slide.title}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-neutral-200">
          {slide.subtitle}
        </p>
      </div>

      {hasMultipleSlides && (
        <>
          <div className="absolute bottom-8 left-6 z-10 flex items-center gap-2 lg:left-8">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={t("goToSlide", { n: i + 1 })}
                className={`h-2 rounded-full transition-all ${
                  i === index ? "w-6 bg-orange-500" : "w-2 bg-white/50 hover:bg-white/80"
                }`}
              />
            ))}
          </div>

          <div className="absolute bottom-6 right-6 z-10 flex items-center gap-3 lg:right-8">
            <button
              type="button"
              onClick={goPrev}
              aria-label={t("prevSlide")}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-neutral-900 shadow-md transition-colors hover:bg-neutral-100"
            >
              <ArrowIcon direction="left" />
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-label={t("nextSlide")}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-600 text-white shadow-md transition-colors hover:bg-orange-500"
            >
              <ArrowIcon direction="right" />
            </button>
          </div>
        </>
      )}
    </section>
  );
}
