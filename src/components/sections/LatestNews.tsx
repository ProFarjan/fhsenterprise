import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { getParentNews } from "@/lib/publicContent";
import type { AppLocale } from "@/i18n/routing";

// Homepage "Latest News" only ever shows the 3 most recent items — the full
// list lives at /media/news.
const HOMEPAGE_NEWS_LIMIT = 3;

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

function formatDate(iso: string, locale: AppLocale) {
  return new Date(iso).toLocaleDateString(locale === "bn" ? "bn-BD" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function LatestNews() {
  const locale = (await getLocale()) as AppLocale;
  const t = await getTranslations("home.news");
  const tCommon = await getTranslations("common");
  const news = await getParentNews(HOMEPAGE_NEWS_LIMIT);

  // No FHS Enterprise news yet — hide the whole section rather than show an empty
  // heading with nothing underneath it.
  if (news.length === 0) return null;

  return (
    <section className="bg-neutral-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="inline-block rounded-full border border-[#0045a0]/20 bg-[#0045a0]/5 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-[#0045a0]">
              {t("badge")}
            </span>
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              {t("headingPrefix")} <span className="text-[#0045a0]">{t("headingHighlight")}</span>
            </h2>
            <div className="mt-3 flex items-center gap-2">
              <span className="h-1 w-12 rounded-full bg-[#0045a0]" />
              <span className="h-1 w-8 rounded-full bg-[#097b33]" />
            </div>
          </div>
          <p className="max-w-md text-sm leading-6 text-neutral-600">{t("description")}</p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {news.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="group flex flex-col overflow-hidden rounded-3xl bg-white ring-1 ring-neutral-200 transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-48">
                <Image
                  src={item.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col gap-3 p-6">
                <time dateTime={item.date} className="text-xs font-semibold uppercase tracking-wide text-[#097b33]">
                  {formatDate(item.date, locale)}
                </time>
                <h3 className="text-lg font-bold leading-snug text-neutral-900">
                  {item.title}
                </h3>
                <p className="flex-1 text-sm leading-6 text-neutral-600">{item.excerpt}</p>
                <span className="mt-1 inline-flex items-center gap-1.5 text-sm font-semibold text-[#0045a0] group-hover:text-[#003680]">
                  {tCommon("readMore")}
                  <ArrowIcon />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/media/news"
            className="inline-block rounded-full border-2 border-[#0045a0] px-8 py-3 text-sm font-semibold text-[#0045a0] transition-colors hover:bg-[#0045a0] hover:text-white"
          >
            {t("viewAll")}
          </Link>
        </div>
      </div>
    </section>
  );
}
