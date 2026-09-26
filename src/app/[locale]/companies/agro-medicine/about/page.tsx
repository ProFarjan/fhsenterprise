import Image from "next/image";
import AgroMedPageHeader from "@/components/company/agromed/AgroMedPageHeader";
import { agroMedicineContent } from "@/data/companies/agro-medicine";
import type { AppLocale } from "@/i18n/routing";

export default async function AgroMedAboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const { aboutPage } = agroMedicineContent[locale as AppLocale];

  return (
    <main className="flex-1 bg-white">
      <AgroMedPageHeader header={aboutPage.header} />

      {/* Story */}
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-vet-teal">
              <span className="h-px w-8 bg-vet-teal" />
              {aboutPage.storyHeading}
            </span>
            <div className="mt-6 space-y-5">
              {aboutPage.storyParagraphs.map((paragraph) => (
                <p key={paragraph} className="text-lg leading-8 text-vet-ink/70">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl shadow-vet-ink/10 ring-1 ring-vet-line">
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

      {/* Mission & Vision */}
      <section className="bg-vet-mist py-16 lg:py-20">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 lg:grid-cols-2 lg:px-8">
          <div className="rounded-3xl bg-white p-8 ring-1 ring-vet-line sm:p-10">
            <h2 className="font-vet text-2xl font-semibold text-vet-ink sm:text-3xl">
              {aboutPage.missionHeading}
            </h2>
            <p className="mt-4 text-base leading-7 text-vet-ink/70">{aboutPage.mission}</p>
          </div>
          <div className="rounded-3xl bg-white p-8 ring-1 ring-vet-line sm:p-10">
            <h2 className="font-vet text-2xl font-semibold text-vet-ink sm:text-3xl">
              {aboutPage.visionHeading}
            </h2>
            <p className="mt-4 text-base leading-7 text-vet-ink/70">{aboutPage.vision}</p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-vet-teal">
            {aboutPage.valuesHeading}
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {aboutPage.values.map((value, index) => (
              <div key={value.title} className="border-t border-vet-line pt-5">
                <span className="font-vet text-sm font-bold text-vet-teal">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-vet-ink">{value.title}</h3>
                <p className="mt-2 text-sm leading-6 text-vet-ink/65">{value.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Care band */}
      <section className="bg-vet-deep py-16 lg:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div>
            <h2 className="font-vet text-3xl font-semibold leading-tight text-white sm:text-4xl">
              {aboutPage.careHeading}
            </h2>
            <p className="mt-5 text-base leading-7 text-teal-100/80">{aboutPage.careBody}</p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl ring-1 ring-white/10">
            <Image
              src={aboutPage.careImage}
              alt=""
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
