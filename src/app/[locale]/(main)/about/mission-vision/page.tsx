import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { getSiteConfig } from "@/data/site";
import type { AppLocale } from "@/i18n/routing";

export default function MissionVisionPage() {
  const { missionVision } = getSiteConfig(useLocale() as AppLocale).aboutPages;
  const tAbout = useTranslations("aboutPages");

  const bands = [
    { label: tAbout("mission"), text: missionVision.mission, image: "/images/gallery/overview.png" },
    { label: tAbout("vision"), text: missionVision.vision, image: "/images/gallery/distribution.jpg" },
  ];

  return (
    <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
      <div className="space-y-16 lg:space-y-24">
        {bands.map((band, index) => (
          <div
            key={band.label}
            className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20"
          >
            <div className={index % 2 === 1 ? "lg:order-2" : ""}>
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-orange-600">
                <span className="h-px w-8 bg-orange-600" />
                {band.label}
              </span>
              <p className="mt-6 text-2xl font-medium leading-relaxed text-neutral-800 sm:text-3xl sm:leading-[1.4]">
                {band.text}
              </p>
            </div>
            <div
              className={`relative aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl ring-1 ring-black/5 ${
                index % 2 === 1 ? "lg:order-1" : ""
              }`}
            >
              <Image
                src={band.image}
                alt=""
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        ))}

        {/* Core values */}
        <div className="rounded-3xl bg-neutral-950 p-10 sm:p-14">
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-500">
            {tAbout("coreValues")}
          </h3>
          <div className="mt-8 grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {missionVision.values.map((value, index) => (
              <div key={value} className="flex items-baseline gap-4 border-t border-white/10 pt-5">
                <span className="font-mono text-sm text-orange-500">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-lg font-semibold text-white">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
