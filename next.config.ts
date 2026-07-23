import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Avoid home-directory lockfile confusion for Turbopack
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
