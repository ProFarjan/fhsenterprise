"use client";

import { useState } from "react";
import Image from "next/image";

// Product-detail image gallery: one large image with thumbnail buttons below.
// The images array is ordered banner-first by the content data.
export default function AgroMedProductGallery({
  images,
  name,
  formLabel,
  accentBarClass,
}: {
  images: string[];
  name: string;
  formLabel: string;
  accentBarClass: string;
}) {
  const [active, setActive] = useState(0);
  const current = images[active] ?? images[0];

  return (
    <div>
      <div className="relative aspect-square overflow-hidden rounded-3xl bg-vet-cloud ring-1 ring-vet-line">
        <Image
          key={current}
          src={current}
          alt={name}
          fill
          priority
          sizes="(min-width: 1024px) 40vw, 100vw"
          className="object-contain p-6"
        />
        <span className={`absolute left-5 top-5 h-1.5 w-16 rounded-full ${accentBarClass}`} />
        <span className="absolute right-5 top-5 rounded-full bg-white/85 px-3 py-1 text-xs font-medium text-vet-ink/70 ring-1 ring-white/60 backdrop-blur">
          {formLabel}
        </span>
      </div>

      {images.length > 1 && (
        <div className="mt-4 flex gap-3">
          {images.map((src, index) => (
            <button
              key={src}
              type="button"
              onClick={() => setActive(index)}
              aria-label={`${name} — image ${index + 1}`}
              aria-current={index === active}
              className={`relative h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-white transition-shadow ${
                index === active
                  ? "ring-2 ring-vet-teal"
                  : "ring-1 ring-vet-line hover:ring-vet-teal/50"
              }`}
            >
              <Image src={src} alt="" fill sizes="80px" className="object-contain p-1.5" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
