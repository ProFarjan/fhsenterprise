import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "../globals.css";

// The admin panel lives OUTSIDE the `[locale]` segment (it is reached at a
// clean, locale-free `/admin` — see the matcher in src/proxy.ts). Because the
// real <html>/<body> normally come from src/app/[locale]/layout.tsx, this
// section has to provide its own document shell.
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Admin · FHS Enterprise",
  description: "FHS Enterprise administration panel",
  robots: { index: false, follow: false },
};

export default function AdminRootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full bg-neutral-100 font-[family-name:var(--font-geist-sans)] text-neutral-900">
        {children}
      </body>
    </html>
  );
}
