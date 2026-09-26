import type { AgroMedContent } from "@/types/agromed";

// Trust band: key numbers on a deep-teal background with lime accents.
export default function AgroMedStats({ stats }: { stats: AgroMedContent["stats"] }) {
  return (
    <section className="bg-vet-deep py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-vet-lime">
            <span className="h-px w-8 bg-vet-lime" />
            {stats.eyebrow}
          </span>
          <h2 className="mt-4 font-vet text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {stats.heading}
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4">
          {stats.items.map((stat) => (
            <div key={stat.label} className="border-t border-white/15 pt-5">
              <p className="font-vet text-4xl font-semibold text-white sm:text-5xl">{stat.value}</p>
              <p className="mt-2 text-sm text-teal-100/75">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
