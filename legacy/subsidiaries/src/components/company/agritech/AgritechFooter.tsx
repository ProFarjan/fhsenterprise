import SocialIcon from "@/components/icons/SocialIcon";
import type { AppLocale } from "@/i18n/routing";
import type { AgritechFooterContent } from "@/types/agritech";
import type { NavItem } from "@/types/content";

function GearMark() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 5.5v-2M12 20.5v-2M5.5 12h-2M20.5 12h-2M7.6 7.6 6.2 6.2M17.8 17.8l-1.4-1.4M7.6 16.4l-1.4 1.4M17.8 6.2l-1.4 1.4" />
      <circle cx="12" cy="12" r="7" />
    </svg>
  );
}

// Bespoke graphite footer for MR Agri Technology: brand blurb + explore/contact/follow
// columns above the legal line. Modelled on FeedFooter.
export default function AgritechFooter({
  name,
  footer,
  nav,
  locale,
  rootDomain,
}: {
  name: string;
  footer: AgritechFooterContent;
  nav: NavItem[];
  locale: AppLocale;
  rootDomain: string;
}) {
  const resolveHref = (href: string) => `/${locale}${href === "/" ? "" : href}`;
  const exploreLinks = nav.filter((item) => item.href !== "/");

  return (
    <footer className="mt-auto bg-agri-graphite text-white/70">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 text-agri-amber">
              <GearMark />
              <span className="font-agri text-lg font-bold text-white">{name}</span>
            </div>
            <p className="mt-4 text-sm leading-6 text-white/55">{footer.blurb}</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">{footer.exploreHeading}</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {exploreLinks.map((item) => (
                <li key={item.href}>
                  <a href={resolveHref(item.href)} className="transition-colors hover:text-agri-amber">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">{footer.contactHeading}</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a href={`mailto:${footer.email}`} className="transition-colors hover:text-agri-amber">
                  {footer.email}
                </a>
              </li>
              <li>{footer.phone}</li>
            </ul>
            <h3 className="mt-6 text-sm font-semibold uppercase tracking-wide text-white">{footer.addressHeading}</h3>
            <address className="mt-3 space-y-1 text-sm not-italic">
              {footer.address.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </address>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">{footer.followHeading}</h3>
            <div className="mt-4 flex gap-3">
              {footer.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-agri-amber hover:text-agri-graphite"
                >
                  <SocialIcon label={social.label} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/40">{footer.legal}</p>
          <a
            href={`//${rootDomain}/${locale}`}
            className="text-sm font-semibold text-agri-amber transition-colors hover:text-white"
          >
            {name} · MR Group ↗
          </a>
        </div>
      </div>
    </footer>
  );
}
