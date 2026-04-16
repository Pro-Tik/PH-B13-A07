/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    // Allow loading images from randomuser.me for avatars
    domains: ["randomuser.me"],
  },
};

export default nextConfig;
