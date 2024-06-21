/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { buildId, nextRuntime }) => {
    console.log(`🚀buildId: ${buildId}`);

    return config;
  },
};

export default nextConfig;
