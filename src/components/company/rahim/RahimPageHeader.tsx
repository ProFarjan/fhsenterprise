import Image from "next/image";
import type { RahimPageHeaderContent } from "@/types/rahim";

// Light frost hero band shared by Rahim Enterprise's inner pages (about,
// categories, gallery, contact). Modelled on the sibling page headers.
export default function RahimPageHeader({ header }: { header: RahimPageHeaderContent }) {
  return (
    <header className="relative isolate flex min-h-[340px] items-end overflow-hidden bg-rahim-cloud">
      <Image src={header.image} alt="" fill priority sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-rahim-frost via-rahim-frost/85 to-rahim-frost/45" />
      <div className="relative mx-auto w-full max-w-6xl px-6 pb-14 pt-32 lg:px-8 lg:pb-16">
        <span className="inline-flex items-center gap-2.5 rounded-full bg-rahim-cyan/12 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-rahim-cyan-dark ring-1 ring-rahim-cyan/25">
          <span className="h-1.5 w-1.5 rounded-full bg-rahim-cyan" />
          {header.eyebrow}
        </span>
        <h1 className="mt-6 max-w-2xl font-rahim text-4xl font-bold leading-[1.08] tracking-tight text-rahim-slate sm:text-5xl lg:text-6xl">
          {header.title}
        </h1>
        {header.description && (
          <p className="mt-5 max-w-xl text-base leading-7 text-rahim-steel">{header.description}</p>
        )}
      </div>
    </header>
  );
}
