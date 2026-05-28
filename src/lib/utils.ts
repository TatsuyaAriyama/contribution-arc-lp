type ClassValue = string | number | null | false | undefined | ClassValue[];

/**
 * Prefix a public asset path (e.g. "/screenshots/x.png") with NEXT_PUBLIC_BASE_PATH
 * so the URL works when the site is hosted at a sub-path (GitHub Pages).
 * In dev (no env), returns the path unchanged.
 */
export function asset(p: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  if (!base) return p;
  if (p.startsWith(base)) return p;
  return `${base}${p.startsWith("/") ? "" : "/"}${p}`;
}

export function cn(...inputs: ClassValue[]): string {
  const out: string[] = [];
  const walk = (v: ClassValue) => {
    if (!v && v !== 0) return;
    if (Array.isArray(v)) {
      v.forEach(walk);
      return;
    }
    out.push(String(v));
  };
  inputs.forEach(walk);
  return out.join(" ");
}
