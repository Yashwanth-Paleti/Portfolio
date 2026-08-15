import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath: "/Portfolio",
  assetPrefix: "/Portfolio/",
};

export default nextConfig;