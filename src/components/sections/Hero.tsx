"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import Image from "next/image";
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
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d={direction === "left" ? "M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" : "M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"}
      />
    </svg>
  );
}

function PauseIcon({ paused }: { paused: boolean }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
      {paused ? (
        <path d="M8 5.14v13.72a1 1 0 0 0 1.5.86l11-6.86a1 1 0 0 0 0-1.72l-11-6.86a1 1 0 0 0-1.5.86Z" />
      ) : (
        <path d="M7 5h3.5v14H7zM13.5 5H17v14h-3.5z" />
      )}
    </svg>
  );
}

// "Should we avoid autoplaying video / auto-advancing slides?" — true for people
// who ask their OS for reduced motion, and for browsers with Data Saver on (the
// hero videos are several MB each). Read through useSyncExternalStore so the
// server render (no video, poster only) and the first client render agree, and
// the page reacts if the setting changes while it's open.
type NetworkInformation = EventTarget & { saveData?: boolean };
const reducedMotionQuery = "(prefers-reduced-motion: reduce)";

function subscribeToMotionPreference(onChange: () => void) {
  const query = window.matchMedia(reducedMotionQuery);
  const connection = (navigator as Navigator & { connection?: NetworkInformation }).connection;
  query.addEventListener("change", onChange);
  connection?.addEventListener("change", onChange);
  return () => {
    query.removeEventListener("change", onChange);
    connection?.removeEventListener("change", onChange);
  };
}

function getAvoidMotion() {
  const connection = (navigator as Navigator & { connection?: NetworkInformation }).connection;
  return window.matchMedia(reducedMotionQuery).matches || connection?.saveData === true;
}

export default function Hero() {
  const locale = useLocale() as AppLocale;
  const slides = getSiteConfig(locale).hero;
  const t = useTranslations("hero");
  const [index, setIndex] = useState(0);
  const [userPaused, setUserPaused] = useState(false);
  const [videoReadyFor, setVideoReadyFor] = useState<number | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const hasMultipleSlides = slides.length > 1;

  const avoidMotion = useSyncExternalStore(subscribeToMotionPreference, getAvoidMotion, () => true);
  // Moving content that starts on its own must be pausable (WCAG 2.2.2), and
  // never starts at all for visitors who asked for less motion.
  const playing = !avoidMotion && !userPaused;

  // Auto-advance only while playing.
  useEffect(() => {
    if (!hasMultipleSlides || !playing) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), AUTOPLAY_INTERVAL_MS);
    return () => clearInterval(id);
  }, [hasMultipleSlides, playing, slides.length]);

  // Pausing the slideshow also pauses the video underneath it.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (playing) video.play().catch(() => {});
    else video.pause();
  }, [playing, index]);

  const goPrev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const goNext = () => setIndex((i) => (i + 1) % slides.length);

  const slide = slides[index];
  const counter = new Intl.NumberFormat(locale === "bn" ? "bn-BD" : "en", { minimumIntegerDigits: 2 });

  return (
    <section
      id="home"
      aria-roledescription="carousel"
      aria-label={t("carouselLabel")}
      className="relative isolate overflow-hidden bg-neutral-950"
    >
      {/* Poster for every slide: small images that crossfade, so the slideshow
          works without any video (reduced motion, Data Saver, slow networks). */}
      {slides.map((s, i) => (
        <Image
          key={s.poster}
          src={s.poster}
          alt=""
          fill
          priority={i === 0}
          sizes="100vw"
          className={`object-cover transition-opacity duration-1000 ${i === index ? "opacity-100" : "opacity-0"}`}
        />
      ))}

      {/* Only the ACTIVE slide's video is ever in the page, and none at all when
          motion should be avoided — previously all three (≈19 MB) preloaded at
          once on every visit. It fades in over the poster once it is playing. */}
      {!avoidMotion && (
        <video
          key={slide.videoSrc}
          ref={videoRef}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            videoReadyFor === index ? "opacity-100" : "opacity-0"
          }`}
          poster={slide.poster}
          autoPlay={playing}
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          onPlaying={() => setVideoReadyFor(index)}
        >
          <source src={slide.videoSrc} type="video/mp4" />
        </video>
      )}

      {/* Scrim with FHS Blue & Green subtle gradient tint */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/60" />

      {/* Slide Content — announced politely only when the user is driving it */}
      <div
        aria-live={playing ? "off" : "polite"}
        className="relative z-10 flex min-h-[85vh] flex-col items-center justify-center px-6 pb-24 pt-32 text-center sm:min-h-screen sm:pt-36 lg:px-8"
      >
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-4 py-1.5 backdrop-blur-md">
          <span className="h-2 w-2 animate-pulse rounded-full bg-[#22c55e] motion-reduce:animate-none" />
          <span className="text-xs font-bold uppercase tracking-widest text-white/90">
            {counter.format(index + 1)} / {counter.format(slides.length)} — {t("concerns")}
          </span>
        </div>

        <h1 className="mx-auto max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
          {slide.title}
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-neutral-200 sm:text-xl">
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
                aria-current={i === index ? "true" : undefined}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === index ? "w-8 bg-[#22c55e]" : "w-2.5 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>

          <div className="absolute bottom-6 right-6 z-20 flex items-center gap-3 lg:right-8">
            {!avoidMotion && (
              <button
                type="button"
                onClick={() => setUserPaused((p) => !p)}
                aria-label={userPaused ? t("playSlideshow") : t("pauseSlideshow")}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-black/50 text-white shadow-lg backdrop-blur-sm transition-all hover:bg-black/70"
              >
                <PauseIcon paused={userPaused} />
              </button>
            )}
            <button
              type="button"
              onClick={goPrev}
              aria-label={t("prevSlide")}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-neutral-900 shadow-lg backdrop-blur-sm transition-all hover:scale-105 hover:bg-white active:scale-95"
            >
              <ArrowIcon direction="left" />
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-label={t("nextSlide")}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0045a0] text-white shadow-lg backdrop-blur-sm transition-all hover:scale-105 hover:bg-[#003680] active:scale-95"
            >
              <ArrowIcon direction="right" />
            </button>
          </div>
        </>
      )}
    </section>
  );
}
