/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: '/docs-static',
  // This rewrite is necessary to support assetPrefix only in Next 14 and below.
  // It is not necessary in Next 15.
  // async rewrites() {
  //   return {
  //     beforeFiles: [
  //       
  //       {
  //         source: '/docs-static/_next/:path*',
  //         destination: '/_next/:path*',
  //       },
  //     ],
  //   }
  // },
}

module.exports = nextConfig
