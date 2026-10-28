"use client";

import { useId, useRef } from "react";
import { useTranslations } from "next-intl";
import { useDialog } from "@/lib/useDialog";
import { youtubeEmbedUrl } from "@/lib/youtube";

export type PlayableVideo = {
  title: string;
  description?: string;
  /** A self-hosted video file. Takes precedence over youtubeUrl. */
  videoUrl?: string;
  /** Any YouTube link form (watch, youtu.be, embed, shorts). */
  youtubeUrl?: string;
};

// The video lightbox shared by the homepage showcase and the gallery page.
// A real dialog: labelled by the video's title, Escape closes it, Tab stays
// inside, page scroll is locked, and focus returns to the card that opened it.
export default function VideoModal({
  video,
  onClose,
}: {
  video: PlayableVideo;
  onClose: () => void;
}) {
  const t = useTranslations("common");
  const titleId = useId();
  const dialogRef = useRef<HTMLDivElement>(null);
  useDialog(dialogRef, onClose);

  // Normalised embed URL: the old `replace("watch?v=", "embed/")` broke for
  // youtu.be and /shorts/ links. autoplay is fine — the user just clicked play.
  const embed = youtubeEmbedUrl(video.youtubeUrl);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-950 p-4 shadow-2xl focus:outline-none"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          aria-label={t("closeVideo")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-black">
          {video.videoUrl ? (
            <video src={video.videoUrl} controls autoPlay playsInline className="h-full w-full object-contain" />
          ) : embed ? (
            <iframe
              src={`${embed}?autoplay=1&rel=0`}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="h-full w-full border-0"
            />
          ) : null}
        </div>

        <div className="mt-4 p-2 text-white">
          <h3 id={titleId} className="text-xl font-bold">
            {video.title}
          </h3>
          {video.description && (
            <p className="mt-2 text-sm leading-relaxed text-neutral-300">{video.description}</p>
          )}
        </div>
      </div>
    </div>
  );
}
