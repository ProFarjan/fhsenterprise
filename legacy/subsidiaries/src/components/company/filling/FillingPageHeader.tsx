import Image from "next/image";
import type { FillingPageHeader as FillingPageHeaderContent } from "@/types/filling";

// Ink photo-hero band shared by MR Filling Station's inner pages (about,
// services, notice) — a shorter version of the home hero with a blue eyebrow.
export default function FillingPageHeader({ header }: { header: FillingPageHeaderContent }) {
  return (
    <header className="relative isolate flex min-h-[340px] items-end overflow-hidden bg-fuel-ink">
      <Image src={header.image} alt="" fill priority sizes="100vw" className="object-cover opacity-70" />
      <div className="absolute inset-0 bg-gradient-to-t from-fuel-ink via-fuel-ink/80 to-fuel-ink/30" />
      <div className="relative mx-auto w-full max-w-6xl px-6 pb-14 pt-32 lg:px-8 lg:pb-16">
        <span className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-fuel-sky backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-fuel-blue" />
          {header.eyebrow}
        </span>
        <h1 className="mt-6 max-w-3xl font-fuel text-4xl font-extrabold uppercase leading-[1.02] tracking-tight text-white sm:text-5xl lg:text-6xl">
          {header.title}
        </h1>
        {header.description && (
          <p className="mt-5 max-w-xl text-base leading-7 text-slate-300">{header.description}</p>
        )}
      </div>
    </header>
  );
}
