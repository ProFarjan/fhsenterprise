import SocialIcon from "@/components/icons/SocialIcon";
import type { AppLocale } from "@/i18n/routing";
import type { FeedFooterContent } from "@/types/feed";
import type { NavItem } from "@/types/content";

function WheatMark() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
      <path d="M12 22V9" />
      <path d="M12 9c0-2-1.4-3.4-3.4-3.4C8.6 7.6 10 9 12 9zM12 9c0-2 1.4-3.4 3.4-3.4C15.4 7.6 14 9 12 9z" />
      <path d="M12 14c0-2-1.4-3.4-3.4-3.4C8.6 12.6 10 14 12 14zM12 14c0-2 1.4-3.4 3.4-3.4C15.4 12.6 14 14 12 14z" />
      <path d="M12 19c0-2-1.4-3.4-3.4-3.4C8.6 17.6 10 19 12 19zM12 19c0-2 1.4-3.4 3.4-3.4C15.4 17.6 14 19 12 19z" />
    </svg>
  );
}

// Bespoke espresso footer for MR Feed: brand blurb + explore/contact/follow
// columns above the legal line. Distinct from the generic CompanyFooter.
export default function FeedFooter({
  name,
  footer,
  nav,
  locale,
  rootDomain,
}: {
  name: string;
  footer: FeedFooterContent;
  nav: NavItem[];
  locale: AppLocale;
  rootDomain: string;
}) {
  const resolveHref = (href: string) => `/${locale}${href === "/" ? "" : href}`;
  const exploreLinks = nav.filter((item) => item.href !== "/");

  return (
    <footer className="mt-auto bg-feed-bark text-feed-cream/70">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 text-feed-gold">
              <WheatMark />
              <span className="font-feed text-lg font-bold text-white">{name}</span>
            </div>
            <p className="mt-4 text-sm leading-6 text-feed-cream/60">{footer.blurb}</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">{footer.exploreHeading}</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {exploreLinks.map((item) => (
                <li key={item.href}>
                  <a href={resolveHref(item.href)} className="transition-colors hover:text-feed-gold">
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
                <a href={`mailto:${footer.email}`} className="transition-colors hover:text-feed-gold">
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
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-feed-amber"
                >
                  <SocialIcon label={social.label} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-feed-cream/40">{footer.legal}</p>
          <a
            href={`//${rootDomain}/${locale}`}
            className="text-sm font-semibold text-feed-gold transition-colors hover:text-white"
          >
            {name} · MR Group ↗
          </a>
        </div>
      </div>
    </footer>
  );
}
