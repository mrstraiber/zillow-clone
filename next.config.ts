import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,

  // background image url for login page
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'delivery.digitalassets.zillowgroup.com',
        port: '',
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;
