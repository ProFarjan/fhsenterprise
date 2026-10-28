"use client";

import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { companyUrl } from "@/lib/companies";
import { getSiteConfig } from "@/data/site";
import type { AppLocale } from "@/i18n/routing";
import type { Company } from "@/types/content";

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

export default function Companies({ companies }: { companies: Company[] }) {
  const locale = useLocale() as AppLocale;
  const t = useTranslations("home.companies");
  const tCommon = useTranslations("common");
  const siteName = getSiteConfig(locale).groupName;

  return (
    <section id="companies" className="bg-neutral-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#0045a0]">
            <span className="h-px w-8 bg-[#097b33]" />
            {t("headingPrefix")}
            <span className="h-px w-8 bg-[#097b33]" />
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            {t("headingPrefix")} <span className="text-[#0045a0]">{t("headingHighlight")}</span>
          </h2>
          <div className="mt-3 flex items-center justify-center gap-2">
            <span className="h-1 w-12 rounded-full bg-[#0045a0]" />
            <span className="h-1 w-8 rounded-full bg-[#097b33]" />
          </div>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-600">{t("description")}</p>
        </div>

        {/* FHS Enterprise — Featured parent company card */}
        <div className="mt-16">
          <a
            href={`/${locale}`}
            className="group relative flex h-80 flex-col justify-end overflow-hidden rounded-3xl shadow-lg transition-all hover:-translate-y-1 hover:shadow-2xl lg:h-96"
          >
            <Image
              src="/images/gallery/fhs_history.jpg"
              alt=""
              fill
              sizes="100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/10" />

            {/* Logo badge */}
            <div className="absolute left-6 top-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/95 p-2 shadow-lg">
              <Image src="/logos/fhs_logo.png" alt={t("parentLogoAlt")} width={1266} height={370} className="h-auto w-full object-contain" />
            </div>

            <div className="relative flex flex-col gap-3 p-8">
              <span className="inline-block w-fit rounded-full bg-[#0045a0] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white shadow">
                {t("parentBadge")}
              </span>
              <h3 className="text-3xl font-bold text-white sm:text-4xl">{siteName}</h3>
              <p className="max-w-2xl text-base leading-7 text-neutral-200">{t("parentDescription")}</p>
            </div>
          </a>
        </div>

        {/* Subsidiary companies grid */}
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {companies.map((company) => (
            <a
              key={company.name}
              href={companyUrl(company.subdomain, locale)}
              target={company.subdomain.includes(".") ? "_blank" : undefined}
              rel={company.subdomain.includes(".") ? "noopener noreferrer" : undefined}
              className="group relative flex h-80 flex-col justify-end overflow-hidden rounded-2xl shadow-sm transition-all hover:-translate-y-1 hover:shadow-2xl"
            >
              <Image
                src={company.image}
                alt=""
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/5" />

              {/* Logo badge */}
              <div className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white/95 p-2 shadow-md">
                <Image src={company.logo} alt={t("companyLogoAlt", { name: company.name })} width={28} height={28} className="object-contain" />
              </div>

              <div className="relative flex flex-col gap-2 p-6">
                <span className="inline-block w-fit rounded-full bg-[#097b33]/80 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white backdrop-blur-sm">
                  {company.sector}
                </span>
                <h3 className="text-xl font-bold text-white">{company.name}</h3>
                <p className="line-clamp-2 text-sm leading-6 text-neutral-200">
                  {company.description}
                </p>
                <span className="mt-1 inline-flex items-center gap-1.5 text-sm font-semibold text-white group-hover:text-emerald-300 transition-colors">
                  {tCommon("learnMore")}
                  <ArrowIcon />
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* View all link */}
        <div className="mt-12 text-center">
          <Link
            href="/companies"
            className="inline-flex items-center gap-2 rounded-full bg-[#0045a0] px-8 py-3.5 text-sm font-semibold text-white shadow-md transition-colors hover:bg-[#003680]"
          >
            {t("seeAll")}
            <ArrowIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}
