"use client";

import { useTranslations } from "next-intl";

export default function Testimonials() {
  const t = useTranslations("home.testimonials");
  const rawItems = t.raw("items") as Array<{ quote: string; author: string; role: string }>;

  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#0045a0]/20 bg-[#0045a0]/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#0045a0]">
            {t("badge")}
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900">
            {t("title")}
          </h2>
          <div className="mt-4 flex items-center justify-center gap-2">
            <span className="h-1 w-12 rounded-full bg-[#0045a0]" />
            <span className="h-1 w-8 rounded-full bg-[#097b33]" />
          </div>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {rawItems.map((item, idx) => (
            <div
              key={idx}
              className="bg-neutral-50 p-8 rounded-3xl shadow-sm border border-neutral-200/80 relative flex flex-col justify-between hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-[#0045a0]/15 absolute top-6 left-6 pointer-events-none">
                <svg className="w-14 h-14" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21L16.09 13.914C16.924 10.998 18.254 9.079 20.081 8.16L18.423 6C16.208 7.359 14.773 9.771 14.161 13.238L14.017 21H14.017ZM6.017 21L8.09 13.914C8.924 10.998 10.254 9.079 12.081 8.16L10.423 6C8.208 7.359 6.773 9.771 6.161 13.238L6.017 21H6.017Z" />
                </svg>
              </div>

              <p className="text-neutral-700 italic mb-8 relative z-10 pt-6 text-base leading-relaxed">
                "{item.quote}"
              </p>

              <div className="flex items-center pt-4 border-t border-neutral-200/70">
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-lg mr-4 text-white shadow-sm ${
                    idx % 2 === 0 ? "bg-[#0045a0]" : "bg-[#097b33]"
                  }`}
                >
                  {item.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-neutral-900">{item.author}</h4>
                  <p className="text-xs sm:text-sm font-medium text-neutral-500">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
