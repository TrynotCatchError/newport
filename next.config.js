/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["localhost"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "photos.google.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
