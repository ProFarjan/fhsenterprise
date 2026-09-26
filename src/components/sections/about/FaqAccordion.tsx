"use client";

import { useState } from "react";
import type { FaqItem } from "@/types/content";

// The interactive accordion for the About > FAQ page. The question/answer
// data is fetched on the server (see about/faq/page.tsx, which reads the
// admin-managed FaqItem table via getFaqs) and passed in — this component only
// owns the open/closed UI state.
export default function FaqAccordion({ faqs }: { faqs: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="mx-auto max-w-3xl px-6 py-20 lg:px-8 lg:py-28">
      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={faq.question}
              className={`overflow-hidden rounded-2xl border transition-all ${
                isOpen
                  ? "border-orange-200 bg-orange-50/50 shadow-md"
                  : "border-neutral-200 bg-white shadow-sm hover:border-neutral-300"
              }`}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
                className="flex w-full items-center gap-5 px-6 py-6 text-left"
              >
                <span className="font-mono text-sm text-orange-600">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="flex-1 text-lg font-semibold text-neutral-900">
                  {faq.question}
                </span>
                <span
                  className={`flex h-9 w-9 flex-none items-center justify-center rounded-full transition-colors ${
                    isOpen ? "bg-orange-600 text-white" : "bg-neutral-100 text-neutral-500"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className={`h-5 w-5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.168l3.71-3.938a.75.75 0 1 1 1.08 1.04l-4.25 4.5a.75.75 0 0 1-1.08 0l-4.25-4.5a.75.75 0 0 1 .02-1.06Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </button>
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-6 pl-[3.75rem] leading-8 text-neutral-600">{faq.answer}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
