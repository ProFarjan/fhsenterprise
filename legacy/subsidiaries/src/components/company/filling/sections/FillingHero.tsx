import Image from "next/image";
import type { FillingContent } from "@/types/filling";

// Signature home hero — a rounded photo panel with an oversized outlined brand
// word, a bold headline, dual CTAs, and a strip of glass stat cards. Inspired by
// the Soltera reference layout.
export default function FillingHero({
  hero,
  locale,
}: {
  hero: FillingContent["hero"];
  locale: string;
}) {
  const servicesHref = `/${locale}/companies/filling-station/services`;

  return (
    <section className="bg-white px-3 pt-3 sm:px-4 sm:pt-4">
      <div className="relative isolate flex min-h-[86vh] flex-col overflow-hidden rounded-[1.75rem] bg-fuel-ink sm:rounded-[2.25rem]">
        <Image
          src={hero.image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-fuel-ink/40 via-fuel-ink/45 to-fuel-ink/90" />

        {/* Oversized outlined brand word */}
        <div className="pointer-events-none relative z-10 px-6 pt-10 lg:px-10">
          <span
            className="block select-none font-fuel text-[16vw] font-extrabold uppercase leading-none tracking-tight text-transparent"
            style={{ WebkitTextStroke: "1.5px rgba(214,230,255,0.45)" }}
          >
            {hero.brandWord}
          </span>
        </div>

        {/* Bottom content */}
        <div className="relative z-10 mt-auto px-6 pb-8 lg:px-10 lg:pb-10">
          <div className="max-w-2xl">
            <h1 className="font-fuel text-4xl font-extrabold uppercase leading-[0.98] tracking-tight text-white sm:text-6xl lg:text-7xl">
              {hero.headingLead}{" "}
              <span className="text-fuel-sky">{hero.headingEmphasis}</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-200 sm:text-lg">
              {hero.subtext}
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-fuel-ink transition-colors hover:bg-fuel-sky"
              >
                {hero.ctaPrimary}
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-fuel-ink text-white">→</span>
              </a>
              <a
                href={servicesHref}
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                {hero.ctaSecondary}
              </a>
            </div>
          </div>

          {/* Glass stat strip */}
          <div className="mt-9 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {hero.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/15 bg-white/10 px-5 py-4 backdrop-blur"
              >
                <p className="font-fuel text-3xl font-extrabold text-white">{stat.value}</p>
                <p className="mt-1 text-sm text-slate-200">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
