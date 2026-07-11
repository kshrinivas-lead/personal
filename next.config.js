/** @type {import('next').NextConfig} */

// The site is served from the root of shrini.tuvisminds.com (via the
// personal.deploy repo), so there is no basePath. Assets live at /_next/...
//
// This repo builds; personal.deploy holds the output. See
// .github/workflows/deploy.yml.
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  eslint: {
    ignoreDuringBuilds: true
  }
}

module.exports = nextConfig
