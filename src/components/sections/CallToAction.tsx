"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function CallToAction() {
  const t = useTranslations("home.cta");

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-r from-[#0045a0] via-[#003680] to-[#097b33] text-white">
      {/* Decorative background circles */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-white/10 blur-2xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-[#097b33]/30 blur-2xl pointer-events-none" />

      <div className="container mx-auto px-6 max-w-5xl text-center relative z-10">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white backdrop-blur-sm">
          {t("badge")}
        </span>

        <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
          {t("title")}
        </h2>

        <p className="mt-6 text-base sm:text-xl text-blue-50 max-w-3xl mx-auto leading-relaxed">
          {t("subtitle")}
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/#contact"
            className="w-full sm:w-auto px-8 py-4 bg-white text-[#0045a0] font-bold rounded-2xl shadow-xl hover:bg-neutral-100 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            {t("contactBtn")}
          </Link>
          <Link
            href="/companies"
            className="w-full sm:w-auto px-8 py-4 bg-white/10 border-2 border-white/60 text-white font-bold rounded-2xl backdrop-blur-sm hover:bg-white/20 hover:border-white transition-all duration-300 hover:scale-105 active:scale-95"
          >
            {t("companiesBtn")}
          </Link>
        </div>
      </div>
    </section>
  );
}
