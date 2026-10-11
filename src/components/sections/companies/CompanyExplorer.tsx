"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { companyUrl } from "@/lib/companies";
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

const ALL_SECTOR = "__all__";

export default function CompanyExplorer({ companies }: { companies: Company[] }) {
  const locale = useLocale() as AppLocale;
  const t = useTranslations("explorer");
  const tCommon = useTranslations("common");
  const sectors = useMemo(() => {
    const unique = Array.from(new Set(companies.map((c) => c.sector)));
    return [ALL_SECTOR, ...unique];
  }, [companies]);
  const [activeSector, setActiveSector] = useState(ALL_SECTOR);

  const filtered =
    activeSector === ALL_SECTOR ? companies : companies.filter((c) => c.sector === activeSector);

  return (
    <div>
      <div className="flex flex-wrap items-center justify-center gap-10 text-center">
        <div>
          <p className="text-3xl font-bold text-orange-600">{companies.length}</p>
          <p className="text-sm text-neutral-500">{t("companies")}</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-orange-600">{sectors.length - 1}</p>
          <p className="text-sm text-neutral-500">{t("sectors")}</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-orange-600">1</p>
          <p className="text-sm text-neutral-500">{t("group")}</p>
        </div>
      </div>

      <div className="mt-10 flex justify-center">
        <div className="flex flex-wrap justify-center gap-1.5 rounded-full border border-neutral-200 bg-white p-1.5 shadow-sm">
          {sectors.map((sector) => {
            const isActive = sector === activeSector;
            return (
              <button
                key={sector}
                type="button"
                onClick={() => setActiveSector(sector)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-orange-600 text-white"
                    : "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900"
                }`}
              >
                {sector === ALL_SECTOR ? tCommon("all") : sector}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((company) => (
          <a
            key={company.name}
            href={companyUrl(company.subdomain, locale)}
            target={company.subdomain.includes(".") ? "_blank" : undefined}
            rel={company.subdomain.includes(".") ? "noopener noreferrer" : undefined}
            className="group relative flex h-96 flex-col justify-end overflow-hidden rounded-2xl shadow-sm transition-all hover:-translate-y-1 hover:shadow-2xl"
          >
            <Image
              src={company.image}
              alt=""
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Scrim so white text stays readable over the image */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/5" />

            {/* Logo badge */}
            <div className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white/95 p-2 shadow-md">
              <Image src={company.logo} alt={`${company.name} logo`} width={28} height={28} />
            </div>

            <div className="relative flex flex-col gap-2 p-6">
              <span className="inline-block w-fit rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-orange-300 backdrop-blur-sm">
                {company.sector}
              </span>
              <h3 className="text-xl font-bold text-white">{company.name}</h3>
              <p className="line-clamp-2 text-sm leading-6 text-neutral-200">
                {company.description}
              </p>
              <span className="mt-1 inline-flex items-center gap-1.5 text-sm font-semibold text-white">
                {tCommon("learnMore")}
                <ArrowIcon />
              </span>
            </div>
          </a>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-14 text-center text-neutral-500">{t("empty")}</p>
      )}
    </div>
  );
}
