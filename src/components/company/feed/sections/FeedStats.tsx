import type { FeedContent } from "@/types/feed";

// Impact numbers on an espresso band with a subtle grain texture feel.
export default function FeedStats({ stats }: { stats: FeedContent["stats"] }) {
  return (
    <section className="bg-feed-espresso py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mb-10 max-w-xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-feed-gold">{stats.eyebrow}</span>
          <h2 className="mt-3 font-feed text-2xl font-bold text-white sm:text-3xl">{stats.heading}</h2>
        </div>
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4">
          {stats.items.map((stat) => (
            <div key={stat.label} className="border-t border-white/15 pt-5">
              <p className="font-feed text-4xl font-extrabold text-feed-gold sm:text-5xl">{stat.value}</p>
              <p className="mt-2 text-sm text-feed-cream/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
