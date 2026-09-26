import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import ContactForm from "@/components/sections/contact/ContactForm";
import SocialIcon from "@/components/icons/SocialIcon";
import { MapPinIcon, MailIcon, PhoneIcon } from "@/components/icons/ContactIcons";
import { getSiteConfig } from "@/data/site";
import type { AppLocale } from "@/i18n/routing";

export default function ContactPage() {
  const { contact, socials } = getSiteConfig(useLocale() as AppLocale);
  const t = useTranslations("contactPage");
  const tCommon = useTranslations("common");
  const tHome = useTranslations("home.contact");

  const infoItems = [
    { label: t("visitUs"), value: contact.address, icon: MapPinIcon, href: undefined as string | undefined },
    { label: t("emailUs"), value: contact.email, icon: MailIcon, href: `mailto:${contact.email}` },
    {
      label: t("callUs"),
      value: contact.phone,
      icon: PhoneIcon,
      href: `tel:${contact.phone.replace(/[^+\d]/g, "")}`,
    },
  ];

  return (
    <div className="flex-1 bg-neutral-50">
      <section className="relative overflow-hidden bg-neutral-950 pb-28 pt-28 sm:pt-32">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_rgba(234,88,12,0.25),_transparent_55%)]" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle,_rgba(255,255,255,0.08)_1px,_transparent_1px)] bg-size-[28px_28px] opacity-40" />

        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <span className="inline-block rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-orange-400">
            {tHome("badge")}
          </span>
          <h1 className="mx-auto mt-5 max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-5xl">
            {t("heading")}
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-neutral-400">{contact.description}</p>
        </div>
      </section>

      <div className="relative mx-auto -mt-16 max-w-6xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {infoItems.map((item) => {
            const Icon = item.icon;
            const card = (
              <div className="group flex h-full flex-col items-start gap-4 rounded-2xl border border-neutral-200 bg-white p-6 shadow-lg shadow-neutral-900/5 transition-all hover:-translate-y-1 hover:shadow-xl">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-600 text-white transition-transform group-hover:scale-110">
                  <Icon />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-orange-600">
                    {item.label}
                  </p>
                  <p className="mt-1 text-neutral-900">{item.value}</p>
                </div>
              </div>
            );

            return item.href ? (
              <Link key={item.label} href={item.href} className="block">
                {card}
              </Link>
            ) : (
              <div key={item.label}>{card}</div>
            );
          })}
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <div className="grid grid-cols-1 overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-xl shadow-neutral-900/5 lg:grid-cols-5">
          <div className="relative overflow-hidden bg-neutral-950 p-10 text-white lg:col-span-2">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(234,88,12,0.3),_transparent_60%)]" />

            <h2 className="text-2xl font-bold">{tCommon("sendMessage")}</h2>
            <p className="mt-3 text-neutral-400">{t("formIntro")}</p>

            <div className="mt-10 space-y-5 border-t border-white/10 pt-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
                  {t("headOffice")}
                </p>
                <p className="mt-1 text-sm text-neutral-300">{contact.address}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
                  {tCommon("email")}
                </p>
                <p className="mt-1 text-sm text-neutral-300">{contact.email}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
                  {tCommon("phone")}
                </p>
                <p className="mt-1 text-sm text-neutral-300">{contact.phone}</p>
              </div>
            </div>

            <div className="mt-10 flex gap-4 border-t border-white/10 pt-8">
              {socials.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-neutral-300 transition-colors hover:bg-orange-600 hover:text-white"
                >
                  <SocialIcon label={social.label} />
                </Link>
              ))}
            </div>
          </div>

          <div className="p-8 sm:p-10 lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
