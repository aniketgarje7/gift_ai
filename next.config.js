/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

}
module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
};
module.exports = nextConfig
// const withTM = require('next-transpile-modules')(['gsap']);
// module.exports = withTM();