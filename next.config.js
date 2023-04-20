/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  build: {
    transpile: ['gsap'],
  }
  
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
