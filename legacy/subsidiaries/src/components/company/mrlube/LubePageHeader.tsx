import Image from "next/image";
import type { LubePageHeaderContent } from "@/types/mrlube";

// Carbon hero band shared by MR Lube's inner pages (about, categories,
// gallery, contact). Modelled on AgritechPageHeader, restyled with a red
// accent tab and uppercase title.
export default function LubePageHeader({ header }: { header: LubePageHeaderContent }) {
  return (
    <header className="relative isolate flex min-h-[340px] items-end overflow-hidden bg-lube-cream-dark">
      <Image src={header.image} alt="" fill priority sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-lube-cream via-lube-cream/85 to-lube-cream/45" />
      <div className="relative mx-auto w-full max-w-6xl px-6 pb-14 pt-32 lg:px-8 lg:pb-16">
        <span className="inline-flex items-center gap-2.5 bg-lube-red px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-white [clip-path:polygon(0_0,100%_0,94%_100%,0%_100%)]">
          {header.eyebrow}
        </span>
        <h1 className="mt-6 max-w-2xl font-lube text-4xl font-bold uppercase leading-[1.05] tracking-tight text-lube-ink sm:text-5xl lg:text-6xl">
          {header.title}
        </h1>
        {header.description && (
          <p className="mt-5 max-w-xl text-base leading-7 text-lube-slate">{header.description}</p>
        )}
      </div>
    </header>
  );
}
