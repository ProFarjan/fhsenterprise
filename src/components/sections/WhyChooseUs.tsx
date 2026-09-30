"use client";

import { useTranslations } from "next-intl";

interface FeatureConfig {
  key: "quality" | "experience" | "portfolio" | "local" | "customer" | "sustainability";
  colorClass: string;
  iconBgClass: string;
  hoverBorderClass: string;
  icon: React.ReactNode;
}

const features: FeatureConfig[] = [
  {
    key: "quality",
    colorClass: "text-[#0045a0]",
    iconBgClass: "bg-[#0045a0]/10",
    hoverBorderClass: "hover:border-[#0045a0]",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    key: "experience",
    colorClass: "text-[#097b33]",
    iconBgClass: "bg-[#097b33]/10",
    hoverBorderClass: "hover:border-[#097b33]",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    key: "portfolio",
    colorClass: "text-[#0045a0]",
    iconBgClass: "bg-[#0045a0]/10",
    hoverBorderClass: "hover:border-[#0045a0]",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    key: "local",
    colorClass: "text-[#097b33]",
    iconBgClass: "bg-[#097b33]/10",
    hoverBorderClass: "hover:border-[#097b33]",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    key: "customer",
    colorClass: "text-[#0045a0]",
    iconBgClass: "bg-[#0045a0]/10",
    hoverBorderClass: "hover:border-[#0045a0]",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    key: "sustainability",
    colorClass: "text-[#097b33]",
    iconBgClass: "bg-[#097b33]/10",
    hoverBorderClass: "hover:border-[#097b33]",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
];

export default function WhyChooseUs() {
  const t = useTranslations("home.whyChooseUs");

  return (
    <section className="py-24 bg-neutral-950 text-white relative overflow-hidden">
      {/* Background glow using FHS logo blue and green */}
      <div className="absolute top-0 left-1/4 -translate-x-1/2 w-96 h-96 bg-[#0045a0]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 translate-x-1/2 w-96 h-96 bg-[#097b33]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#097b33]/30 bg-[#097b33]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#22c55e]">
            {t("badge")}
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            {t("title")}
          </h2>
          <div className="mt-4 flex items-center justify-center gap-2">
            <span className="h-1 w-12 rounded-full bg-[#0045a0]" />
            <span className="h-1 w-8 rounded-full bg-[#097b33]" />
          </div>
          <p className="mt-6 text-neutral-300 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.key}
              className={`p-8 rounded-3xl bg-neutral-900/90 border border-neutral-800 ${feature.hoverBorderClass} transition-all duration-300 hover:-translate-y-1 shadow-lg`}
            >
              <div
                className={`w-14 h-14 ${feature.iconBgClass} ${feature.colorClass} rounded-2xl flex items-center justify-center mb-6`}
              >
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">
                {t(`features.${feature.key}.title`)}
              </h3>
              <p className="text-neutral-400 leading-relaxed text-sm sm:text-base">
                {t(`features.${feature.key}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
