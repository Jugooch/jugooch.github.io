/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export for GitHub Pages; images are pre-sized WebP in public/, so no optimizer is needed
  output: 'export',
  images: { unoptimized: true },
};

module.exports = nextConfig;
