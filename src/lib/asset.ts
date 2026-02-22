/**
 * Prepends the base path for assets used outside of Next.js <Image> component.
 * Needed for CSS background-image and iframe src in static GitHub Pages deployments.
 */
export function asset(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
  return `${base}${path}`;
}
