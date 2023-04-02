/** @type {import('next').NextConfig} **/
const nextConfig = {
  // reactStrictMode: true,
  reactStrictMode: false,
  swcMinify: true,
  compiler: {
    emotion: true,
  },
}

module.exports = nextConfig;
