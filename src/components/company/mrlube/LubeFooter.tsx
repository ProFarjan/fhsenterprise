import SocialIcon from "@/components/icons/SocialIcon";
import type { AppLocale } from "@/i18n/routing";
import type { LubeFooterContent } from "@/types/mrlube";
import type { NavItem } from "@/types/content";

function DropMark() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
      <path d="M12 3c3.4 4.4 5.4 7.6 5.4 10.4a5.4 5.4 0 1 1-10.8 0C6.6 10.6 8.6 7.4 12 3z" />
      <path d="M9 14a3 3 0 0 0 3 3" />
    </svg>
  );
}

// Bespoke carbon footer for MR Lube: brand blurb + explore/contact/follow
// columns above the legal line, with a thin red top edge. Modelled on
// AgritechFooter, restyled dark.
export default function LubeFooter({
  name,
  footer,
  nav,
  locale,
  rootDomain,
}: {
  name: string;
  footer: LubeFooterContent;
  nav: NavItem[];
  locale: AppLocale;
  rootDomain: string;
}) {
  const resolveHref = (href: string) => `/${locale}${href === "/" ? "" : href}`;
  const exploreLinks = nav.filter((item) => item.href !== "/");

  return (
    <footer className="mt-auto border-t-2 border-lube-red bg-lube-ink text-white/65">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 text-lube-red">
              <DropMark />
              <span className="font-lube text-xl font-bold uppercase tracking-wide text-white">{name}</span>
            </div>
            <p className="mt-4 text-sm leading-6 text-white/50">{footer.blurb}</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">{footer.exploreHeading}</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {exploreLinks.map((item) => (
                <li key={item.href}>
                  <a href={resolveHref(item.href)} className="transition-colors hover:text-lube-red">
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
                <a href={`mailto:${footer.email}`} className="transition-colors hover:text-lube-red">
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
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-lube-red hover:text-white"
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
            className="text-sm font-semibold text-lube-red transition-colors hover:text-white"
          >
            {name} · MR Group ↗
          </a>
        </div>
      </div>
    </footer>
  );
}
