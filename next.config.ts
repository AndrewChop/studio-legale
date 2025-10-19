import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Abilita funzioni sperimentali per path moderni
  experimental: {
    // Supporto per TypeScript ottimizzato
    optimizePackageImports: ["@"],
  },
};

export default nextConfig;
