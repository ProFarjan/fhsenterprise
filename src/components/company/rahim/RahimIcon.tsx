import type { RahimIconName } from "@/types/rahim";

// Inline stroke icons for the Rahim Enterprise ammonia subdomain. Keyed by
// name so content data can reference an icon without importing components.
// Scoped to rahim.
const PATHS: Record<RahimIconName, React.ReactNode> = {
  cylinder: (
    <>
      <path d="M9 6.5V5a3 3 0 0 1 6 0v1.5" />
      <rect x="7" y="6.5" width="10" height="14" rx="2" />
      <path d="M11 3.5h2" />
    </>
  ),
  snowflake: (
    <>
      <path d="M12 3v18M4.2 7.5 19.8 16.5M19.8 7.5 4.2 16.5" />
      <path d="M12 6.5 9.5 5M12 6.5 14.5 5M12 17.5 9.5 19M12 17.5 14.5 19" />
      <path d="M5 9.5 5.6 12 3.3 13M19 9.5l-.6 2.5 2.3 1M5 14.5 5.6 12 3.3 11M19 14.5l-.6-2.5 2.3-1" />
    </>
  ),
  molecule: (
    <>
      <circle cx="12" cy="6" r="2" />
      <circle cx="6" cy="17" r="2" />
      <circle cx="18" cy="17" r="2" />
      <path d="M11 7.7 7 15.3M13 7.7l4 7.6M8 17h8" />
    </>
  ),
  flask: (
    <>
      <path d="M9 3h6M10 3v6l-4.5 8a1.5 1.5 0 0 0 1.3 2.3h10.4A1.5 1.5 0 0 0 18.5 17L14 9V3" />
      <path d="M7.5 15h9" />
    </>
  ),
  factory: (
    <>
      <path d="M3 20V10l6 4V10l6 4V6h4v14z" />
      <path d="M3 20h18" />
      <path d="M7 20v-3M11 20v-3M15 20v-3" />
    </>
  ),
  droplet: (
    <>
      <path d="M12 3.5c3 4 5 6.8 5 9.5a5 5 0 1 1-10 0c0-2.7 2-5.5 5-9.5z" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 5 6v5c0 4 3 7 7 8 4-1 7-4 7-8V6l-7-3z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  truck: (
    <>
      <path d="M3 6h11v9H3zM14 9h4l3 3v3h-7" />
      <circle cx="7" cy="18" r="1.8" />
      <circle cx="17.5" cy="18" r="1.8" />
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
  leaf: (
    <>
      <path d="M11 20c-4 0-7-3-7-7 0-6 8-9 15-9 0 8-3 16-8 16-2 0-4-1-4-4 0-3 4-5 8-6" />
    </>
  ),
  tank: (
    <>
      <rect x="3" y="8" width="18" height="9" rx="4.5" />
      <path d="M3 12.5h18" />
      <path d="M7 17v2M17 17v2M12 5v3" />
    </>
  ),
  thermometer: (
    <>
      <path d="M12 3a2 2 0 0 1 2 2v9a4 4 0 1 1-4 0V5a2 2 0 0 1 2-2z" />
      <path d="M12 10v5" />
    </>
  ),
  wave: (
    <>
      <path d="M3 8c2 0 2.5 2 4.5 2S10 8 12 8s2.5 2 4.5 2S19 8 21 8" />
      <path d="M3 13c2 0 2.5 2 4.5 2S10 13 12 13s2.5 2 4.5 2S19 13 21 13" />
    </>
  ),
  check: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="m8.5 12 2.5 2.5 4.5-5" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s6-5.3 6-10a6 6 0 1 0-12 0c0 4.7 6 10 6 10z" />
      <circle cx="12" cy="11" r="2.2" />
    </>
  ),
};

export default function RahimIcon({
  name,
  className = "h-6 w-6",
}: {
  name: RahimIconName;
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
