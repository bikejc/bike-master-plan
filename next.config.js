/** @type {import('next').NextConfig} */
module.exports = require('next-optimized-images')({
  /* config for next-optimized-images */

  reactStrictMode: true,
  swcMinify: true,
  basePath: "/bike-master-plan",
  assetPrefix: "/bike-master-plan",

  images: {
    loader: 'custom',
    disableStaticImages: true
  },
});
