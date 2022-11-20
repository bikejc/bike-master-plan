/** @type {import('next').NextConfig} */

const basePath = "/bike-master-plan"

module.exports = /*require('next-optimized-images')(*/{
  /* config for next-optimized-images */

  reactStrictMode: true,
  swcMinify: true,
  basePath,
  assetPrefix: basePath,
  publicRuntimeConfig: {
    basePath,
  },
  images: {
    unoptimized: true,
    // loader: 'custom',
    //disableStaticImages: true
  },
};
