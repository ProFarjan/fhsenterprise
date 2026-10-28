"use client";

import { useId, useState } from "react";
import { useTranslations } from "next-intl";
import type { PublicGalleryPhoto, PublicGalleryVideo } from "@/lib/publicContent";
import VideoModal from "@/components/ui/VideoModal";

function PlayIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="ml-0.5 h-6 w-6 text-[#0045a0]">
      <path d="M8 5.14v13.72a1 1 0 0 0 1.5.86l11-6.86a1 1 0 0 0 0-1.72l-11-6.86a1 1 0 0 0-1.5.86Z" />
    </svg>
  );
}

export default function GalleryTabs({
  photos,
  videos,
  labels,
}: {
  photos: PublicGalleryPhoto[];
  videos: PublicGalleryVideo[];
  labels: { photos: string; videos: string; noPhotos: string; noVideos: string };
}) {
  const t = useTranslations("common");
  const [tab, setTab] = useState<"photos" | "videos">("videos");
  const [activeVideo, setActiveVideo] = useState<PublicGalleryVideo | null>(null);
  const baseId = useId();
  const tabId = (name: string) => `${baseId}-tab-${name}`;
  const panelId = `${baseId}-panel`;

  return (
    <>
      <div className="flex justify-center">
        <div role="tablist" className="inline-flex gap-1.5 rounded-full border border-neutral-200 bg-white p-1.5 shadow-sm">
          <button
            type="button"
            role="tab"
            id={tabId("videos")}
            aria-selected={tab === "videos"}
            aria-controls={panelId}
            onClick={() => setTab("videos")}
            className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-colors ${
              tab === "videos" ? "bg-[#0045a0] text-white shadow-sm" : "text-neutral-600 hover:bg-neutral-100"
            }`}
          >
            {labels.videos}
          </button>
          <button
            type="button"
            role="tab"
            id={tabId("photos")}
            aria-selected={tab === "photos"}
            aria-controls={panelId}
            onClick={() => setTab("photos")}
            className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-colors ${
              tab === "photos" ? "bg-[#0045a0] text-white shadow-sm" : "text-neutral-600 hover:bg-neutral-100"
            }`}
          >
            {labels.photos}
          </button>
        </div>
      </div>

      <div role="tabpanel" id={panelId} aria-labelledby={tabId(tab)}>
      {tab === "photos" ? (
        photos.length > 0 ? (
          <div className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3">
            {photos.map((photo) => (
              <div
                key={photo.id}
                className="group relative mb-5 overflow-hidden rounded-3xl break-inside-avoid shadow-sm border border-neutral-100"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={photo.image}
                  alt={photo.caption}
                  loading="lazy"
                  decoding="async"
                  className="h-auto w-full transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/80 via-black/20 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="p-5 text-sm font-semibold text-white leading-relaxed">{photo.caption}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="mt-10 text-center text-neutral-500">{labels.noPhotos}</p>
        )
      ) : videos.length > 0 ? (
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((video, idx) => (
            <div
              key={video.id}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-neutral-900 shadow-md transition-all hover:-translate-y-1 hover:shadow-2xl border border-neutral-200"
            >
              <div className="relative h-56 w-full overflow-hidden">
                {/* YouTube's hqdefault thumbnails are always 480x360 — declaring it avoids layout shift. */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={video.thumbnail}
                  alt=""
                  width={480}
                  height={360}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />

                {idx === 0 && (
                  <span className="absolute top-4 left-4 z-10 rounded-full bg-[#097b33] px-3 py-1 text-xs font-bold uppercase tracking-wider text-white shadow">
                    {t("featured")}
                  </span>
                )}

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/95 shadow-xl transition-transform duration-300 group-hover:scale-115">
                    <PlayIcon />
                  </div>
                </div>
              </div>

              <div className="p-6 bg-white flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-base font-bold text-neutral-900 group-hover:text-[#0045a0] transition-colors leading-snug">
                    {video.title}
                  </h3>
                  {video.description && (
                    <p className="mt-2 text-xs text-neutral-600 line-clamp-2 leading-relaxed">
                      {video.description}
                    </p>
                  )}
                </div>

                <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between text-xs font-semibold text-[#0045a0]">
                  <span>{t("watchVideo")}</span>
                  <span className="text-neutral-400 group-hover:translate-x-1 transition-transform" aria-hidden="true">→</span>
                </div>
              </div>

              {/* Whole card is one real button (keyboard + screen-reader reachable). */}
              <button
                type="button"
                onClick={() => setActiveVideo(video)}
                aria-haspopup="dialog"
                aria-label={`${t("watchVideo")}: ${video.title}`}
                className="absolute inset-0 z-20 cursor-pointer rounded-3xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0045a0] focus-visible:ring-offset-2"
              />
            </div>
          ))}
        </div>
      ) : (
        <p className="mt-10 text-center text-neutral-500">{labels.noVideos}</p>
      )}
      </div>

      {activeVideo && <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />}
    </>
  );
}
