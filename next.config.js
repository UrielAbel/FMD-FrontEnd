 /**@type {import('next').NextConfig}*/

 const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd2r55xnwy6nx47.cloudfront.net',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'ik.imagekit.io',
        pathname: '/**'
      }
    ],
  },
  experimental: {
    appDir: true
  },
  reactStrictMode: true,
}

module.exports = nextConfig
