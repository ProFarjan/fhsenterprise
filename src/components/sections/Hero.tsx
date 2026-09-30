"use client";

import { useEffect, useState, useRef } from "react";
import { useLocale, useTranslations } from "next-intl";
import { getSiteConfig } from "@/data/site";
import type { AppLocale } from "@/i18n/routing";

const AUTOPLAY_INTERVAL_MS = 7000;

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
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Autoplay timer
  useEffect(() => {
    if (!hasMultipleSlides) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, AUTOPLAY_INTERVAL_MS);
    return () => clearInterval(id);
  }, [hasMultipleSlides, slides.length]);

  // Handle active video playback cleanly
  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return;
      if (i === index) {
        video.currentTime = 0;
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            // Autoplay policies might require mute (already muted)
          });
        }
      } else {
        video.pause();
      }
    });
  }, [index]);

  const goPrev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const goNext = () => setIndex((i) => (i + 1) % slides.length);

  const slide = slides[index];

  return (
    <section id="home" className="relative isolate overflow-hidden bg-neutral-950">
      {/* Background Videos for each company */}
      {slides.map((s, i) => (
        <video
          key={`${s.videoSrc}-${i}`}
          ref={(el) => {
            videoRefs.current[i] = el;
          }}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
            i === index ? "opacity-100 scale-100" : "opacity-0 pointer-events-none"
          }`}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src={s.videoSrc} type="video/mp4" />
        </video>
      ))}

      {/* Scrim with FHS Blue & Green subtle gradient tint */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/60 pointer-events-none" />

      {/* Slide Content */}
      <div className="relative flex min-h-[85vh] flex-col items-center justify-center px-6 pb-24 pt-32 text-center sm:min-h-screen sm:pt-36 lg:px-8 z-10">
        {/* Slide Counter Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-4 py-1.5 backdrop-blur-md">
          <span className="h-2 w-2 rounded-full bg-[#22c55e] animate-pulse" />
          <span className="text-xs font-bold uppercase tracking-widest text-white/90">
            0{index + 1} / 0{slides.length} — FHS Enterprise Concerns
          </span>
        </div>

        <h1 className="mx-auto max-w-4xl text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl leading-tight">
          {slide.title}
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg sm:text-xl leading-relaxed text-neutral-200">
          {slide.subtitle}
        </p>
      </div>

      {/* Navigation Controls */}
      {hasMultipleSlides && (
        <>
          <div className="absolute bottom-8 left-6 z-20 flex items-center gap-2 lg:left-8">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={t("goToSlide", { n: i + 1 })}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === index ? "w-8 bg-[#22c55e]" : "w-2.5 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>

          <div className="absolute bottom-6 right-6 z-20 flex items-center gap-3 lg:right-8">
            <button
              type="button"
              onClick={goPrev}
              aria-label={t("prevSlide")}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-neutral-900 shadow-lg backdrop-blur-sm transition-all hover:bg-white hover:scale-105 active:scale-95"
            >
              <ArrowIcon direction="left" />
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-label={t("nextSlide")}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0045a0] text-white shadow-lg backdrop-blur-sm transition-all hover:bg-[#003680] hover:scale-105 active:scale-95"
            >
              <ArrowIcon direction="right" />
            </button>
          </div>
        </>
      )}
    </section>
  );
}
