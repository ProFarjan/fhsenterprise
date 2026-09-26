import Image from "next/image";
import { useLocale } from "next-intl";
import { getSiteConfig } from "@/data/site";
import type { AppLocale } from "@/i18n/routing";

export default function HistoryPage() {
  const { history } = getSiteConfig(useLocale() as AppLocale).aboutPages;

  return (
    <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-20">
        {/* Sticky image */}
        <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl ring-1 ring-black/5 lg:sticky lg:top-24">
          <Image
            src="/images/gallery/history.png"
            alt=""
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>

        {/* Narrative */}
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            {history.title}
          </h2>
          <span className="mt-5 block h-1 w-16 rounded-full bg-orange-600" />
          <div className="mt-8 space-y-6">
            {history.paragraphs.map((paragraph, index) => (
              <p
                key={paragraph}
                className={
                  index === 0
                    ? "text-xl leading-9 text-neutral-800"
                    : "text-lg leading-8 text-neutral-600"
                }
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
