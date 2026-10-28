// Reads a text field from a submitted form: "" when missing, trimmed otherwise.
// (FormData.get returns File | string | null, so every action used to repeat
// `String(formData.get("x") ?? "").trim()`.)
export function formString(formData: FormData, key: string): string {
  return String(formData.get(key) ?? "").trim();
}
