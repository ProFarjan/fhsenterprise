import SocialIcon from "@/components/icons/SocialIcon";

// Social links point at other sites, so they are plain anchors (not the
// locale-aware Link) that open in a new tab without leaking window.opener.
export default function SocialLink({
  label,
  href,
  className,
}: {
  label: string;
  href: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label} (opens in a new tab)`}
      className={className}
    >
      <SocialIcon label={label} />
    </a>
  );
}
