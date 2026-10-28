import Image from "next/image";
import MahinIcon from "@/components/company/mahin/MahinIcon";
import type { MahinContent } from "@/types/mahin";

// Service-area band — Mahin Enterprise delivers only within the Mymensingh
// division, so the homepage makes that explicit with a coverage image and a
// district list. Anchored as #coverage (linked from the hero + navbar isn't,
// but hero slides are).
export default function MahinCoverage({ coverage }: { coverage: MahinContent["coverage"] }) {
  return (
    <section id="coverage" className="scroll-mt-24 bg-white py-20 lg:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-mahin-line shadow-sm">
          <Image src={coverage.image} alt="" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-mahin-navy/15 to-transparent" />
        </div>

        <div>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-mahin-flame-dark">
            <span className="h-px w-8 bg-mahin-flame" />
            {coverage.eyebrow}
          </span>
          <h2 className="mt-5 font-mahin text-3xl font-bold leading-tight tracking-tight text-mahin-navy sm:text-4xl">
            {coverage.heading}
          </h2>
          <p className="mt-4 text-lg leading-8 text-mahin-slate">{coverage.body}</p>

          <ul className="mt-8 grid grid-cols-2 gap-3 sm:max-w-md">
            {coverage.districts.map((district) => (
              <li
                key={district}
                className="flex items-center gap-2.5 rounded-xl border border-mahin-line bg-mahin-mist px-4 py-3"
              >
                <span className="flex h-8 w-8 flex-none items-center justify-center rounded-lg bg-mahin-flame/12 text-mahin-flame-dark">
                  <MahinIcon name="pin" className="h-4.5 w-4.5" />
                </span>
                <span className="font-mahin text-sm font-semibold text-mahin-navy">{district}</span>
              </li>
            ))}
          </ul>

          <p className="mt-6 text-sm leading-6 text-mahin-slate">{coverage.note}</p>
        </div>
      </div>
    </section>
  );
}
