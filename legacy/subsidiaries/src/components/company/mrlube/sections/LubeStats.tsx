import type { LubeContent } from "@/types/mrlube";

// Impact numbers on a warm-white band with a red top rule per stat.
export default function LubeStats({ stats }: { stats: LubeContent["stats"] }) {
  return (
    <section className="bg-lube-cream py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mb-10 max-w-xl">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-lube-red">{stats.eyebrow}</span>
          <h2 className="mt-3 font-lube text-2xl font-bold uppercase tracking-tight text-lube-ink sm:text-3xl">{stats.heading}</h2>
        </div>
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4">
          {stats.items.map((stat) => (
            <div key={stat.label} className="border-t-2 border-lube-red pt-5">
              <p className="font-lube text-4xl font-extrabold text-lube-ink sm:text-5xl">{stat.value}</p>
              <p className="mt-2 text-sm text-lube-slate">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
