"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { companyUrl } from "@/lib/companies";
import type { AppLocale } from "@/i18n/routing";
import type { Company } from "@/types/content";

function ArrowIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="h-4 w-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d={direction === "left" ? "M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" : "M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"}
      />
    </svg>
  );
}

export default function Companies({ companies }: { companies: Company[] }) {
  const locale = useLocale() as AppLocale;
  const t = useTranslations("home.companies");
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(1);
  const total = companies.length;

  const cardStep = () => {
    const el = scrollerRef.current;
    const card = el?.firstElementChild as HTMLElement | null;
    return card ? card.offsetWidth + 24 : 200;
  };

  const scroll = (dir: 1 | -1) => {
    scrollerRef.current?.scrollBy({ left: dir * cardStep(), behavior: "smooth" });
  };

  const handleScroll = () => {
    const el = scrollerRef.current;
    if (!el) return;
    const index = Math.min(total, Math.max(1, Math.round(el.scrollLeft / cardStep()) + 1));
    setCurrent(index);
  };

  return (
    <section id="companies" className="bg-neutral-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              {t("headingPrefix")} <span className="text-orange-600">{t("headingHighlight")}</span>
            </h2>
            <p className="mt-2 text-lg text-neutral-600">{t("subheading")}</p>
          </div>
          <p className="max-w-md text-sm leading-6 text-neutral-600">{t("description")}</p>
        </div>

        <div
          ref={scrollerRef}
          onScroll={handleScroll}
          className="mt-14 flex gap-6 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {companies.map((company) => (
            <a
              key={company.name}
              href={companyUrl(company.subdomain, locale)}
              target={company.subdomain.includes(".") ? "_blank" : undefined}
              className="group flex h-40 w-40 flex-none items-center justify-center rounded-2xl bg-white p-6 shadow-sm ring-1 ring-neutral-200 transition-shadow hover:shadow-lg sm:h-44 sm:w-44"
            >
              <Image
                src={company.logo}
                alt={`${company.name} logo`}
                width={160}
                height={160}
                className="h-full w-full object-contain"
              />
            </a>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => scroll(-1)}
              aria-label={t("scrollPrev")}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-orange-300 text-orange-600 transition-colors hover:bg-orange-50"
            >
              <ArrowIcon direction="left" />
            </button>
            <button
              type="button"
              onClick={() => scroll(1)}
              aria-label={t("scrollNext")}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-orange-300 text-orange-600 transition-colors hover:bg-orange-50"
            >
              <ArrowIcon direction="right" />
            </button>
            <Link
              href="/companies"
              className="ml-2 text-sm font-semibold text-orange-600 transition-colors hover:text-orange-500"
            >
              {t("seeAll")}
            </Link>
          </div>
          <p className="text-sm text-neutral-500">
            <span className="font-semibold text-neutral-900">{current}</span>/{total}
          </p>
        </div>
      </div>
    </section>
  );
}
