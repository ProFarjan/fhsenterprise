import Image from "next/image";
import type { FeedPageHeaderContent } from "@/types/feed";

// Espresso hero band shared by MR Feed's inner pages (about, categories,
// gallery, contact). A photo behind a warm gradient with a gold eyebrow.
export default function FeedPageHeader({ header }: { header: FeedPageHeaderContent }) {
  return (
    <header className="relative isolate flex min-h-[340px] items-end overflow-hidden bg-feed-espresso">
      <Image src={header.image} alt="" fill priority sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-feed-bark via-feed-bark/75 to-feed-bark/30" />
      <div className="relative mx-auto w-full max-w-6xl px-6 pb-14 pt-32 lg:px-8 lg:pb-16">
        <span className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-feed-gold backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-feed-gold" />
          {header.eyebrow}
        </span>
        <h1 className="mt-6 max-w-2xl font-feed text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-6xl">
          {header.title}
        </h1>
        {header.description && (
          <p className="mt-5 max-w-xl text-base leading-7 text-feed-cream/85">{header.description}</p>
        )}
      </div>
    </header>
  );
}
