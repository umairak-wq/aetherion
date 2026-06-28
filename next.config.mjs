/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/technology",
        destination: "/coverage",
        permanent: true,
      },
      {
        source: "/markets",
        destination: "/coverage",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
