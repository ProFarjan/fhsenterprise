import Image from "next/image";
import type { AgroPageHeader as AgroPageHeaderContent } from "@/types/agro";

// Forest-green hero band shared by MR Agro's inner pages (about, products,
// gallery, contact) — same photo-hero shape as the home page's AgroHero but
// shorter, with a gold eyebrow instead of the home page's centered headline.
export default function AgroPageHeader({ header }: { header: AgroPageHeaderContent }) {
  return (
    <header className="relative isolate flex min-h-[320px] items-end overflow-hidden bg-agro-forest">
      <Image src={header.image} alt="" fill priority sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-agro-forest via-agro-forest/70 to-agro-forest/30" />
      <div className="relative mx-auto w-full max-w-6xl px-6 pb-14 pt-32 lg:px-8 lg:pb-16">
        <span className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-agro-gold backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-agro-gold" />
          {header.eyebrow}
        </span>
        <h1 className="mt-6 max-w-2xl font-display text-4xl font-normal leading-[1.1] text-white sm:text-5xl lg:text-6xl">
          {header.title}
        </h1>
        {header.description && (
          <p className="mt-5 max-w-xl text-base leading-7 text-green-50/85">{header.description}</p>
        )}
      </div>
    </header>
  );
}
