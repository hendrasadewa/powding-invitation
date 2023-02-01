/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.lorem.space',
        port: '',
        pathname: '**/*',
      },
    ],
  },
};

module.exports = nextConfig;
