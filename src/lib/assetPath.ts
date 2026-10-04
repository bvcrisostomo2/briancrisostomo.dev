// Plain <img> tags don't get Next's basePath, so prefix /public paths here.
// NEXT_PUBLIC_BASE_PATH is inlined at build time (see next.config.ts).
export function assetPath(path: string) {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
}
