// Facts about FHS Enterprise that are repeated across the site: the footer, the
// contact page, structured data (JSON-LD) and the contact form's default
// recipients. Edit them HERE, once.
//
// A value of `null` means "not provided / not verified yet". Every consumer
// leaves that detail out entirely (a hidden phone row, no `telephone` in the
// JSON-LD) rather than publishing a placeholder as if it were real. This used to
// be "+880 123456789", which was shown on the contact page, in the footer, in
// search-engine structured data and in the FAQ.
export const ORGANIZATION = {
  email: "info@fhsenterprise.com",

  // TODO(real data): the public phone number, e.g. "+880 1XXX-XXXXXX".
  phone: null as string | null,

  // TODO(real data): all optional — each one that is set appears in the JSON-LD.
  streetAddress: null as string | null,
  postalCode: null as string | null,
  geo: null as { latitude: number; longitude: number } | null,
  foundingYear: null as string | null,

  locality: "Fulbariya",
  region: "Mymensingh",
  country: "BD",

  founder: { name: "Fakhrul Hasan Suton", jobTitle: "Proprietor" },
};

// Sections that currently contain unverified, invented-looking claims. They are
// hidden from the homepage until real content replaces them; flip a flag to show
// the section again.
//   stats        — "10+ years", "500+ happy customers", "24/7 support"
//   testimonials — named quotes under "Real experiences from business partners"
//   milestones   — the /about/milestones timeline: six invented-looking years (2014..2026)
//   founderFigures — "10+ years", "100+ team members", "50,000+ customers" on the founder page
//   facilityFigures — capacity badges on the facilities page ("120+ MT daily", ...)
//   legalPages   — the Privacy Policy and Terms of Use (src/data/legal.ts). A draft
//                  written from what the code does, NOT yet reviewed by the owner or
//                  a lawyer. While false, /privacy and /terms return 404 and nothing
//                  links to them (footer, contact form, sitemap).
export const SHOW_UNVERIFIED_SECTIONS = {
  stats: false,
  testimonials: false,
  legalPages: false,
  milestones: false,
  founderFigures: false,
  facilityFigures: false,
};
