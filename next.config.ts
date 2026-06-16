import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'harmac.fi',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },
}

export default nextConfig
