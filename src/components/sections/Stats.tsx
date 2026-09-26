import { useLocale, useTranslations } from "next-intl";
import { getSiteConfig } from "@/data/site";
import type { AppLocale } from "@/i18n/routing";
import type { StatIcon } from "@/types/content";

const ICON_PATHS: Record<StatIcon, string> = {
  calendar:
    "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5",
  building:
    "M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21",
  users:
    "M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z",
  "map-pin":
    "M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z",
};

function StatIconGlyph({ icon }: { icon: StatIcon }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="h-6 w-6"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d={ICON_PATHS[icon]} />
    </svg>
  );
}

export default function Stats() {
  const { stats } = getSiteConfig(useLocale() as AppLocale);
  const t = useTranslations("home.stats");

  return (
    <section className="relative overflow-hidden bg-white py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(234,88,12,0.07),_transparent_55%)]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full border border-orange-200 bg-orange-50 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-orange-600">
            {t("badge")}
          </span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            {t("headingPrefix")} <span className="text-orange-600">{t("headingHighlight")}</span>
          </h2>
        </div>

        <dl className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="group flex flex-col items-center gap-3 rounded-2xl border border-neutral-200 bg-neutral-50 px-6 py-10 text-center transition-all hover:-translate-y-1 hover:border-orange-200 hover:bg-white hover:shadow-xl"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-600 text-white transition-transform group-hover:scale-110">
                <StatIconGlyph icon={stat.icon} />
              </div>
              <dt className="text-3xl font-bold text-neutral-900 sm:text-4xl">{stat.value}</dt>
              <dd className="text-sm font-medium text-neutral-600">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
