import Image from "next/image";
import type { RahimContent } from "@/types/rahim";

// "Safe supply, every step controlled" — image paired with a numbered process
// list on a frost band. Anchored as #process (linked from the hero).
export default function RahimProcess({ process }: { process: RahimContent["process"] }) {
  return (
    <section id="process" className="scroll-mt-24 bg-rahim-frost py-20 lg:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="relative order-last aspect-[4/3] overflow-hidden rounded-2xl border border-rahim-line shadow-sm lg:order-first">
          <Image src={process.image} alt="" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-rahim-slate/15 to-transparent" />
        </div>

        <div>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-rahim-cyan-dark">
            <span className="h-px w-8 bg-rahim-cyan" />
            {process.eyebrow}
          </span>
          <h2 className="mt-5 font-rahim text-3xl font-bold leading-tight tracking-tight text-rahim-slate sm:text-4xl">
            {process.heading}
          </h2>
          <p className="mt-4 text-lg leading-8 text-rahim-steel">{process.body}</p>

          <ol className="mt-8 space-y-6">
            {process.steps.map((step, index) => (
              <li key={step.title} className="flex gap-4">
                <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-rahim-cyan font-rahim text-sm font-bold text-white">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-rahim text-base font-bold text-rahim-slate">{step.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-rahim-steel">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
