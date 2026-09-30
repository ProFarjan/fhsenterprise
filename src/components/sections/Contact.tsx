import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { getSiteConfig } from "@/data/site";
import type { AppLocale } from "@/i18n/routing";
import { MapPinIcon, MailIcon, PhoneIcon } from "@/components/icons/ContactIcons";

export default function Contact() {
  const { contact } = getSiteConfig(useLocale() as AppLocale);
  const t = useTranslations("home.contact");
  const tCommon = useTranslations("common");

  const infoItems = [
    { label: tCommon("address"), value: contact.address, icon: MapPinIcon },
    { label: tCommon("email"), value: contact.email, icon: MailIcon },
    { label: tCommon("phone"), value: contact.phone, icon: PhoneIcon },
  ];

  return (
    <section id="contact" className="relative overflow-hidden bg-white py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,_rgba(0,69,160,0.06),_transparent_55%)]" />

      <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
        <span className="inline-block rounded-full border border-[#0045a0]/20 bg-[#0045a0]/5 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-[#0045a0]">
          {t("badge")}
        </span>
        <h2 className="mt-5 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
          {contact.title}
        </h2>
        <div className="mt-3 flex items-center justify-center gap-2">
          <span className="h-1 w-12 rounded-full bg-[#0045a0]" />
          <span className="h-1 w-8 rounded-full bg-[#097b33]" />
        </div>
        <p className="mx-auto mt-4 max-w-xl text-lg text-neutral-600">{contact.description}</p>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {infoItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="group flex flex-col items-center gap-3 rounded-3xl border border-neutral-200 bg-neutral-50 px-6 py-8 text-center transition-all hover:-translate-y-1 hover:border-[#0045a0]/30 hover:bg-white hover:shadow-xl"
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl text-white transition-transform group-hover:scale-110 shadow-sm ${
                    idx === 1 ? "bg-[#097b33]" : "bg-[#0045a0]"
                  }`}
                >
                  <Icon />
                </div>
                <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
                  {item.label}
                </p>
                <p className="text-sm font-medium text-neutral-800">{item.value}</p>
              </div>
            );
          })}
        </div>

        <Link
          href="/contact"
          className="mt-12 inline-flex items-center gap-2 rounded-full bg-[#0045a0] px-8 py-3.5 text-sm font-semibold text-white shadow-md transition-colors hover:bg-[#003680]"
        >
          {tCommon("sendMessage")}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-4 w-4"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
