/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // ✅ enables static HTML export
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  basePath: '/Table_reservation', // ✅ your repo name
  assetPrefix: '/Table_reservation/',
};

export default nextConfig;
