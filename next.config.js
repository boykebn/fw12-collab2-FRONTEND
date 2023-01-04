/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com']
    // domains: ['local host']
  },
}

module.exports = nextConfig
