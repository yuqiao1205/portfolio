/** @type {import('next').NextConfig} */

const isProd = (process.env.NODE_ENV === 'development')

const nextConfig = {  // Use the CDN in production and localhost for development.
    assetPrefix: isProd ? 'https://yuqiao1205.github.io/portfolio/' : undefined,
    images: { unoptimized: true },
}
 
module.exports = nextConfig
