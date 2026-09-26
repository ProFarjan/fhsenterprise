// This root layout only exists because Next.js requires one outside the
// `[locale]` segment (e.g. for the api/ routes). All real HTML structure,
// fonts, and providers live in src/app/[locale]/layout.tsx.
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
