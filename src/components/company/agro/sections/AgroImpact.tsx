import type { AgroContent } from "@/types/agro";

// Big-number impact band: an eyebrow tag over four oversized serif stats.
export default function AgroImpact({ impact }: { impact: AgroContent["impact"] }) {
  return (
    <section id="impact" className="scroll-mt-20 bg-white py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <span className="inline-block rounded-full bg-agro-gold/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-agro-leaf">
          {impact.eyebrow}
        </span>

        <dl className="mt-10 grid grid-cols-2 gap-x-8 gap-y-12 border-t border-neutral-200 pt-12 lg:grid-cols-4">
          {impact.stats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-2">
              <dd className="font-display text-5xl font-normal text-agro-forest sm:text-6xl">
                {stat.value}
              </dd>
              <dt className="text-sm font-medium leading-5 text-neutral-500">{stat.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
