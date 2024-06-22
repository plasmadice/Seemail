/** @type {import('next').NextConfig} */

const cspHeader = `
    default-src: 'self'  https://*.clerk.com  https://*.clerk.com/*;
    script-src: 'self' 'unsafe-inline' 'unsafe-eval' https://clerk.seemail.dev https://*.clerk.accounts.dev https://*.vercel-scripts.com;
    connect-src: 'self' https://clerk.seemail.dev https://*.clerk.accounts.dev ${process.env.NEXT_PUBLIC_URL.replace('https', 'ws')} ${process.env.NEXT_PUBLIC_URL};
    worker-src: 'self' blob: ${process.env.NEXT_PUBLIC_URL};
    style-src: 'self' 'unsafe-inline';
    img-src: 'self' blob: data: https://img.clerk.com;
    font-src: 'self';
    object-src: 'none';
    base-uri: 'self';
    form-action: 'self';
    frame-ancestors: 'none';
    upgrade-insecure-requests: 1;
`

const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.run.app',
      },
    ],
  },
  env: {
    ENTERPIN_URL: process.env.ENTERPIN_URL,
  },
  headers: async () => {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: "Content-Security-Policy",
            value: cspHeader.replace(/\n/g, ""),
          },
        ],
      },
    ]
  }
}

module.exports = nextConfig
