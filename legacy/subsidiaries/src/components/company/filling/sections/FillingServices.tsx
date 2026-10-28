import Image from "next/image";
import FillingIcon from "@/components/company/filling/FillingIcon";
import type { FillingContent } from "@/types/filling";

// Service grid — reused on the home page (with its own eyebrow/heading block)
// and on the Services page (header supplied by FillingPageHeader, so `showHeader`
// is turned off there).
export default function FillingServices({
  services,
  showHeader = true,
}: {
  services: FillingContent["services"];
  showHeader?: boolean;
}) {
  return (
    <section className="bg-fuel-mist py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {showHeader && (
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-fuel-blue">
              <span className="h-px w-8 bg-fuel-blue" />
              {services.eyebrow}
            </span>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-fuel-ink sm:text-4xl">
              {services.heading}
            </h2>
            <p className="mt-4 text-base leading-7 text-fuel-steel">{services.body}</p>
          </div>
        )}

        <div className={`grid gap-6 sm:grid-cols-2 lg:grid-cols-3 ${showHeader ? "mt-12" : ""}`}>
          {services.items.map((service) => (
            <article
              key={service.name}
              className="group overflow-hidden rounded-3xl bg-white ring-1 ring-fuel-line transition-shadow hover:shadow-lg"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={service.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white/90 text-fuel-blue-dark backdrop-blur">
                  <FillingIcon name={service.icon} className="h-6 w-6" />
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-fuel-ink">{service.name}</h3>
                <p className="mt-2 text-sm leading-6 text-fuel-steel">{service.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
