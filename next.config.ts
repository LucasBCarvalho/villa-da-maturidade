import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: false,
  images: {
    qualities: [75, 100],
  },
  devIndicators: false,
};

export default nextConfig;