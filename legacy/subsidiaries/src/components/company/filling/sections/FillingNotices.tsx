import Image from "next/image";
import type { FillingContent } from "@/types/filling";

// Notice/announcement grid — reused on the home page (an eyebrow/heading block,
// first few items, and a "view all" link) and on the Notice page (all items,
// header supplied by FillingPageHeader so `showHeader` is off).
export default function FillingNotices({
  notices,
  locale,
  limit,
  showHeader = true,
}: {
  notices: FillingContent["notices"];
  locale: string;
  limit?: number;
  showHeader?: boolean;
}) {
  const items = limit ? notices.items.slice(0, limit) : notices.items;
  const noticeHref = `/${locale}/companies/filling-station/notice`;

  return (
    <section className="bg-fuel-mist py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {showHeader && (
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-fuel-blue">
                <span className="h-px w-8 bg-fuel-blue" />
                {notices.eyebrow}
              </span>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight text-fuel-ink sm:text-4xl">
                {notices.heading}
              </h2>
              <p className="mt-4 text-base leading-7 text-fuel-steel">{notices.body}</p>
            </div>
            <a
              href={noticeHref}
              className="shrink-0 text-sm font-semibold text-fuel-blue-dark transition-colors hover:text-fuel-ink"
            >
              {notices.viewMore} →
            </a>
          </div>
        )}

        <div className={`grid gap-6 sm:grid-cols-2 lg:grid-cols-3 ${showHeader ? "mt-12" : ""}`}>
          {items.map((item) => (
            <article
              key={item.title}
              className="group flex flex-col overflow-hidden rounded-3xl bg-white ring-1 ring-fuel-line transition-shadow hover:shadow-lg"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={item.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-3 text-xs">
                  <span className="rounded-full bg-fuel-sky px-2.5 py-1 font-semibold uppercase tracking-wide text-fuel-blue-dark">
                    {item.category}
                  </span>
                  <span className="text-fuel-steel">{item.date}</span>
                </div>
                <h3 className="mt-4 text-lg font-semibold leading-snug text-fuel-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-fuel-steel">{item.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
