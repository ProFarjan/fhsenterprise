import Image from "next/image";
import FillingPageHeader from "@/components/company/filling/FillingPageHeader";
import { fillingStationContent } from "@/data/companies/filling-station";
import type { AppLocale } from "@/i18n/routing";

export default async function FillingAboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const { aboutPage } = fillingStationContent[locale as AppLocale];

  return (
    <main className="flex-1 bg-white">
      <FillingPageHeader header={aboutPage.header} />

      {/* Story */}
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-fuel-blue">
              <span className="h-px w-8 bg-fuel-blue" />
              {aboutPage.storyHeading}
            </span>
            <div className="mt-6 space-y-5">
              {aboutPage.storyParagraphs.map((paragraph) => (
                <p key={paragraph} className="text-lg leading-8 text-fuel-steel">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl ring-1 ring-black/5">
            <Image
              src={aboutPage.storyImage}
              alt=""
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Impact stats */}
      <section className="bg-fuel-ink py-16 lg:py-20">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-8 gap-y-10 px-6 lg:grid-cols-4 lg:px-8">
          {aboutPage.stats.map((stat) => (
            <div key={stat.label} className="border-t border-white/10 pt-5">
              <p className="font-fuel text-4xl font-extrabold text-white sm:text-5xl">{stat.value}</p>
              <p className="mt-2 text-sm text-slate-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-fuel-mist py-16 lg:py-20">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 lg:grid-cols-2 lg:px-8">
          <div className="rounded-3xl bg-white p-8 ring-1 ring-fuel-line sm:p-10">
            <h2 className="text-2xl font-semibold text-fuel-ink sm:text-3xl">
              {aboutPage.missionHeading}
            </h2>
            <p className="mt-4 text-base leading-7 text-fuel-steel">{aboutPage.mission}</p>
          </div>
          <div className="rounded-3xl bg-white p-8 ring-1 ring-fuel-line sm:p-10">
            <h2 className="text-2xl font-semibold text-fuel-ink sm:text-3xl">
              {aboutPage.visionHeading}
            </h2>
            <p className="mt-4 text-base leading-7 text-fuel-steel">{aboutPage.vision}</p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-fuel-blue">
            {aboutPage.valuesHeading}
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {aboutPage.values.map((value, index) => (
              <div key={value.title} className="border-t border-fuel-line pt-5">
                <span className="font-fuel text-sm font-bold text-fuel-blue">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-fuel-ink">{value.title}</h3>
                <p className="mt-2 text-sm leading-6 text-fuel-steel">{value.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
