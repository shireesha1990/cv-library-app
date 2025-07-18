
const nextConfig = {
  // Enable SSR optimizations
  experimental: {
    ssr: true,
  },
  
  // Configure image optimization for SSR
  images: {
    domains: ['api.cv-library.co.uk'],
  },
  
  // Enable compression
  compress: true,
  
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;