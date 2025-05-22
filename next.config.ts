import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  output: process.env.NEXT_PUBLIC_OUTPUT as "standalone" | "export",
  reactStrictMode: true,
  images: {
    unoptimized: true, //dynamic features
  },
};

export default nextConfig;
