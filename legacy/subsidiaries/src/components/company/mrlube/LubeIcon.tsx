import type { LubeIconName } from "@/types/mrlube";

// Inline stroke icons for the MR Lube subdomain. Keyed by name so content
// data can reference an icon without importing components. Scoped to mr-lube.
const PATHS: Record<LubeIconName, React.ReactNode> = {
  oil: (
    <>
      <path d="M12 3c3.5 4.5 5.5 7.8 5.5 10.6a5.5 5.5 0 1 1-11 0C6.5 10.8 8.5 7.5 12 3z" />
      <path d="M9 14a3 3 0 0 0 3 3" />
    </>
  ),
  engine: (
    <>
      <path d="M4 11h3V8h4v3h3l3-3h2v9h-2l-3-3h-3v3H7v-3H4z" />
      <path d="M9 8V6h4v2" />
    </>
  ),
  gear: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 4.5v-2M12 21.5v-2M4.5 12h-2M21.5 12h-2M6.3 6.3 4.9 4.9M19.1 19.1l-1.4-1.4M6.3 17.7l-1.4 1.4M19.1 4.9l-1.4 1.4" />
      <circle cx="12" cy="12" r="8" />
    </>
  ),
  drum: (
    <>
      <ellipse cx="12" cy="6" rx="6" ry="2.4" />
      <path d="M6 6v12c0 1.3 2.7 2.4 6 2.4s6-1.1 6-2.4V6" />
      <path d="M6 12c0 1.3 2.7 2.4 6 2.4s6-1.1 6-2.4" />
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
  flame: (
    <>
      <path d="M12 3c1 3 4 4.5 4 8.5A4 4 0 0 1 8 12c0-1.5.6-2.6 1.5-3.5C10 9.5 11 10 11.5 11c.7-3 .5-5-.5-8z" />
    </>
  ),
  droplet: (
    <>
      <path d="M12 3.5c3 4 5 6.8 5 9.5a5 5 0 1 1-10 0c0-2.7 2-5.5 5-9.5z" />
    </>
  ),
  snowflake: (
    <>
      <path d="M12 3v18M4.2 7.5 19.8 16.5M19.8 7.5 4.2 16.5" />
      <path d="M12 6.5 9.5 5M12 6.5 14.5 5M12 17.5 9.5 19M12 17.5 14.5 19" />
      <path d="M5 9.5 5.6 12 3.3 13M19 9.5l-.6 2.5 2.3 1M5 14.5 5.6 12 3.3 11M19 14.5l-.6-2.5 2.3-1" />
    </>
  ),
  factory: (
    <>
      <path d="M3 20V10l6 4V10l6 4V6h4v14z" />
      <path d="M3 20h18" />
      <path d="M7 20v-3M11 20v-3M15 20v-3" />
    </>
  ),
  wrench: (
    <>
      <path d="M20.5 6.5a5 5 0 0 0-6.7 5.7L5 21l-2-2 8.8-8.8A5 5 0 0 0 17.5 3.5l-3 3-3-3 3-3" />
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
};

export default function LubeIcon({
  name,
  className = "h-6 w-6",
}: {
  name: LubeIconName;
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
