import { useLocale, useTranslations } from "next-intl";
import { getSiteConfig } from "@/data/site";
import type { AppLocale } from "@/i18n/routing";

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2.5}
      stroke="currentColor"
      className="h-5 w-5"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
    </svg>
  );
}

export default function About() {
  const { about } = getSiteConfig(useLocale() as AppLocale);
  const t = useTranslations("home.about");

  return (
    <section id="about" className="relative overflow-hidden bg-white py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_rgba(234,88,12,0.07),_transparent_55%)]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="inline-block rounded-full border border-orange-200 bg-orange-50 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-orange-600">
              {t("badge")}
            </span>
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              {about.title}
            </h2>
            <p className="mt-6 text-lg leading-8 text-neutral-600">{about.description}</p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {about.points.map((point) => (
              <div
                key={point}
                className="group flex flex-col gap-4 rounded-2xl bg-neutral-50 p-6 ring-1 ring-neutral-200 transition-all hover:-translate-y-0.5 hover:bg-white hover:shadow-lg hover:ring-orange-200"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-600 text-white">
                  <CheckIcon />
                </div>
                <p className="text-sm font-semibold leading-6 text-neutral-900">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
