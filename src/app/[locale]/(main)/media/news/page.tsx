import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { getParentNews } from "@/lib/publicContent";
import { buildPageMetadata } from "@/lib/seo";
import type { AppLocale } from "@/i18n/routing";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata({
    locale,
    path: "/media/news",
    title:
      locale === "bn"
        ? "সংবাদ ও সাম্প্রতিক ঘোষণা | এফএইচএস এন্টারপ্রাইজ"
        : "News & Announcements | FHS Enterprise",
    description:
      locale === "bn"
        ? "এফএইচএস এন্টারপ্রাইজ, মেসার্স বাংলাদেশ অটো রাইস মিল, ভেহিকেল সলিউশনস ও ডেইলি বাজারের সর্বশেষ সংবাদ ও প্রেস বিজ্ঞপ্তি।"
        : "Stay informed with the latest corporate press releases, milestones, and announcements from FHS Enterprise.",
    keywords: [
      "FHS Enterprise news",
      "Bangladesh Auto Rice Mill updates",
      "Fulbariya business news",
    ],
    image: "/images/events/summit.jpg",
  });
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

function formatDate(iso: string, locale: AppLocale) {
  return new Date(iso).toLocaleDateString(locale === "bn" ? "bn-BD" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// Prerendered; refreshed at most every 5 minutes (admin edits revalidate immediately).
export const revalidate = 300;

export default async function NewsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: routeLocale } = await params;
  setRequestLocale(routeLocale);
  const locale = routeLocale as AppLocale;
  const tMedia = await getTranslations("media");
  const tCommon = await getTranslations("common");
  const [featured, ...rest] = await getParentNews();

  if (!featured) {
    return (
      <section className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-neutral-200 bg-neutral-50 py-24 text-center">
          <p className="text-neutral-500">{tMedia("noNews")}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-6xl px-6 lg:px-8">
      <Link
        href={featured.href}
        className="group relative flex h-[420px] flex-col justify-end overflow-hidden rounded-2xl shadow-sm transition-shadow hover:shadow-2xl"
      >
        <Image
          src={featured.image}
          alt=""
          fill
          sizes="(min-width: 1024px) 1152px, 100vw"
          priority
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />
        <div className="relative flex flex-col gap-3 p-8">
          <span className="w-fit rounded-full bg-orange-700 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
            {tMedia("featured")}
          </span>
          <time dateTime={featured.date} className="text-xs font-semibold uppercase tracking-wide text-orange-300">
            {formatDate(featured.date, locale)}
          </time>
          <h2 className="max-w-2xl text-2xl font-bold text-white sm:text-3xl">{featured.title}</h2>
          <p className="max-w-2xl text-neutral-200">{featured.excerpt}</p>
          <span className="mt-1 inline-flex items-center gap-1.5 text-sm font-semibold text-white">
            {tCommon("readMore")}
            <ArrowIcon />
          </span>
        </div>
      </Link>

      {rest.length > 0 && (
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="group flex flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-neutral-200 transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-44">
                <Image
                  src={item.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col gap-2 p-6">
                <time dateTime={item.date} className="text-xs font-semibold uppercase tracking-wide text-orange-700">
                  {formatDate(item.date, locale)}
                </time>
                <h3 className="text-lg font-semibold text-neutral-900">{item.title}</h3>
                <p className="flex-1 text-sm leading-6 text-neutral-600">{item.excerpt}</p>
                <span className="mt-1 inline-flex items-center gap-1.5 text-sm font-semibold text-orange-700">
                  {tCommon("readMore")}
                  <ArrowIcon />
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
