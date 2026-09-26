import type { AgroContent } from "@/types/agro";

// Sky-blue closing band inviting partnership.
export default function AgroCta({ cta }: { cta: AgroContent["cta"] }) {
  return (
    <section className="bg-agro-sky py-20">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 px-6 text-center lg:px-8">
        <h2 className="font-display text-3xl font-normal text-agro-forest sm:text-5xl">{cta.heading}</h2>
        <a
          href="#farmers"
          className="rounded-full bg-agro-leaf px-8 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-agro-leaf-light"
        >
          {cta.button}
        </a>
      </div>
    </section>
  );
}
