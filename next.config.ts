import path from "node:path";
import type { NextConfig } from "next";

// In CI, set NEXT_PUBLIC_BASE_PATH (e.g. "/contribution-arc-lp") for GitHub Pages.
// Locally (npm run dev) leave it unset so the site is served at /.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
