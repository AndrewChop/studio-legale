import type { NextConfig } from "next";
// import createNextIntlPlugin from 'next-intl/plugin';
// const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  // Abilita funzioni sperimentali per path moderni
  experimental: {
    // Supporto per TypeScript ottimizzato
    optimizePackageImports: ["@"],
  },
};

export default nextConfig;
// export default withNextIntl(nextConfig);
