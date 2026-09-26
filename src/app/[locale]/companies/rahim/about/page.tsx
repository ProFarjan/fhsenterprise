import Image from "next/image";
import RahimPageHeader from "@/components/company/rahim/RahimPageHeader";
import { rahimContent } from "@/data/companies/rahim";
import type { AppLocale } from "@/i18n/routing";

export default async function RahimAboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const { aboutPage } = rahimContent[locale as AppLocale];

  return (
    <main className="flex-1 bg-rahim-frost">
      <RahimPageHeader header={aboutPage.header} />

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-rahim-cyan-dark">
              <span className="h-px w-8 bg-rahim-cyan" />
              {aboutPage.storyHeading}
            </span>
            <div className="mt-6 space-y-5">
              {aboutPage.storyParagraphs.map((paragraph) => (
                <p key={paragraph} className="text-lg leading-8 text-rahim-steel">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-rahim-line shadow-sm">
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

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-2 lg:px-8">
          <div className="rounded-2xl border border-rahim-line bg-rahim-frost p-8 sm:p-10">
            <h2 className="font-rahim text-2xl font-bold text-rahim-slate sm:text-3xl">{aboutPage.missionHeading}</h2>
            <p className="mt-4 text-base leading-7 text-rahim-steel">{aboutPage.mission}</p>
          </div>
          <div className="rounded-2xl border border-rahim-line bg-rahim-frost p-8 sm:p-10">
            <h2 className="font-rahim text-2xl font-bold text-rahim-slate sm:text-3xl">{aboutPage.visionHeading}</h2>
            <p className="mt-4 text-base leading-7 text-rahim-steel">{aboutPage.vision}</p>
          </div>
        </div>
      </section>

      <section className="bg-rahim-slate py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-rahim-ice">{aboutPage.valuesHeading}</h2>
          <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {aboutPage.values.map((value, index) => (
              <div key={value.title} className="border-t border-white/15 pt-5">
                <span className="font-rahim text-sm font-bold text-rahim-ice">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-rahim text-lg font-bold text-white">{value.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/70">{value.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
