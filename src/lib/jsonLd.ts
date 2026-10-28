// Serialises structured data for an inline <script type="application/ld+json">.
//
// JSON.stringify alone is not safe there: the HTML parser ends a script block at
// the first "</script", so a string value containing it (e.g. a FAQ answer typed
// into the admin panel) would break out of the block and inject markup. Escaping
// "<" as \u003c is still valid JSON — parsers read it back as "<" — but can never
// close the element. U+2028/2029 are escaped too, for older script engines.
export function jsonLdString(data: unknown): string {
  return JSON.stringify(data)
    .replace(/</g, "\\u003c")
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029");
}
