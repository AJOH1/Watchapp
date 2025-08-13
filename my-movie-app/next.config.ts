import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 images: {
    domains: ["image.tmdb.org"], // Whitelist TMDB image host
  },
};

export default nextConfig;
