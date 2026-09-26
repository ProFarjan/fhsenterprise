import Image from "next/image";
import LubePageHeader from "@/components/company/mrlube/LubePageHeader";
import { mrlubeContent } from "@/data/companies/mrlube";
import type { AppLocale } from "@/i18n/routing";

export default async function LubeAboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const { aboutPage } = mrlubeContent[locale as AppLocale];

  return (
    <main className="flex-1 bg-lube-cream">
      <LubePageHeader header={aboutPage.header} />

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-lube-red">
              <span className="h-px w-8 bg-lube-red" />
              {aboutPage.storyHeading}
            </span>
            <div className="mt-6 space-y-5">
              {aboutPage.storyParagraphs.map((paragraph) => (
                <p key={paragraph} className="text-lg leading-8 text-lube-slate">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-lube-line">
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

      <section className="bg-lube-cream-dark py-16 lg:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-2 lg:px-8">
          <div className="rounded-lg border border-lube-line bg-white p-8 shadow-sm sm:p-10">
            <h2 className="font-lube text-2xl font-bold uppercase tracking-wide text-lube-ink sm:text-3xl">{aboutPage.missionHeading}</h2>
            <p className="mt-4 text-base leading-7 text-lube-slate">{aboutPage.mission}</p>
          </div>
          <div className="rounded-lg border border-lube-line bg-white p-8 shadow-sm sm:p-10">
            <h2 className="font-lube text-2xl font-bold uppercase tracking-wide text-lube-ink sm:text-3xl">{aboutPage.visionHeading}</h2>
            <p className="mt-4 text-base leading-7 text-lube-slate">{aboutPage.vision}</p>
          </div>
        </div>
      </section>

      <section className="bg-lube-cream py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-lube-red">{aboutPage.valuesHeading}</h2>
          <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {aboutPage.values.map((value, index) => (
              <div key={value.title} className="border-t-2 border-lube-red pt-5">
                <span className="font-lube text-sm font-bold text-lube-red">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-lube text-lg font-bold uppercase tracking-wide text-lube-ink">{value.title}</h3>
                <p className="mt-2 text-sm leading-6 text-lube-slate">{value.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
