import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { getSiteConfig } from "@/data/site";
import type { AppLocale } from "@/i18n/routing";
import SocialLink from "@/components/icons/SocialLink";

export default function Footer() {
  const locale = useLocale() as AppLocale;
  const siteConfig = getSiteConfig(locale);
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-neutral-950 text-neutral-400">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Link href="/" className="inline-flex items-center rounded-lg bg-white px-2 py-1">
              <Image
                src="/logos/fhs_logo.png"
                alt={siteConfig.groupName}
                width={1266}
                height={370}
                className="h-14 w-auto object-contain"
              />
            </Link>
            <p className="mt-4 max-w-xs text-sm text-neutral-400">{siteConfig.tagline}</p>
            {siteConfig.socials.length > 0 && (
              <div className="mt-5 flex gap-4">
                {siteConfig.socials.map((social) => (
                  <SocialLink
                    key={social.label}
                    label={social.label}
                    href={social.href}
                    className="text-neutral-400 transition-colors hover:text-emerald-400"
                  />
                ))}
              </div>
            )}
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-neutral-500">
              {t("navigation")}
            </p>
            <ul className="mt-4 space-y-2">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-neutral-400 hover:text-emerald-400">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-neutral-500">
              {t("contact")}
            </p>
            <ul className="mt-4 space-y-2 text-sm text-neutral-400">
              <li>{siteConfig.contact.address}</li>
              <li>
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-emerald-400">
                  {siteConfig.contact.email}
                </a>
              </li>
              {siteConfig.contact.phone && (
                <li>
                  <a
                    href={`tel:${siteConfig.contact.phone.replace(/[^+\d]/g, "")}`}
                    className="hover:text-emerald-400"
                  >
                    {siteConfig.contact.phone}
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-neutral-500 sm:flex-row">
          <p>
            &copy; {year} {siteConfig.groupName}. {t("rights")}
          </p>
          <ul className="flex gap-5">
            <li>
              <Link href="/privacy" className="hover:text-emerald-400">
                {t("privacy")}
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-emerald-400">
                {t("terms")}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
