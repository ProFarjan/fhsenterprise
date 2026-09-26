import Image from "next/image";
import type { AgroContent } from "@/types/agro";

// Nationwide-reach band: copy + region pills beside a stylized green map.
export default function AgroNetwork({ network }: { network: AgroContent["network"] }) {
  return (
    <section className="bg-agro-cream py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.15em] text-agro-leaf">
            {network.eyebrow}
          </span>
          <h2 className="mt-4 font-display text-3xl font-normal leading-snug text-agro-forest sm:text-4xl">
            {network.heading}
          </h2>
          <p className="mt-5 max-w-md text-base leading-7 text-agro-forest/70">{network.body}</p>

          <div className="mt-8 flex flex-wrap gap-2.5">
            {network.regions.map((region) => (
              <span
                key={region}
                className="rounded-full border border-agro-leaf/25 bg-white px-4 py-1.5 text-sm font-medium text-agro-forest"
              >
                {region}
              </span>
            ))}
          </div>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-md">
          <Image src={network.image} alt="" fill sizes="(min-width: 1024px) 40vw, 90vw" className="object-contain" />
        </div>
      </div>
    </section>
  );
}
