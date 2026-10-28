import AgroMedIcon from "@/components/company/agromed/AgroMedIcon";
import type { AgroMedContent } from "@/types/agromed";

// Welcome band: a lead statement beside three trust features.
export default function AgroMedIntro({ intro }: { intro: AgroMedContent["intro"] }) {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-16">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-vet-teal">
              <span className="h-px w-8 bg-vet-teal" />
              {intro.eyebrow}
            </span>
            <h2 className="mt-5 font-vet text-3xl font-semibold leading-tight tracking-tight text-vet-ink sm:text-4xl">
              {intro.heading}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-vet-ink/65">{intro.body}</p>
          </div>

          <div className="grid gap-4">
            {intro.features.map((feature) => (
              <div
                key={feature.title}
                className="flex items-start gap-4 rounded-2xl border border-vet-line bg-vet-cloud p-5"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-vet-teal text-white">
                  <AgroMedIcon name={feature.icon} className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-base font-semibold text-vet-ink">{feature.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-vet-ink/65">{feature.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
