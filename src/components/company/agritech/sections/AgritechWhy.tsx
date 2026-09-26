import AgritechIcon from "@/components/company/agritech/AgritechIcon";
import type { AgritechContent } from "@/types/agritech";

// "Why MR Agri Technology" — a four-up feature grid on a cream background.
export default function AgritechWhy({ why }: { why: AgritechContent["why"] }) {
  return (
    <section className="bg-agri-cream py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-agri-amber-dark">
            <span className="h-px w-8 bg-agri-amber" />
            {why.eyebrow}
          </span>
          <h2 className="mt-5 font-agri text-3xl font-bold leading-tight text-agri-graphite sm:text-4xl">
            {why.headingLead} <span className="text-agri-amber-dark">{why.headingEmphasis}</span>
          </h2>
          <p className="mt-4 text-lg leading-8 text-neutral-600">{why.intro}</p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {why.features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-3xl border border-agri-cream-dark bg-white p-7 shadow-sm transition-shadow hover:shadow-lg hover:shadow-agri-steel/5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-agri-amber/14 text-agri-amber-dark">
                <AgritechIcon name={feature.icon} className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-agri text-lg font-bold text-agri-graphite">{feature.title}</h3>
              <p className="mt-2 text-sm leading-6 text-neutral-600">{feature.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
