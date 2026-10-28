import MahinIcon from "@/components/company/mahin/MahinIcon";
import type { MahinContent } from "@/types/mahin";

// "Why Mahin Enterprise" — a four-up feature grid on a mist background.
export default function MahinWhy({ why }: { why: MahinContent["why"] }) {
  return (
    <section className="bg-mahin-mist py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-mahin-flame-dark">
            <span className="h-px w-8 bg-mahin-flame" />
            {why.eyebrow}
          </span>
          <h2 className="mt-5 font-mahin text-3xl font-bold leading-tight tracking-tight text-mahin-navy sm:text-4xl">
            {why.headingLead} <span className="text-mahin-flame">{why.headingEmphasis}</span>
          </h2>
          <p className="mt-4 text-lg leading-8 text-mahin-slate">{why.intro}</p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {why.features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-mahin-line bg-white p-7 shadow-sm transition-shadow hover:shadow-lg hover:shadow-mahin-navy/5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-mahin-flame/12 text-mahin-flame-dark">
                <MahinIcon name={feature.icon} className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-mahin text-lg font-bold text-mahin-navy">{feature.title}</h3>
              <p className="mt-2 text-sm leading-6 text-mahin-slate">{feature.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
