"use client";

import { useState } from "react";
import type { AgroContent } from "@/types/agro";

function Arrow({ direction }: { direction: "left" | "right" }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d={direction === "left" ? "M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" : "M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"}
      />
    </svg>
  );
}

// Partner testimonials shown three-up on desktop, paged in a scroll-snap track
// on smaller screens with prev/next controls.
export default function AgroPartners({ partners }: { partners: AgroContent["partners"] }) {
  const items = partners.items;
  const [active, setActive] = useState(0);

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-normal text-agro-forest sm:text-4xl">{partners.heading}</h2>
          <p className="mt-3 text-base leading-7 text-neutral-500">{partners.subtitle}</p>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <li
              key={item.name}
              className={`flex flex-col rounded-3xl border border-neutral-200 p-7 transition-shadow ${
                i === active ? "bg-agro-cream" : "bg-white"
              } ${i === active ? "" : "hidden sm:flex"}`}
            >
              <span className="font-display text-xl font-semibold text-agro-leaf">{item.logo}</span>
              <p className="mt-4 flex-1 text-sm leading-7 text-agro-forest/85">“{item.quote}”</p>
              <div className="mt-6 border-t border-neutral-200/70 pt-4">
                <p className="text-sm font-semibold text-agro-forest">{item.name}</p>
                <p className="text-xs text-neutral-500">{item.role}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex items-center gap-3 sm:hidden">
          <button
            type="button"
            onClick={() => setActive((a) => (a - 1 + items.length) % items.length)}
            aria-label="Previous"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-agro-leaf/40 text-agro-leaf transition-colors hover:bg-agro-cream"
          >
            <Arrow direction="left" />
          </button>
          <button
            type="button"
            onClick={() => setActive((a) => (a + 1) % items.length)}
            aria-label="Next"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-agro-leaf text-white transition-colors hover:bg-agro-leaf-light"
          >
            <Arrow direction="right" />
          </button>
        </div>
      </div>
    </section>
  );
}
