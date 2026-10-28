import Image from "next/image";
import { useTranslations } from "next-intl";
import type { SustainabilityPillar } from "@/types/content";

export default function PillarPage({ pillar }: { pillar: SustainabilityPillar }) {
  const t = useTranslations("pillar");
  return (
    <section className="mx-auto max-w-5xl px-6 lg:px-8">
      <div className="relative flex h-72 flex-col justify-end overflow-hidden rounded-2xl shadow-sm sm:h-80">
        <Image
          src={pillar.image}
          alt=""
          fill
          priority
          sizes="(min-width: 1024px) 1024px, 100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/5" />
        <div className="relative p-8">
          <span className="inline-block rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-200 backdrop-blur-sm">
            {t("badge")}
          </span>
          <h2 className="mt-3 text-3xl font-bold text-white">{pillar.title}</h2>
          <p className="mt-2 max-w-xl text-neutral-200">{pillar.summary}</p>
        </div>
      </div>

      <p className="mt-8 text-lg leading-8 text-neutral-600">{pillar.description}</p>

      <dl className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
        {pillar.stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 text-center"
          >
            <dt className="text-3xl font-bold text-brand-blue">{stat.value}</dt>
            <dd className="mt-1 text-sm text-neutral-600">{stat.label}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-12">
        <h3 className="text-sm font-semibold uppercase tracking-wide text-neutral-500">
          {t("initiatives")}
        </h3>
        <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {pillar.initiatives.map((initiative) => (
            <div
              key={initiative.title}
              className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"
            >
              <h4 className="font-semibold text-neutral-900">{initiative.title}</h4>
              <p className="mt-2 text-sm leading-6 text-neutral-600">{initiative.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
