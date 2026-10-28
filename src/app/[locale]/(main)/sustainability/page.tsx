import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { getSiteConfig } from "@/data/site";
import type { AppLocale } from "@/i18n/routing";
import type { SustainabilityIcon } from "@/types/content";
import { setRequestLocale } from "next-intl/server";

const ICON_PATHS: Record<SustainabilityIcon, string> = {
  heart: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z",
  book: "M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25",
  users:
    "M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z",
  leaf: "M12 3c4.5 1.5 7.5 5.5 7.5 9.75A7.5 7.5 0 0 1 12 20.25a7.5 7.5 0 0 1-7.5-7.5C4.5 8.5 7.5 4.5 12 3Zm0 3v11.25",
};

function PillarIcon({ icon }: { icon: SustainabilityIcon }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
      <path strokeLinecap="round" strokeLinejoin="round" d={ICON_PATHS[icon]} />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="h-4 w-4 transition-transform group-hover:translate-x-1"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
  );
}

function SustainabilityOverviewPageContent() {
  const { overviewDescription, pillars } = getSiteConfig(useLocale() as AppLocale).sustainabilityPages;
  const t = useTranslations("common");

  return (
    <section className="mx-auto max-w-6xl px-6 lg:px-8">
      <p className="max-w-3xl text-lg leading-8 text-neutral-600">{overviewDescription}</p>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {pillars.map((pillar) => (
          <Link
            key={pillar.slug}
            href={`/sustainability/${pillar.slug}`}
            className="group flex flex-col gap-4 rounded-2xl border border-neutral-200 bg-neutral-50 p-7 transition-all hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-xl"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue text-white">
              <PillarIcon icon={pillar.icon} />
            </div>
            <h3 className="text-lg font-semibold text-neutral-900">{pillar.title}</h3>
            <p className="text-sm leading-6 text-neutral-600">{pillar.summary}</p>
            <span className="mt-1 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue">
              {t("explore")}
              <ArrowIcon />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

// next-intl needs the request locale set before any of its APIs run, and Next
// renders layouts and pages in parallel — so each one sets it itself. That is
// also what lets the page be prerendered instead of rendered on every request.
export default async function SustainabilityOverviewPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <SustainabilityOverviewPageContent />;
}
