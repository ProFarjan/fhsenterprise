// Subsidiaries that run as their own deployments. This app only forwards to them.
// One list feeds both the host-based redirects in src/proxy.ts and the path
// redirects in next.config.ts, so the two can't drift apart.
//
// Deliberately dependency-free: next.config.ts imports it, and it is evaluated
// before the app's path aliases (`@/`) exist.
export const EXTERNAL_COMPANIES = [
  {
    url: "https://vehiclesolutions.fhsenterprise.com",
    // <host>.<root domain> names that forward here (vehiclesolutions.fhsenterprise.com, ...)
    hosts: ["vehiclesolutions", "vehicle-solutions"],
    // /companies/<slug> and /<locale>/companies/<slug>
    paths: ["vehicle-solutions"],
  },
  {
    url: "https://dailybazar.fhsenterprise.com",
    hosts: ["dailybazar", "daily-bazar"],
    paths: ["daily-bazar", "dailybazar"],
  },
] as const;
