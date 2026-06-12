import type { NextConfig } from "next";

const BACKEND = "https://sohaib125-crm-operations-management-system.hf.space";

const nextConfig: NextConfig = {
  output: "standalone",
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${BACKEND}/:path*`,
      },
    ];
  },
};

export default nextConfig;
