/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "biamusic.ir" }],
  },
};

export default nextConfig;
