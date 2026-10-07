import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const siteUrl = "https://briancrisostomo.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["/", "/about/", "/projects/"].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
  }));
}
