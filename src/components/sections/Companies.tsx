"use client";

import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { getSiteConfig } from "@/data/site";
import type { AppLocale } from "@/i18n/routing";
import type { Company } from "@/types/content";
import CompanyCard, { ArrowIcon } from "@/components/sections/companies/CompanyCard";

export default function Companies({ companies }: { companies: Company[] }) {
  const locale = useLocale() as AppLocale;
  const t = useTranslations("home.companies");
  const siteName = getSiteConfig(locale).groupName;

  return (
    <section id="companies" className="bg-neutral-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header (same pattern as the other homepage sections) */}
        <div className="text-center">
          <span className="inline-block rounded-full border border-[#0045a0]/20 bg-[#0045a0]/5 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-[#0045a0]">
            {t("badge")}
          </span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            {t("headingPrefix")} <span className="text-[#0045a0]">{t("headingHighlight")}</span>
          </h2>
          <div className="mt-3 flex items-center justify-center gap-2">
            <span className="h-1 w-12 rounded-full bg-[#0045a0]" />
            <span className="h-1 w-8 rounded-full bg-[#097b33]" />
          </div>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-600">{t("description")}</p>
        </div>

        {/* FHS Enterprise — featured parent company card. It leads to the About
            section: linking to the homepage would point at the page you're on. */}
        <div className="mt-16">
          <Link
            href="/about"
            className="group relative flex h-80 flex-col justify-end overflow-hidden rounded-3xl shadow-lg transition-all hover:-translate-y-1 hover:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 lg:h-96"
          >
            <Image
              src="/images/gallery/fhs_history.jpg"
              alt=""
              fill
              sizes="100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/10" />

            <div className="absolute left-6 top-6 h-16 w-16 rounded-2xl bg-white/95 shadow-lg">
              <Image
                src="/logos/fhs_logo.png"
                alt={t("parentLogoAlt")}
                fill
                sizes="64px"
                className="object-contain p-2"
              />
            </div>

            <div className="relative flex flex-col gap-3 p-8">
              <span className="inline-block w-fit rounded-full bg-[#0045a0] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white shadow">
                {t("parentBadge")}
              </span>
              <h3 className="text-3xl font-bold text-white sm:text-4xl">{siteName}</h3>
              <p className="max-w-2xl text-base leading-7 text-neutral-200">{t("parentDescription")}</p>
            </div>
          </Link>
        </div>

        {/* The subsidiaries */}
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {companies.map((company) => (
            <CompanyCard key={company.name} company={company} locale={locale} />
          ))}
        </div>

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
