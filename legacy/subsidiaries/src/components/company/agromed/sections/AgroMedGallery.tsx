"use client";

import { useEffect, useState } from "react";
import { extractYoutubeId } from "@/lib/youtube";
import type { PublicGalleryPhoto, PublicGalleryVideo } from "@/lib/publicContent";

function PlayIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="ml-0.5 h-6 w-6 text-vet-teal-dark">
      <path d="M8 5.14v13.72a1 1 0 0 0 1.5.86l11-6.86a1 1 0 0 0 0-1.72l-11-6.86a1 1 0 0 0-1.5.86Z" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
    >
      <path d="M6 18 18 6M6 6l12 12" />
    </svg>
  );
}

export default function AgroMedGallery({
  photos,
  videos,
  labels,
}: {
  photos: PublicGalleryPhoto[];
  videos: PublicGalleryVideo[];
  labels: { photos: string; videos: string; noPhotos: string; noVideos: string };
}) {
  const [tab, setTab] = useState<"photos" | "videos">("photos");
  const [activeVideo, setActiveVideo] = useState<PublicGalleryVideo | null>(null);

  useEffect(() => {
    if (!activeVideo) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveVideo(null);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = original;
      window.removeEventListener("keydown", onKey);
    };
  }, [activeVideo]);

  const embedUrl = activeVideo ? extractYoutubeId(activeVideo.youtubeUrl) : null;

  return (
    <>
      <div className="flex justify-center">
        <div className="inline-flex gap-1.5 rounded-full border border-vet-line bg-white p-1.5 shadow-sm">
          <button
            type="button"
            onClick={() => setTab("photos")}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
              tab === "photos" ? "bg-vet-teal text-white" : "text-vet-ink/70 hover:bg-vet-mist hover:text-vet-teal-dark"
            }`}
          >
            {labels.photos}
          </button>
          <button
            type="button"
            onClick={() => setTab("videos")}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
              tab === "videos" ? "bg-vet-teal text-white" : "text-vet-ink/70 hover:bg-vet-mist hover:text-vet-teal-dark"
            }`}
          >
            {labels.videos}
          </button>
        </div>
      </div>

      {tab === "photos" ? (
        photos.length > 0 ? (
          <div className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3">
            {photos.map((photo) => (
              <div
                key={photo.id}
                className="group relative mb-5 overflow-hidden rounded-2xl break-inside-avoid ring-1 ring-vet-line"
              >
                {/* eslint-disable-next-line @next/next/no-img-element -- masonry layout needs natural aspect ratios, which next/image can't fill with unknown dimensions */}
                <img
                  src={photo.image}
                  alt={photo.caption}
                  className="h-auto w-full transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-vet-deep/80 via-vet-deep/0 to-vet-deep/0 opacity-0 transition-opacity group-hover:opacity-100">
                  <p className="p-4 text-sm font-medium text-white">{photo.caption}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="mt-10 text-center text-vet-ink/60">{labels.noPhotos}</p>
        )
      ) : videos.length > 0 ? (
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((video) => (
            <button
              key={video.id}
              type="button"
              onClick={() => setActiveVideo(video)}
              className="group relative flex h-52 items-center justify-center overflow-hidden rounded-2xl text-left shadow-sm ring-1 ring-vet-line"
            >
              {/* eslint-disable-next-line @next/next/no-img-element -- external YouTube CDN thumbnail, not a local optimizable asset */}
              <img
                src={video.thumbnail}
                alt=""
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-vet-deep/30" />
              <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-white/95 shadow-lg transition-transform group-hover:scale-110">
                <PlayIcon />
              </div>
              <p className="absolute right-4 bottom-4 left-4 text-sm font-semibold text-white">
                {video.title}
              </p>
            </button>
          ))}
        </div>
      ) : (
        <p className="mt-10 text-center text-vet-ink/60">{labels.noVideos}</p>
      )}

      {activeVideo && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-vet-deep/80 p-4 backdrop-blur-sm"
          onClick={() => setActiveVideo(null)}
          role="dialog"
          aria-modal="true"
          aria-label={activeVideo.title}
        >
          <div
            className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-black shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveVideo(null)}
              className="absolute -top-2 right-2 -translate-y-full text-white/90 transition-colors hover:text-white"
              aria-label="Close video"
            >
              <CloseIcon />
            </button>
            {embedUrl ? (
              <div className="relative aspect-video w-full">
                <iframe
                  src={`https://www.youtube.com/embed/${embedUrl}?autoplay=1&rel=0`}
                  title={activeVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              </div>
            ) : (
              <div className="flex aspect-video w-full items-center justify-center p-6 text-center text-white/80">
                This video could not be embedded.
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}