/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "pokeapi.co",
      "raw.githubusercontent.com",
      "wren.ghost.io",
      "images.unsplash.com",
      "www.rei.com",
      "www.ascm.org",
    ],
  },
}

export default nextConfig
