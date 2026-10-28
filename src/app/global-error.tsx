"use client";

import { useEffect } from "react";

// Last-resort boundary: replaces the root layout when it (or the locale layout)
// throws, so it must render its own <html>/<body> and cannot rely on Tailwind,
// fonts or next-intl. Copy is bilingual because the locale is unknown here.
export default function GlobalError({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="bn">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#ffffff",
          color: "#171717",
          fontFamily: "system-ui, -apple-system, 'Segoe UI', 'Noto Sans Bengali', sans-serif",
        }}
      >
        <main role="alert" style={{ textAlign: "center", padding: "2rem", maxWidth: "28rem" }}>
          <h1 style={{ margin: 0, fontSize: "1.5rem", fontWeight: 700 }}>
            কিছু একটা সমস্যা হয়েছে
          </h1>
          <p style={{ margin: "0.5rem 0 0", color: "#525252" }}>Something went wrong.</p>
          <p style={{ margin: "0.75rem 0 1.75rem", color: "#525252" }}>
            অনুগ্রহ করে কিছুক্ষণ পরে আবার চেষ্টা করুন। / Please try again in a moment.
          </p>
          <button
            type="button"
            onClick={() => unstable_retry()}
            style={{
              border: 0,
              borderRadius: "9999px",
              background: "#0045a0",
              color: "#fff",
              padding: "0.7rem 1.5rem",
              fontSize: "0.9rem",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            আবার চেষ্টা করুন / Try again
          </button>
        </main>
      </body>
    </html>
  );
}
