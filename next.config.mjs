/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: process.env.BUILD_STANDALONE === 'true' ? 'standalone' : undefined
};

export default nextConfig;
