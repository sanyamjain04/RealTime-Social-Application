/** @type {import('next').NextConfig} */
const NextConfig = {
  // reactStrictMode: true,
  images: {
    domains: [
      'cloudflare-ipfs.com',
      'loremflickr.com',
      'avatars.githubusercontent.com',
    ],
  },
};

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer(NextConfig);
