import Image from "next/image";
import type { LubeContent } from "@/types/mrlube";

// "From base oil to bottle" — image paired with a numbered process list on a
// sand band.
export default function LubeProcess({ process }: { process: LubeContent["process"] }) {
  return (
    <section className="bg-lube-cream-dark py-20 lg:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="relative order-last aspect-[4/3] overflow-hidden rounded-lg border border-lube-line lg:order-first">
          <Image src={process.image} alt="" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-lube-ink/15 to-transparent" />
        </div>

        <div>
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-lube-red">
            <span className="h-px w-8 bg-lube-red" />
            {process.eyebrow}
          </span>
          <h2 className="mt-5 font-lube text-3xl font-bold uppercase leading-tight tracking-tight text-lube-ink sm:text-4xl">
            {process.heading}
          </h2>
          <p className="mt-4 text-lg leading-8 text-lube-slate">{process.body}</p>

          <ol className="mt-8 space-y-6">
            {process.steps.map((step, index) => (
              <li key={step.title} className="flex gap-4">
                <span className="flex h-9 w-9 flex-none items-center justify-center rounded-sm bg-lube-red font-lube text-sm font-bold text-white">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-lube text-base font-bold uppercase tracking-wide text-lube-ink">{step.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-lube-slate">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
