import type { FillingContent } from "@/types/filling";

// Closing call-to-action band on the home page.
export default function FillingCta({ cta }: { cta: FillingContent["cta"] }) {
  return (
    <section className="bg-white px-3 py-16 sm:px-4 lg:py-20">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[1.75rem] bg-fuel-blue px-6 py-14 text-center sm:rounded-[2.25rem] sm:px-8 lg:py-20">
        <h2 className="mx-auto max-w-2xl font-fuel text-3xl font-extrabold uppercase leading-[1.05] tracking-tight text-white sm:text-5xl">
          {cta.heading}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-blue-50">{cta.body}</p>
        <a
          href="#contact"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-fuel-blue-dark transition-colors hover:bg-fuel-sky"
        >
          {cta.button}
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-fuel-blue-dark text-white">→</span>
        </a>
      </div>
    </section>
  );
}
