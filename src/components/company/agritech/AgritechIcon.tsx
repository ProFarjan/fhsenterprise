import type { AgritechIconName } from "@/types/agritech";

// Inline stroke icons for the MR Agri Technology subdomain. Keyed by name so
// content data can reference an icon without importing components. Scoped
// to agri-tech.
const PATHS: Record<AgritechIconName, React.ReactNode> = {
  engine: (
    <>
      <rect x="4" y="10" width="10" height="8" rx="1.5" />
      <path d="M14 12h3l3-3h2v10h-2l-3-3h-3" />
      <path d="M7 10V7h4v3M9 18v2" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 5 6v5c0 4 3 7 7 8 4-1 7-4 7-8V6l-7-3z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  wrench: (
    <>
      <path d="M20.5 6.5a5 5 0 0 0-6.7 5.7L5 21l-2-2 8.8-8.8A5 5 0 0 0 17.5 3.5l-3 3-3-3 3-3" />
    </>
  ),
  truck: (
    <>
      <path d="M3 6h11v9H3zM14 9h4l3 3v3h-7" />
      <circle cx="7" cy="18" r="1.8" />
      <circle cx="17.5" cy="18" r="1.8" />
    </>
  ),
  sensor: (
    <>
      <rect x="7" y="7" width="10" height="10" rx="1.5" />
      <circle cx="12" cy="12" r="2.2" />
      <path d="M12 7V4M12 20v-3M7 12H4M20 12h-3M8.5 8.5 6.3 6.3M17.7 17.7l-2.2-2.2M8.5 15.5l-2.2 2.2M17.7 6.3l-2.2 2.2" />
    </>
  ),
  leaf: (
    <>
      <path d="M11 20c-4 0-7-3-7-7 0-6 8-9 15-9 0 8-3 16-8 16-2 0-4-1-4-4 0-3 4-5 8-6" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v4l3 2" />
    </>
  ),
  award: (
    <>
      <circle cx="12" cy="9" r="5" />
      <path d="m9 13-1.5 7L12 18l4.5 2L15 13" />
    </>
  ),
  tractor: (
    <>
      <circle cx="8" cy="17" r="3.5" />
      <circle cx="18" cy="17" r="2.5" />
      <path d="M4.5 17h-1M11.5 17h2l2-6h4M17.5 11V8h-3M15 17v-6h-4l-2 4v2" />
    </>
  ),
  irrigation: (
    <>
      <path d="M12 3c3 4.2 5.2 7.5 5.2 10.3a5.2 5.2 0 1 1-10.4 0C6.8 10.5 9 7.2 12 3z" />
      <path d="M9.2 15.3a2.8 2.8 0 0 0 2.8 2.8" />
    </>
  ),
  tools: (
    <>
      <path d="M20.5 6.5a5 5 0 0 0-6.7 5.7L5 21l-2-2 8.8-8.8A5 5 0 0 0 17.5 3.5l-3 3-3-3 3-3" />
      <path d="m17.5 17.5 3 3a2 2 0 1 0 3-3l-3-3" />
    </>
  ),
  drone: (
    <>
      <circle cx="12" cy="12" r="2.4" />
      <path d="M10 10 5.5 5.5M14 10l4.5-4.5M10 14l-4.5 4.5M14 14l4.5 4.5" />
      <circle cx="4.5" cy="4.5" r="2" />
      <circle cx="19.5" cy="4.5" r="2" />
      <circle cx="4.5" cy="19.5" r="2" />
      <circle cx="19.5" cy="19.5" r="2" />
    </>
  ),
};

export default function AgritechIcon({
  name,
  className = "h-6 w-6",
}: {
  name: AgritechIconName;
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
