/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/personal',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  eslint: {
    ignoreDuringBuilds: true
  }
}

module.exports = nextConfig