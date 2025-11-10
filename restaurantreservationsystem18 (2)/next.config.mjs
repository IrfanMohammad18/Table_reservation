/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Required for static export
  images: { unoptimized: true },
  basePath: '/Table_reservation', // <-- must match your repo name
  assetPrefix: '/Table_reservation/',
  trailingSlash: true,
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
}

export default nextConfig
