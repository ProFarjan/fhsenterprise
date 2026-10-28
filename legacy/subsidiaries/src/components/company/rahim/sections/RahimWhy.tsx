import RahimIcon from "@/components/company/rahim/RahimIcon";
import type { RahimContent } from "@/types/rahim";

// "Why Rahim Enterprise" — a four-up feature grid on a frost background.
export default function RahimWhy({ why }: { why: RahimContent["why"] }) {
  return (
    <section className="bg-rahim-frost py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-rahim-cyan-dark">
            <span className="h-px w-8 bg-rahim-cyan" />
            {why.eyebrow}
          </span>
          <h2 className="mt-5 font-rahim text-3xl font-bold leading-tight tracking-tight text-rahim-slate sm:text-4xl">
            {why.headingLead} <span className="text-rahim-cyan">{why.headingEmphasis}</span>
          </h2>
          <p className="mt-4 text-lg leading-8 text-rahim-steel">{why.intro}</p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {why.features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-rahim-line bg-white p-7 shadow-sm transition-shadow hover:shadow-lg hover:shadow-rahim-slate/5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-rahim-cyan/12 text-rahim-cyan-dark">
                <RahimIcon name={feature.icon} className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-rahim text-lg font-bold text-rahim-slate">{feature.title}</h3>
              <p className="mt-2 text-sm leading-6 text-rahim-steel">{feature.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
