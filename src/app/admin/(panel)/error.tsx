"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";
import Link from "next/link";

// Wraps every page inside the (panel) route group (but not layout.tsx itself,
// per Next's error.js semantics — see the file-convention docs) — so an
// unexpected error in, say, the Media & News page still leaves the sidebar
// and topbar intact, with a clean fallback in the content area instead of
// the framework's raw error overlay.
export default function AdminPanelError({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  useEffect(() => {
    console.error("Admin panel error:", error);
  }, [error]);

  const isBodySizeLimit = /body exceeded.*limit/i.test(error.message);

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center rounded-xl border border-neutral-200 bg-white px-6 py-16 text-center">
      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 text-red-500">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.8}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-7 w-7"
        >
          <path d="M12 9v4M12 17h.01" />
          <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z" />
        </svg>
      </span>

      <h2 className="mt-5 text-lg font-semibold text-neutral-900">
        {isBodySizeLimit ? "That file is too large" : "Something went wrong"}
      </h2>
      <p className="mt-2 max-w-sm text-sm text-neutral-500">
        {isBodySizeLimit
          ? "The file you uploaded is larger than this form allows. Choose a smaller file (under 5MB) and try again."
          : "An unexpected error occurred. You can try again, or head back to the dashboard."}
      </p>

      <div className="mt-6 flex gap-3">
        <button
          type="button"
          onClick={() => unstable_retry()}
          className="rounded-lg bg-orange-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-orange-500"
        >
          Try again
        </button>
        <Link
          href="/admin"
          className="rounded-lg px-4 py-2.5 text-sm font-medium text-neutral-600 hover:bg-neutral-100"
        >
          Back to dashboard
        </Link>
      </div>

      {error.digest && (
        <p className="mt-6 text-xs text-neutral-400">Reference: {error.digest}</p>
      )}
    </div>
  );
}
