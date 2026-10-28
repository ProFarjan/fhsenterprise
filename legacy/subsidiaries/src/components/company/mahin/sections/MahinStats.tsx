import type { MahinContent } from "@/types/mahin";

// Impact numbers on a navy band — the site's single dark accent strip.
export default function MahinStats({ stats }: { stats: MahinContent["stats"] }) {
  return (
    <section className="bg-mahin-navy py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mb-10 max-w-xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-mahin-flame">{stats.eyebrow}</span>
          <h2 className="mt-3 font-mahin text-2xl font-bold text-white sm:text-3xl">{stats.heading}</h2>
        </div>
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4">
          {stats.items.map((stat) => (
            <div key={stat.label} className="border-t border-white/15 pt-5">
              <p className="font-mahin text-4xl font-extrabold text-mahin-flame sm:text-5xl">{stat.value}</p>
              <p className="mt-2 text-sm text-white/65">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
