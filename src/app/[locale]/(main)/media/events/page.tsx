import type { Metadata } from "next";
import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";
import { getParentEvents } from "@/lib/publicContent";
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
    path: "/media/events",
    title:
      locale === "bn"
        ? "ইভেন্ট ও কার্যক্রম | এফএইচএস এন্টারপ্রাইজ"
        : "Corporate Events & Community Summits | FHS Enterprise",
    description:
      locale === "bn"
        ? "এফএইচএস এন্টারপ্রাইজ আয়োজিত কৃষক সম্মেলন, উদ্বোধনী অনুষ্ঠান, কমিউনিটি উন্নয়ন কার্যক্রম ও ব্যবসায়িক সেমিনার।"
        : "Discover upcoming and past summits, factory inaugurations, and community programs organized by FHS Enterprise.",
    keywords: [
      "FHS Enterprise events",
      "Bangladesh Auto Rice Mill summit",
      "Fulbariya community event",
    ],
    image: "/images/events/summit.jpg",
  });
}

function LocationIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="h-3.5 w-3.5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
      />
    </svg>
  );
}

function formatDay(iso: string) {
  return new Date(iso).getDate();
}

function formatMonth(iso: string, locale: AppLocale) {
  return new Date(iso)
    .toLocaleDateString(locale === "bn" ? "bn-BD" : "en-US", { month: "short" })
    .toUpperCase();
}

export default async function EventsPage() {
  const locale = (await getLocale()) as AppLocale;
  const tMedia = await getTranslations("media");
  const events = await getParentEvents();

  if (events.length === 0) {
    return (
      <section className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-neutral-200 bg-neutral-50 py-24 text-center">
          <p className="text-neutral-500">{tMedia("noEvents")}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-6xl px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        {events.map((event) => (
          <div
            key={event.id}
            className="group relative flex h-80 flex-col justify-end overflow-hidden rounded-2xl shadow-sm transition-shadow hover:shadow-xl"
          >
            <Image
              src={event.image}
              alt=""
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/5" />

            <div className="absolute left-5 top-5 flex w-16 flex-col items-center rounded-xl bg-white py-2 shadow-md">
              <span className="text-xs font-bold uppercase text-orange-600">
                {formatMonth(event.date, locale)}
              </span>
              <span className="text-xl font-bold text-neutral-900">{formatDay(event.date)}</span>
            </div>

            <div className="relative flex flex-col gap-2 p-6">
              <div className="flex items-center gap-1.5 text-xs font-medium text-orange-300">
                <LocationIcon />
                {event.location}
              </div>
              <h3 className="text-xl font-bold text-white">{event.title}</h3>
              <p className="text-sm leading-6 text-neutral-200">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
