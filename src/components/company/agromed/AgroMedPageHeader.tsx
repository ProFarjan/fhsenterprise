import Image from "next/image";
import type { AgroMedPageHeader as AgroMedPageHeaderContent } from "@/types/agromed";

// Teal photo-hero band shared by MR Agro Medicine's inner pages (about,
// products, category) — a shorter header with a lime-dotted eyebrow.
export default function AgroMedPageHeader({ header }: { header: AgroMedPageHeaderContent }) {
  return (
    <header className="relative isolate flex min-h-[340px] items-end overflow-hidden bg-vet-deep">
      <Image src={header.image} alt="" fill priority sizes="100vw" className="object-cover opacity-45" />
      <div className="absolute inset-0 bg-gradient-to-t from-vet-deep via-vet-deep/85 to-vet-deep/40" />
      <div className="relative mx-auto w-full max-w-6xl px-6 pb-14 pt-32 lg:px-8 lg:pb-16">
        <span className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-vet-lime backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-vet-lime" />
          {header.eyebrow}
        </span>
        <h1 className="mt-6 max-w-3xl font-vet text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl">
          {header.title}
        </h1>
        {header.description && (
          <p className="mt-5 max-w-2xl text-base leading-7 text-teal-50/85">{header.description}</p>
        )}
      </div>
    </header>
  );
}
