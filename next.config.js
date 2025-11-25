/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';
const repoName = 'portfolio'; // Your GitHub repository name

const nextConfig = {
    output: 'export',
    images: { unoptimized: true },
    basePath: isProd ? `/${repoName}` : '',
    assetPrefix: isProd ? `/${repoName}/` : '',
}

module.exports = nextConfig
