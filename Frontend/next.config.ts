import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,

  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      // background image url for login page
      {
        protocol: 'https',
        hostname: 'delivery.digitalassets.zillowgroup.com',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'www.zillowstatic.com',
        port: '',
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;
