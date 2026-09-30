import Image from "next/image";
import { useLocale } from "next-intl";
import { getSiteConfig } from "@/data/site";
import type { AppLocale } from "@/i18n/routing";

const FACILITY_IMAGES = [
  "/images/gallery/feed-fac.png",
  "/images/gallery/chemical-fac.png",
  "/images/gallery/agro-fac.png",
  "/images/gallery/filling-fac.png",
];

function PinIcon() {
  return (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
    </svg>
  );
}

export default function FacilitiesPage() {
  const { facilities } = getSiteConfig(useLocale() as AppLocale).aboutPages;

  return (
    <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        {facilities.map((facility, index) => (
          <article
            key={facility.name}
            className="group overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:border-blue-200 hover:shadow-2xl"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={facility.image ?? FACILITY_IMAGES[index % FACILITY_IMAGES.length]}
                alt={facility.name}
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              
              {facility.capacity && (
                <span className="absolute top-4 right-4 inline-flex items-center rounded-full bg-emerald-600/90 px-3 py-1 text-xs font-semibold text-white shadow-md backdrop-blur">
                  {facility.capacity}
                </span>
              )}

              <span className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3.5 py-1 text-xs font-semibold uppercase tracking-wide text-[#0045A0] shadow-sm backdrop-blur">
                <PinIcon />
                {facility.location}
              </span>
            </div>
            <div className="p-7">
              <h3 className="text-xl font-bold text-neutral-900 group-hover:text-[#0045A0] transition-colors">
                {facility.name}
              </h3>
              <p className="mt-2.5 leading-7 text-neutral-600">{facility.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
