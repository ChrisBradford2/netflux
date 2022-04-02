/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

const isProd = process.env.NODE_ENV === 'production'

const path = require('path')

module.exports = {
  nextConfig,
  assetPrefix: isProd ? '/netflux/' : '',
  images: {
    domains: ["image.tmdb.org"],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}