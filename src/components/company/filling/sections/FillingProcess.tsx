import Image from "next/image";
import type { FillingContent } from "@/types/filling";

// "How it works (step by step)" band on an ink background: a photo beside a
// numbered list of steps. Echoes the Soltera reference process section.
export default function FillingProcess({
  process,
}: {
  process: FillingContent["process"];
}) {
  return (
    <section className="bg-fuel-ink py-20 text-white lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-fuel-sky">
          <span className="h-px w-8 bg-fuel-sky" />
          {process.eyebrow}
        </span>
        <h2 className="mt-5 max-w-3xl text-2xl font-semibold leading-snug tracking-tight text-white sm:text-3xl">
          {process.heading}
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">{process.body}</p>

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative min-h-[300px] overflow-hidden rounded-3xl">
            <Image
              src={process.image}
              alt=""
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>

          <ol className="flex flex-col">
            {process.steps.map((step, index) => (
              <li
                key={step.title}
                className="flex gap-5 border-t border-white/10 py-6 first:border-t-0 first:pt-0"
              >
                <span className="font-fuel text-2xl font-extrabold text-fuel-sky">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                  <p className="mt-1.5 text-sm leading-6 text-slate-300">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
