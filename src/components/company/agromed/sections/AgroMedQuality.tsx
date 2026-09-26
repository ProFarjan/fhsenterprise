import Image from "next/image";
import AgroMedIcon from "@/components/company/agromed/AgroMedIcon";
import type { AgroMedContent } from "@/types/agromed";

// Quality & research band: a lab image beside the value proposition and three
// assurance points.
export default function AgroMedQuality({ quality }: { quality: AgroMedContent["quality"] }) {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative order-last aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl shadow-vet-ink/10 ring-1 ring-vet-line lg:order-first">
            <Image
              src={quality.image}
              alt=""
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-vet-deep/40 to-transparent" />
          </div>

          <div>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-vet-teal">
              <span className="h-px w-8 bg-vet-teal" />
              {quality.eyebrow}
            </span>
            <h2 className="mt-5 font-vet text-3xl font-semibold leading-tight tracking-tight text-vet-ink sm:text-4xl">
              {quality.heading}
            </h2>
            <p className="mt-5 text-base leading-7 text-vet-ink/65">{quality.body}</p>

            <div className="mt-8 space-y-5">
              {quality.points.map((point) => (
                <div key={point.title} className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-vet-mist text-vet-teal-dark">
                    <AgroMedIcon name={point.icon} className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-vet-ink">{point.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-vet-ink/65">{point.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
