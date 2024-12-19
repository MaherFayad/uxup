/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  
  trailingSlash: true,
  images: {
    domains: [], // Add any external domains if needed
    unoptimized: true, // Set to true if you want to skip optimization
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
