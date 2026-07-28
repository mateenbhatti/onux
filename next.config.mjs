const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
const isExport = process.env.NEXT_EXPORT === 'true';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  // GitHub Pages / static hosting build.
  ...(isExport
    ? {
        output: 'export',
        basePath,
        assetPrefix: basePath || undefined,
        images: { unoptimized: true },
        trailingSlash: true,
      }
    : {
        async headers() {
          return [
            {
              source: '/frames/:path*',
              headers: [
                {
                  key: 'Cache-Control',
                  value: 'public, max-age=31536000, immutable',
                },
              ],
            },
          ];
        },
      }),
};

export default nextConfig;
