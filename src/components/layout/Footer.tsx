import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { getSiteConfig } from "@/data/site";
import type { AppLocale } from "@/i18n/routing";
import SocialIcon from "@/components/icons/SocialIcon";

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
            <Link href="/" className="inline-flex items-center rounded-lg bg-white px-3 py-1.5">
              <Image
                src="/logos/logo-navbar.png"
                alt={siteConfig.groupName}
                width={800}
                height={540}
                className="h-10 w-auto"
              />
            </Link>
            <p className="mt-4 max-w-xs text-sm text-neutral-400">{siteConfig.tagline}</p>
            <div className="mt-5 flex gap-4">
              {siteConfig.socials.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="text-neutral-400 transition-colors hover:text-orange-500"
                >
                  <SocialIcon label={social.label} />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-neutral-500">
              {t("navigation")}
            </p>
            <ul className="mt-4 space-y-2">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-neutral-400 hover:text-orange-500">
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
              <li>{siteConfig.contact.email}</li>
              <li>{siteConfig.contact.phone}</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-neutral-500">
          &copy; {year} {siteConfig.groupName}. {t("rights")}
        </div>
      </div>
    </footer>
  );
}
