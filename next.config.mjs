/** @type {import('next').NextConfig} */
const nextConfig = {
  // Strict TypeScript build - no ignoring errors for production
  typescript: {
    tsconfigPath: './tsconfig.json',
  },
  
  // Image optimization - aggressive for fast loading
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year cache for static images
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    unoptimized: false,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  
  // Compression & bundling
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  
  // Performance optimizations
  experimental: {
    optimizePackageImports: ['lucide-react', 'sonner'],
    optimizeCss: true,
    webpackBuildWorker: true,
  },
  
  // Enable static generation with ISR
  staticPageGenerationTimeout: 60,
  onDemandEntries: {
    maxInactiveAge: 60000,
    pagesBufferLength: 5,
  },
  
  async redirects() {
    return [
      // Redirect broken shop link to collections
      {
        source: '/shop',
        destination: '/collections',
        permanent: true, // 301 redirect for SEO
      },
      // Redirect broken terms link to privacy
      {
        source: '/terms',
        destination: '/privacy',
        permanent: true,
      },
      // Redirect other common broken routes
      {
        source: '/size-guide',
        destination: '/',
        permanent: false,
      },
      {
        source: '/track-order',
        destination: '/contact',
        permanent: false,
      },
      {
        source: '/dashboard',
        destination: '/admin',
        permanent: false,
      },
      {
        source: '/blog',
        destination: '/',
        permanent: false,
      },
    ]
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "ALLOWALL",
          },
          {
            key: "Content-Security-Policy",
            value: "frame-ancestors *",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
      // Cache static assets for 1 year
      {
        source: "/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      // Cache fonts for 1 year
      {
        source: "/fonts/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      // Cache API responses for performance
      {
        source: "/api/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=3600, s-maxage=7200, stale-while-revalidate=86400",
          },
        ],
      },
      // Cache HTML pages with aggressive caching
      {
        source: "/new-drops",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=1800, s-maxage=86400, stale-while-revalidate=604800",
          },
        ],
      },
      {
        source: "/collections",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=1800, s-maxage=86400, stale-while-revalidate=604800",
          },
        ],
      },
      {
        source: "/about",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, s-maxage=604800, immutable",
          },
        ],
      },
      {
        source: "/contact",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=3600, s-maxage=86400",
          },
        ],
      },
      // Default cache for all other HTML pages
      {
        source: "/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800",
          },
        ],
      },
      // Gzip compression headers
      {
        source: "/(.*)",
        headers: [
          {
            key: "Accept-Encoding",
            value: "gzip, deflate, br",
          },
        ],
      },
    ]
  },

  // Optimize build & streaming
  productionBrowserSourceMaps: false,
  reactStrictMode: true,
}

export default nextConfig
