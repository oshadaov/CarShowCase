/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'cdn.imagin.studio',  // Remote domain for images
          pathname: '/**',  // Allow all paths
        },
      ],
    },
  };
  
  export default nextConfig;
  