import Image from "next/image";
import type { AgroContent } from "@/types/agro";

// Full-bleed farm hero with a serif headline and two audience CTAs.
export default function AgroHero({ hero }: { hero: AgroContent["hero"] }) {
  return (
    <section id="home" className="relative isolate flex min-h-[85vh] items-center overflow-hidden bg-agro-forest">
      <Image
        src={hero.image}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-agro-forest/40 via-agro-forest/25 to-agro-forest/85" />

      <div className="relative mx-auto w-full max-w-5xl px-6 text-center lg:px-8">
        <h1 className="mx-auto max-w-3xl font-display text-4xl font-normal leading-[1.1] text-white sm:text-6xl lg:text-7xl">
          {hero.headingLead} <em className="italic text-agro-gold">{hero.headingEmphasis}</em>{" "}
          {hero.headingTail}
        </h1>

      </div>

      <a
        href="#farmers"
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-white/80 transition-colors hover:text-white"
      >
        {hero.scrollLabel}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 animate-bounce">
          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </a>
    </section>
  );
}
