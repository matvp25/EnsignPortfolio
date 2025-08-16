import dotenv from 'dotenv';

dotenv.config();

const env = process.env.NODE_ENV || 'development';

/** @type {import('next').NextConfig} */
const nextConfigProd = {
  output: 'export',
  basePath: '/portfolio',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.icons8.com',
        pathname: '/**',
      },
    ],
  },
};

/** @type {import('next').NextConfig} */
const nextConfigDev = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.icons8.com',
        pathname: '/**',
      },
    ],
  },
};

const nextConfig = env === 'development' ? nextConfigDev : nextConfigProd;

export default nextConfig;
