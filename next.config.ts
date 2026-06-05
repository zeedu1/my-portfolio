import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  output: "export", // 🔥 IMPORTANT for static site
  images: {
    unoptimized: true, // 🔥 required for static export
  },
};

export default nextConfig;