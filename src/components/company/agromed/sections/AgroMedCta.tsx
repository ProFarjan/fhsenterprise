import type { AgroMedContent } from "@/types/agromed";

// Closing call-to-action band with a teal → lime gradient.
export default function AgroMedCta({ cta, href = "#contact" }: { cta: AgroMedContent["cta"]; href?: string }) {
  return (
    <section className="bg-white px-3 py-16 sm:px-4 lg:py-20">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-vet-teal to-vet-teal-dark px-6 py-14 text-center sm:rounded-[2.25rem] sm:px-8 lg:py-20">
        <h2 className="mx-auto max-w-2xl font-vet text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
          {cta.heading}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-teal-50/90">{cta.body}</p>
        <a
          href={href}
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-vet-lime px-7 py-3.5 text-sm font-semibold text-vet-deep transition-colors hover:bg-white"
        >
          {cta.button}
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-vet-deep text-white">→</span>
        </a>
      </div>
    </section>
  );
}
