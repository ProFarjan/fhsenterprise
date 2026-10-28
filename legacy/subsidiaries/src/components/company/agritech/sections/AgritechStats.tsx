import type { AgritechContent } from "@/types/agritech";

// Impact numbers on a graphite band.
export default function AgritechStats({ stats }: { stats: AgritechContent["stats"] }) {
  return (
    <section className="bg-agri-graphite py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mb-10 max-w-xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-agri-amber">{stats.eyebrow}</span>
          <h2 className="mt-3 font-agri text-2xl font-bold text-white sm:text-3xl">{stats.heading}</h2>
        </div>
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4">
          {stats.items.map((stat) => (
            <div key={stat.label} className="border-t border-white/15 pt-5">
              <p className="font-agri text-4xl font-extrabold text-agri-amber sm:text-5xl">{stat.value}</p>
              <p className="mt-2 text-sm text-white/65">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
