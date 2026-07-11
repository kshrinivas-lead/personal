/** @type {import('next').NextConfig} */

// GitHub Pages serves this repo from https://<user>.github.io/personal, so the
// production build needs a basePath. In dev there is no such prefix — applying
// it locally just means the home page 404s at localhost:3000 and only answers at
// localhost:3000/personal. So it is set for the build only.
//
// Anything that reads this must use BASE_PATH from src/config.ts, which follows
// the same rule. next/link and next/image handle it automatically; plain <a href>
// and fetch() to files under public/ do not.
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  basePath: isProd ? '/personal' : '',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  eslint: {
    ignoreDuringBuilds: true
  }
}

module.exports = nextConfig
