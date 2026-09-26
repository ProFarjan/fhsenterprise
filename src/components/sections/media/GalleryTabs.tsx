"use client";

import { useState } from "react";
import type { PublicGalleryPhoto, PublicGalleryVideo } from "@/lib/publicContent";

function PlayIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="ml-0.5 h-6 w-6 text-orange-600">
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
  const [tab, setTab] = useState<"photos" | "videos">("photos");

  return (
    <>
      <div className="flex justify-center">
        <div className="inline-flex gap-1.5 rounded-full border border-neutral-200 bg-white p-1.5 shadow-sm">
          <button
            type="button"
            onClick={() => setTab("photos")}
            className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
              tab === "photos" ? "bg-orange-600 text-white" : "text-neutral-600 hover:bg-neutral-100"
            }`}
          >
            {labels.photos}
          </button>
          <button
            type="button"
            onClick={() => setTab("videos")}
            className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
              tab === "videos" ? "bg-orange-600 text-white" : "text-neutral-600 hover:bg-neutral-100"
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
                className="group relative mb-5 overflow-hidden rounded-2xl break-inside-avoid"
              >
                {/* eslint-disable-next-line @next/next/no-img-element -- served from our own byte-serving route with no known dimensions, so it can't use next/image's fixed width/height or fill modes in a masonry layout */}
                <img
                  src={photo.image}
                  alt={photo.caption}
                  className="h-auto w-full transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 transition-opacity group-hover:opacity-100">
                  <p className="p-4 text-sm font-medium text-white">{photo.caption}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="mt-10 text-center text-neutral-500">{labels.noPhotos}</p>
        )
      ) : videos.length > 0 ? (
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((video) => (
            <a
              key={video.id}
              href={video.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex h-52 items-center justify-center overflow-hidden rounded-2xl shadow-sm"
            >
              {/* eslint-disable-next-line @next/next/no-img-element -- external YouTube CDN thumbnail, not a local/optimizable asset */}
              <img
                src={video.thumbnail}
                alt=""
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30" />
              <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-white/95 shadow-lg transition-transform group-hover:scale-110">
                <PlayIcon />
              </div>
              <p className="absolute right-4 bottom-4 left-4 text-sm font-semibold text-white">
                {video.title}
              </p>
            </a>
          ))}
        </div>
      ) : (
        <p className="mt-10 text-center text-neutral-500">{labels.noVideos}</p>
      )}
    </>
  );
}
