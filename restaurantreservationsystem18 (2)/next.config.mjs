/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Required for static export
  images: { unoptimized: true },
  basePath: '/Table_reservation', // GitHub Pages subpath
  assetPrefix: '/Table_reservation/',
  trailingSlash: true,
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
}

export default nextConfig
