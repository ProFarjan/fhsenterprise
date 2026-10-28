import Image from "next/image";
import { useTranslations } from "next-intl";
import { companyUrl } from "@/lib/companies";
import type { AppLocale } from "@/i18n/routing";
import type { Company } from "@/types/content";

export function ArrowIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="h-4 w-4 transition-transform group-hover:translate-x-1"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
  );
}

// One subsidiary as a photo card. Shared by the homepage section and the
// /companies page so the two can never drift apart.
export default function CompanyCard({ company, locale }: { company: Company; locale: AppLocale }) {
  const t = useTranslations("common");
  // Subsidiaries hosted on their own site store their full hostname; those open
  // in a new tab, the internal microsite in the same one.
  const external = company.subdomain.includes(".");

  return (
    <a
      href={companyUrl(company.subdomain, locale)}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group relative flex h-80 flex-col justify-end overflow-hidden rounded-2xl shadow-sm transition-all hover:-translate-y-1 hover:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2"
    >
      <Image
        src={company.image}
        alt=""
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Scrim so white text stays readable over any photo */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/5" />

      {/* Logo badge: `fill` + object-contain fits wide and square logos alike
          (a fixed width/height squashed the wide FHS logo). */}
      <div className="absolute left-5 top-5 h-12 w-12 rounded-xl bg-white/95 shadow-md">
        <Image src={company.logo} alt="" fill sizes="48px" className="object-contain p-1.5" />
      </div>

      <div className="relative flex flex-col gap-2 p-6">
        <span className="inline-block w-fit rounded-full bg-brand-green/85 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white backdrop-blur-sm">
          {company.sector}
        </span>
        <h3 className="text-xl font-bold text-white">{company.name}</h3>
        <p className="line-clamp-2 text-sm leading-6 text-neutral-200">{company.description}</p>
        <span className="mt-1 inline-flex items-center gap-1.5 text-sm font-semibold text-white transition-colors group-hover:text-emerald-300">
          {t("learnMore")}
          <ArrowIcon />
        </span>
        {external && <span className="sr-only">({t("opensInNewTab")})</span>}
      </div>
    </a>
  );
}
