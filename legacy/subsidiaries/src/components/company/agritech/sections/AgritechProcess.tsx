import Image from "next/image";
import type { AgritechContent } from "@/types/agritech";

// "From workshop to farm" — image paired with a numbered process list.
export default function AgritechProcess({ process }: { process: AgritechContent["process"] }) {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="relative order-last aspect-[4/3] overflow-hidden rounded-3xl shadow-xl ring-1 ring-black/5 lg:order-first">
          <Image src={process.image} alt="" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-agri-graphite/30 to-transparent" />
        </div>

        <div>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-agri-amber-dark">
            <span className="h-px w-8 bg-agri-amber" />
            {process.eyebrow}
          </span>
          <h2 className="mt-5 font-agri text-3xl font-bold leading-tight text-agri-graphite sm:text-4xl">
            {process.heading}
          </h2>
          <p className="mt-4 text-lg leading-8 text-neutral-600">{process.body}</p>

          <ol className="mt-8 space-y-6">
            {process.steps.map((step, index) => (
              <li key={step.title} className="flex gap-4">
                <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-agri-amber font-agri text-sm font-bold text-agri-graphite">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-agri text-base font-bold text-agri-graphite">{step.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-neutral-600">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
