import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  webpack(config, { isServer }) {
    if (!isServer) {
      // Next.js 15 bundles its own React canary that lacks useEffectEvent.
      // Force client bundles (including Sanity Studio) to use the project's
      // React 19.2.5 which has the full stable API.
      config.resolve.alias["react"] = path.resolve("./node_modules/react");
      config.resolve.alias["react-dom"] = path.resolve("./node_modules/react-dom");
    }
    return config;
  },
};

export default nextConfig;
