import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { getParentNews } from "@/lib/publicContent";
import type { AppLocale } from "@/i18n/routing";

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

function NewsIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
    </svg>
  );
}

function EventsIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
    </svg>
  );
}

function GalleryIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 19.5h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
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

export default async function MediaOverviewPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: routeLocale } = await params;
  setRequestLocale(routeLocale);
  const locale = routeLocale as AppLocale;
  const t = await getTranslations("tabs");
  const tMedia = await getTranslations("media");
  const tCommon = await getTranslations("common");
  const [latest] = await getParentNews(1);

  const SECTIONS = [
    { title: t("news"), description: tMedia("newsDesc"), href: "/media/news", Icon: NewsIcon },
    { title: t("events"), description: tMedia("eventsDesc"), href: "/media/events", Icon: EventsIcon },
    { title: t("gallery"), description: tMedia("galleryDesc"), href: "/media/gallery", Icon: GalleryIcon },
  ];

  return (
    <section className="mx-auto max-w-6xl px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {SECTIONS.map(({ title, description, href, Icon }) => (
          <Link
            key={href}
            href={href}
            className="group flex flex-col gap-4 rounded-2xl border border-neutral-200 bg-neutral-50 p-7 transition-all hover:-translate-y-1 hover:border-orange-200 hover:bg-white hover:shadow-xl"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-600 text-white">
              <Icon />
            </div>
            <h3 className="text-lg font-semibold text-neutral-900">{title}</h3>
            <p className="text-sm leading-6 text-neutral-600">{description}</p>
            <span className="mt-1 inline-flex items-center gap-1.5 text-sm font-semibold text-orange-700">
              {tCommon("explore")}
              <ArrowIcon />
            </span>
          </Link>
        ))}
      </div>

      {latest && (
        <div className="mt-14">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-neutral-500">
            {tMedia("latestUpdate")}
          </h2>
          <Link
            href={latest.href}
            className="group mt-4 flex flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-neutral-200 transition-all hover:shadow-xl sm:flex-row"
          >
            <div className="relative h-56 flex-none sm:h-auto sm:w-80">
              <Image src={latest.image} alt="" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
            </div>
            <div className="flex flex-1 flex-col justify-center gap-2 p-7">
              <time dateTime={latest.date} className="text-xs font-semibold uppercase tracking-wide text-orange-700">
                {formatDate(latest.date, locale)}
              </time>
              <h3 className="text-xl font-bold text-neutral-900">{latest.title}</h3>
              <p className="text-neutral-600">{latest.excerpt}</p>
              <span className="mt-1 inline-flex items-center gap-1.5 text-sm font-semibold text-orange-700">
                {tCommon("readMore")}
                <ArrowIcon />
              </span>
            </div>
          </Link>
        </div>
      )}
    </section>
  );
}
