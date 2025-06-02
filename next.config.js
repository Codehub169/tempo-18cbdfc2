/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [], // Add image domains here if you use external images
  },
  // webpack: (config, { isServer }) => {
  //   // Add custom webpack configurations here
  //   return config;
  // },
};

module.exports = nextConfig;
