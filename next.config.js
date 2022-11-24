const basePath = "/bike-master-plan"

const {
  createVanillaExtractPlugin
} = require('@vanilla-extract/next-plugin');
const withVanillaExtract = createVanillaExtractPlugin();

const createTranspileModulesPlugin = require("next-transpile-modules");
const withTranspileModules = createTranspileModulesPlugin(["next-utils"]);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath,
  assetPrefix: basePath,
  publicRuntimeConfig: {
    basePath,
  },
  images: {
    unoptimized: true,
  },
};

module.exports = withTranspileModules(withVanillaExtract(nextConfig));
