"use client";

import { useState } from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { getSiteConfig } from "@/data/site";
import type { AppLocale } from "@/i18n/routing";
import type { GalleryVideo } from "@/types/content";
import VideoModal from "@/components/ui/VideoModal";

function PlayIcon({ size = "w-6 h-6" }: { size?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`ml-0.5 ${size}`}>
      <path d="M8 5.14v13.72a1 1 0 0 0 1.5.86l11-6.86a1 1 0 0 0 0-1.72l-11-6.86a1 1 0 0 0-1.5.86Z" />
    </svg>
  );
}

export default function VideoShowcase() {
  const locale = useLocale() as AppLocale;
  const siteConfig = getSiteConfig(locale);
  const t = useTranslations("home.videoShowcase");

  const [activeVideo, setActiveVideo] = useState<GalleryVideo | null>(null);

  const videos = siteConfig.mediaPages.galleryVideos;
  if (!videos || videos.length === 0) return null;

  const [featuredVideo, ...companionVideos] = videos;

  return (
    <section className="py-24 bg-neutral-900 text-white relative overflow-hidden">
      {/* Subtle ambient brand color glow */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-[#0045a0]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#097b33]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#097b33]/30 bg-[#097b33]/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#22c55e]">
            {t("badge")}
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            {t("headingPrefix")} <span className="text-[#22c55e]">{t("headingHighlight")}</span>
          </h2>
          <div className="mt-4 flex items-center justify-center gap-2">
            <span className="h-1 w-12 rounded-full bg-[#0045a0]" />
            <span className="h-1 w-8 rounded-full bg-[#097b33]" />
          </div>
          <p className="mt-4 text-neutral-300 max-w-2xl mx-auto text-base sm:text-lg">
            {t("subtitle")}
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Featured Video: Highlighted Auto Rice Mill */}
          {featuredVideo && (
            <div
              className="lg:col-span-2 group relative flex flex-col justify-end overflow-hidden rounded-3xl bg-neutral-950 border border-neutral-800 shadow-2xl min-h-[420px] lg:min-h-[500px] transition-all hover:border-[#0045a0]/60 hover:shadow-[#0045a0]/20"
            >
              <Image
                src={featuredVideo.thumbnail}
                alt={featuredVideo.title}
                fill
                sizes="(min-width: 1024px) 66vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-neutral-950/10" />

              {/* Featured Badge */}
              <div className="absolute top-6 left-6 z-10 flex items-center gap-2">
                <span className="rounded-full bg-[#097b33] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-lg">
                  {t("featuredBadge")}
                </span>
                <span className="rounded-full bg-white/20 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-white">
                  {t("companyRiceMill")}
                </span>
              </div>

              {/* Pulsating Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute -inset-4 rounded-full bg-[#0045a0]/40 animate-ping" />
                  <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-white text-[#0045a0] shadow-2xl transition-transform duration-300 group-hover:scale-115">
                    <PlayIcon size="w-8 h-8" />
                  </div>
                </div>
              </div>

              {/* Video Info Overlay */}
              <div className="relative p-8 z-10">
                <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                  {featuredVideo.title}
                </h3>
                {featuredVideo.description && (
                  <p className="mt-3 text-sm sm:text-base text-neutral-300 max-w-2xl leading-relaxed">
                    {featuredVideo.description}
                  </p>
                )}
                <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-emerald-400">
                  <span>{t("watchVideo")}</span>
                  <span className="group-hover:translate-x-1 transition-transform" aria-hidden="true">→</span>
                </div>
              </div>
              {/* Whole card is one real button (keyboard + screen-reader reachable). */}
              <button
                type="button"
                onClick={() => setActiveVideo(featuredVideo)}
                aria-haspopup="dialog"
                aria-label={`${t("watchVideo")}: ${featuredVideo.title}`}
                className="absolute inset-0 z-20 cursor-pointer rounded-3xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              />
            </div>
          )}

          {/* Secondary Companion Videos: Vehicle Solutions & Daily Bazar */}
          <div className="flex flex-col gap-8">
            {companionVideos.map((video, idx) => (
              <div
                key={video.title}
                className="group relative flex flex-col justify-end overflow-hidden rounded-3xl bg-neutral-950 border border-neutral-800 shadow-xl min-h-[230px] flex-1 transition-all hover:border-[#097b33]/60"
              >
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105 opacity-75"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/50 to-neutral-950/10" />

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#0045a0] shadow-xl transition-transform duration-300 group-hover:scale-115">
                    <PlayIcon size="w-6 h-6" />
                  </div>
                </div>

                <div className="relative p-6 z-10">
                  <span className="inline-block w-fit rounded-full bg-[#0045a0]/80 backdrop-blur-sm px-2.5 py-0.5 text-xs font-semibold text-white mb-2">
                    {idx === 0 ? t("companyVehicle") : t("companyBazar")}
                  </span>
                  <h4 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors line-clamp-2">
                    {video.title}
                  </h4>
                  <div className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
                    <span>{t("watchVideo")}</span>
                    <span aria-hidden="true">→</span>
                  </div>
                </div>
                {/* Whole card is one real button (keyboard + screen-reader reachable). */}
                <button
                  type="button"
                  onClick={() => setActiveVideo(video)}
                  aria-haspopup="dialog"
                  aria-label={`${t("watchVideo")}: ${video.title}`}
                  className="absolute inset-0 z-20 cursor-pointer rounded-3xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                />
              </div>
            ))}
          </div>
        </div>

        {/* View All Videos Button */}
        <div className="mt-14 text-center">
          <Link
            href="/media/gallery"
            className="inline-flex items-center gap-2 rounded-full border border-neutral-700 bg-neutral-800/80 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-[#0045a0] hover:border-[#0045a0] shadow-md"
          >
            {t("viewAllMedia")}
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>

      {activeVideo && <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />}
    </section>
  );
}
