import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["bn", "en"],
  defaultLocale: "bn",
  localePrefix: "always",
  // Always land first-time visitors on Bangla. Without this, next-intl sniffs
  // the browser's Accept-Language header and sends English-language browsers
  // to /en; visitors still switch to English via the language switcher.
  localeDetection: false,
});

export type AppLocale = (typeof routing.locales)[number];
