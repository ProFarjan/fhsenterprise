import LubeIcon from "@/components/company/mrlube/LubeIcon";
import type { LubeContent } from "@/types/mrlube";

// "Why MR Lube" — a four-up feature grid on a sand background.
export default function LubeWhy({ why }: { why: LubeContent["why"] }) {
  return (
    <section className="bg-lube-cream-dark py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-lube-red">
            <span className="h-px w-8 bg-lube-red" />
            {why.eyebrow}
          </span>
          <h2 className="mt-5 font-lube text-3xl font-bold uppercase leading-tight tracking-tight text-lube-ink sm:text-4xl">
            {why.headingLead} <span className="text-lube-red">{why.headingEmphasis}</span>
          </h2>
          <p className="mt-4 text-lg leading-8 text-lube-slate">{why.intro}</p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {why.features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-lg border border-lube-line bg-white p-7 shadow-sm transition-colors hover:border-lube-red/40"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-md bg-lube-red/10 text-lube-red">
                <LubeIcon name={feature.icon} className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-lube text-lg font-bold uppercase tracking-wide text-lube-ink">{feature.title}</h3>
              <p className="mt-2 text-sm leading-6 text-lube-slate">{feature.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
