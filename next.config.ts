import type { NextConfig } from "next";

// Set NEXT_PUBLIC_BASE_PATH=/<repo-name> when deploying to a project page
// (https://<user>.github.io/<repo-name>). Leave empty for <user>.github.io.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  images: { unoptimized: true },
};

export default nextConfig;
