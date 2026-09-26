import Image from "next/image";
import type { MahinContent } from "@/types/mahin";

// "From your order to your kitchen" — image paired with a numbered process
// list on a mist band.
export default function MahinProcess({ process }: { process: MahinContent["process"] }) {
  return (
    <section className="bg-mahin-mist py-20 lg:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="relative order-last aspect-[4/3] overflow-hidden rounded-2xl border border-mahin-line shadow-sm lg:order-first">
          <Image src={process.image} alt="" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-mahin-navy/15 to-transparent" />
        </div>

        <div>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-mahin-flame-dark">
            <span className="h-px w-8 bg-mahin-flame" />
            {process.eyebrow}
          </span>
          <h2 className="mt-5 font-mahin text-3xl font-bold leading-tight tracking-tight text-mahin-navy sm:text-4xl">
            {process.heading}
          </h2>
          <p className="mt-4 text-lg leading-8 text-mahin-slate">{process.body}</p>

          <ol className="mt-8 space-y-6">
            {process.steps.map((step, index) => (
              <li key={step.title} className="flex gap-4">
                <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-mahin-flame font-mahin text-sm font-bold text-white">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-mahin text-base font-bold text-mahin-navy">{step.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-mahin-slate">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
