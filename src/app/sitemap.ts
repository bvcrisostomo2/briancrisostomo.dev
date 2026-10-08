import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const siteUrl = "https://briancrisostomo.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  // Add new pages here, with a trailing slash to match trailingSlash: true in next.config.ts.
  return ["/", "/about/", "/projects/"].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
  }));
}
