"use client";

import { useState } from "react";
import type { PublicGalleryPhoto, PublicGalleryVideo } from "@/lib/publicContent";

function PlayIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="ml-0.5 h-6 w-6 text-[#0045a0]">
      <path d="M8 5.14v13.72a1 1 0 0 0 1.5.86l11-6.86a1 1 0 0 0 0-1.72l-11-6.86a1 1 0 0 0-1.5.86Z" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
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
  const [tab, setTab] = useState<"photos" | "videos">("videos");
  const [activeVideo, setActiveVideo] = useState<PublicGalleryVideo | null>(null);

  return (
    <>
      <div className="flex justify-center">
        <div className="inline-flex gap-1.5 rounded-full border border-neutral-200 bg-white p-1.5 shadow-sm">
          <button
            type="button"
            onClick={() => setTab("videos")}
            className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-colors ${
              tab === "videos" ? "bg-[#0045a0] text-white shadow-sm" : "text-neutral-600 hover:bg-neutral-100"
            }`}
          >
            {labels.videos}
          </button>
          <button
            type="button"
            onClick={() => setTab("photos")}
            className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-colors ${
              tab === "photos" ? "bg-[#0045a0] text-white shadow-sm" : "text-neutral-600 hover:bg-neutral-100"
            }`}
          >
            {labels.photos}
          </button>
        </div>
      </div>

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
              onClick={() => setActiveVideo(video)}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-neutral-900 shadow-md cursor-pointer transition-all hover:-translate-y-1 hover:shadow-2xl border border-neutral-200"
            >
              <div className="relative h-56 w-full overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />

                {idx === 0 && (
                  <span className="absolute top-4 left-4 z-10 rounded-full bg-[#097b33] px-3 py-1 text-xs font-bold uppercase tracking-wider text-white shadow">
                    Featured
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
                  <span>Watch Video</span>
                  <span className="text-neutral-400 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="mt-10 text-center text-neutral-500">{labels.noVideos}</p>
      )}

      {/* Video Modal Player */}
      {activeVideo && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-full max-w-4xl overflow-hidden rounded-3xl bg-neutral-950 p-4 shadow-2xl border border-neutral-800"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveVideo(null)}
              className="absolute top-4 right-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              aria-label="Close video player"
            >
              <CloseIcon />
            </button>

            <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-black">
              {activeVideo.videoUrl ? (
                <video
                  src={activeVideo.videoUrl}
                  controls
                  autoPlay
                  playsInline
                  className="h-full w-full object-contain"
                />
              ) : activeVideo.youtubeUrl ? (
                <iframe
                  src={activeVideo.youtubeUrl.replace("watch?v=", "embed/")}
                  title={activeVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full border-0"
                />
              ) : null}
            </div>

            <div className="mt-4 p-2 text-white">
              <h3 className="text-xl font-bold">{activeVideo.title}</h3>
              {activeVideo.description && (
                <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
                  {activeVideo.description}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
