import Image from "next/image";
import FillingIcon from "@/components/company/filling/FillingIcon";
import type { FillingContent } from "@/types/filling";

// "Engineered for performance" band: a lead statement over two feature cards
// beside a large image with a caption overlay. Echoes the Soltera reference.
export default function FillingFeature({
  feature,
}: {
  feature: FillingContent["feature"];
}) {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-fuel-blue">
          <span className="h-px w-8 bg-fuel-blue" />
          {feature.eyebrow}
        </span>
        <h2 className="mt-5 max-w-3xl text-2xl font-semibold leading-snug tracking-tight text-fuel-ink sm:text-3xl">
          {feature.heading}
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-fuel-steel">{feature.body}</p>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
            {feature.features.map((item) => (
              <div
                key={item.title}
                className="flex flex-col gap-3 rounded-3xl bg-fuel-mist p-7 ring-1 ring-fuel-line"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-fuel-ink text-fuel-sky">
                  <FillingIcon name={item.icon} className="h-6 w-6" />
                </span>
                <h3 className="text-lg font-semibold text-fuel-ink">{item.title}</h3>
                <p className="text-sm leading-6 text-fuel-steel">{item.body}</p>
              </div>
            ))}
          </div>

          <div className="relative min-h-[320px] overflow-hidden rounded-3xl lg:min-h-full">
            <Image
              src={feature.image}
              alt=""
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-fuel-ink/85 via-fuel-ink/10 to-transparent" />
            <p className="absolute bottom-0 left-0 max-w-sm p-7 text-lg font-medium leading-snug text-white">
              {feature.caption}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
