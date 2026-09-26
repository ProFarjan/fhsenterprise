import type { MahinIconName } from "@/types/mahin";

// Inline stroke icons for the Mahin Enterprise LPG subdomain. Keyed by name
// so content data can reference an icon without importing components. Scoped
// to mahin.
const PATHS: Record<MahinIconName, React.ReactNode> = {
  cylinder: (
    <>
      <path d="M9 6.5V5a3 3 0 0 1 6 0v1.5" />
      <rect x="7" y="6.5" width="10" height="14" rx="2" />
      <path d="M11 3.5h2" />
    </>
  ),
  flame: (
    <>
      <path d="M12 3c1.2 3 4 4.6 4 8.4A4 4 0 0 1 8 12c0-1.6.6-2.7 1.6-3.6.4 1.3 1.4 1.9 2 2.9.8-3.2.5-5.4-.6-8.3z" />
    </>
  ),
  truck: (
    <>
      <path d="M3 6h11v9H3zM14 9h4l3 3v3h-7" />
      <circle cx="7" cy="18" r="1.8" />
      <circle cx="17.5" cy="18" r="1.8" />
    </>
  ),
  home: (
    <>
      <path d="M4 11.5 12 4l8 7.5" />
      <path d="M6 10.5V20h12v-9.5" />
      <path d="M10 20v-5h4v5" />
    </>
  ),
  factory: (
    <>
      <path d="M3 20V10l6 4V10l6 4V6h4v14z" />
      <path d="M3 20h18" />
      <path d="M7 20v-3M11 20v-3M15 20v-3" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 5 6v5c0 4 3 7 7 8 4-1 7-4 7-8V6l-7-3z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  gauge: (
    <>
      <path d="M4 14a8 8 0 0 1 16 0" />
      <path d="M12 14l4-3" />
      <circle cx="12" cy="14" r="1.3" />
      <path d="M4 14v3M20 14v3" />
    </>
  ),
  wrench: (
    <>
      <path d="M20.5 6.5a5 5 0 0 0-6.7 5.7L5 21l-2-2 8.8-8.8A5 5 0 0 0 17.5 3.5l-3 3-3-3 3-3" />
    </>
  ),
  phone: (
    <>
      <path d="M6 3h3l1.5 4.5-2 1.3a11 11 0 0 0 4.7 4.7l1.3-2L19 15v3a2 2 0 0 1-2 2A14 14 0 0 1 4 6a2 2 0 0 1 2-3z" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v4l3 2" />
    </>
  ),
  leaf: (
    <>
      <path d="M11 20c-4 0-7-3-7-7 0-6 8-9 15-9 0 8-3 16-8 16-2 0-4-1-4-4 0-3 4-5 8-6" />
    </>
  ),
  car: (
    <>
      <path d="M4 15v-3l2-5h12l2 5v3" />
      <path d="M3 15h18v3h-2v-1H5v1H3z" />
      <circle cx="7.5" cy="15" r="1.4" />
      <circle cx="16.5" cy="15" r="1.4" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s6-5.3 6-10a6 6 0 1 0-12 0c0 4.7 6 10 6 10z" />
      <circle cx="12" cy="11" r="2.2" />
    </>
  ),
  check: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="m8.5 12 2.5 2.5 4.5-5" />
    </>
  ),
};

export default function MahinIcon({
  name,
  className = "h-6 w-6",
}: {
  name: MahinIconName;
  className?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      {PATHS[name]}
    </svg>
  );
}
