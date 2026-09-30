import { useLocale } from "next-intl";
import { getSiteConfig } from "@/data/site";
import type { AppLocale } from "@/i18n/routing";

export default function MilestonesPage() {
  const { milestones } = getSiteConfig(useLocale() as AppLocale).aboutPages;

  return (
    <section className="mx-auto max-w-4xl px-6 py-20 lg:px-8 lg:py-28">
      <ol className="relative">
        {/* Spine */}
        <span className="absolute left-2 top-3 h-[calc(100%-2rem)] w-0.5 bg-gradient-to-b from-[#0045A0] via-blue-300 to-transparent sm:left-[7.5rem]" />

        {milestones.map((milestone) => (
          <li
            key={milestone.year}
            className="relative grid grid-cols-1 gap-4 pb-12 pl-12 last:pb-0 sm:grid-cols-[7rem_1fr] sm:gap-10 sm:pl-0"
          >
            {/* Year */}
            <span className="text-3xl font-bold text-neutral-900 sm:text-right sm:text-4xl">
              {milestone.year}
            </span>

            {/* Node */}
            <span className="absolute left-0 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#0045A0] ring-4 ring-blue-100 sm:left-[6.85rem]">
              <span className="h-2 w-2 rounded-full bg-white" />
            </span>

            {/* Content */}
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl sm:ml-4">
              <h3 className="text-xl font-bold text-neutral-900">{milestone.title}</h3>
              <p className="mt-2 leading-8 text-neutral-600">{milestone.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
