"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import type { FaqItem } from "@/types/content";

// The interactive accordion for the About > FAQ page.
export default function FaqAccordion({ faqs }: { faqs: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const locale = useLocale();
  const t = useTranslations("aboutPages");

  return (
    <section className="mx-auto max-w-3xl px-6 py-20 lg:px-8 lg:py-28">
      <div className="mb-12 text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0045A0]">
          FAQ
        </span>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
          {t("faqsTitle")}
        </h2>
        <p className="mt-3 text-base text-neutral-600 sm:text-lg">
          {t("faqsSubtitle")}
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={faq.question}
              className={`overflow-hidden rounded-2xl border transition-all ${
                isOpen
                  ? "border-blue-200 bg-blue-50/40 shadow-md ring-1 ring-blue-100"
                  : "border-neutral-200 bg-white shadow-sm hover:border-neutral-300"
              }`}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
                className="flex w-full items-center gap-5 px-6 py-6 text-left"
              >
                <span className="font-mono text-sm font-semibold text-[#0045A0]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="flex-1 text-lg font-semibold text-neutral-900">
                  {faq.question}
                </span>
                <span
                  className={`flex h-9 w-9 flex-none items-center justify-center rounded-full transition-colors ${
                    isOpen ? "bg-[#0045A0] text-white" : "bg-neutral-100 text-neutral-500"
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

      <div className="mt-14 rounded-2xl border border-blue-100 bg-blue-50/50 p-8 text-center sm:p-10">
        <h3 className="text-xl font-bold text-neutral-900">
          {locale === "bn" ? "আরও কিছু জানতে চান?" : "Still Have Questions?"}
        </h3>
        <p className="mt-2 text-sm text-neutral-600 sm:text-base">
          {locale === "bn"
            ? "আপনার কাঙ্ক্ষিত উত্তরটি খুঁজে পাননি? যেকোনো জিজ্ঞাসা বা ব্যবসায়িক অংশীদারিত্বের জন্য আমাদের ফুলবাড়িয়া কার্যালয়ে যোগাযোগ করুন।"
            : "Can't find the answer you're looking for? Feel free to reach out directly to our corporate team in Fulbariya."}
        </p>
        <div className="mt-6">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full bg-[#0045A0] px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#003882] transition-colors"
          >
            {locale === "bn" ? "যোগাযোগ করুন →" : "Contact FHS Enterprise →"}
          </Link>
        </div>
      </div>
    </section>
  );
}
