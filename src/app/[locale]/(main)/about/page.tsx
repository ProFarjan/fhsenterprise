import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { getSiteConfig } from "@/data/site";
import type { AppLocale } from "@/i18n/routing";

export default function AboutOverviewPage() {
  const { about } = getSiteConfig(useLocale() as AppLocale);
  const t = useTranslations("pageHeaders.about");

  return (
    <>
      {/* Intro band: text + image */}
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-orange-600">
              <span className="h-px w-8 bg-orange-600" />
              {t("eyebrow")}
            </span>
            <p className="mt-6 text-2xl font-medium leading-relaxed text-neutral-800 sm:text-[1.75rem] sm:leading-[1.5]">
              {about.description}
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl ring-1 ring-black/5">
            <Image
              src="/images/gallery/overview.png"
              alt=""
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Pillars — dark band */}
      <section className="bg-neutral-950">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
          <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {about.points.map((point, index) => (
              <div key={point} className="group">
                <span className="block text-5xl font-bold leading-none text-orange-500">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="mt-4 block h-px w-full bg-white/10" />
                <p className="mt-4 text-lg font-medium leading-7 text-white">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
