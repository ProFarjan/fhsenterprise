import Link from "next/link";

// Root not-found boundary. The root layout (src/app/layout.tsx) intentionally
// renders no <html>/<body> — those live in [locale]/layout.tsx. But notFound()
// thrown anywhere (e.g. an unknown product category) renders the nearest
// not-found inside the ROOT layout, so this file must supply its own <html> and
// <body>; otherwise Next.js throws "Missing <html> and <body> tags in the root
// layout".
export default function NotFound() {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#f6faf9",
          color: "#0f2b28",
          fontFamily: "system-ui, -apple-system, Segoe UI, sans-serif",
        }}
      >
        <main style={{ textAlign: "center", padding: "2rem" }}>
          <p style={{ margin: 0, fontSize: "3.5rem", fontWeight: 700, letterSpacing: "-0.02em" }}>404</p>
          <h1 style={{ margin: "0.5rem 0 0", fontSize: "1.25rem", fontWeight: 600 }}>
            Page not found
          </h1>
          <p style={{ margin: "0.75rem 0 1.75rem", color: "#51637f" }}>
            The page you’re looking for doesn’t exist or has moved.
          </p>
          <Link
            href="/"
            style={{
              display: "inline-block",
              borderRadius: "9999px",
              background: "#0d9488",
              color: "#fff",
              padding: "0.7rem 1.5rem",
              fontSize: "0.9rem",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Go to homepage
          </Link>
        </main>
      </body>
    </html>
  );
}
