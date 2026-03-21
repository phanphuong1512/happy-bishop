import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    prefetchInlining: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.figma.com",
        pathname: "/api/mcp/asset/**",
      },
    ],
  },
};

export default nextConfig;

if (process.env.NODE_ENV === "development") {
  const optionalCloudflareAdapter = "@opennextjs/cloudflare";
  import(optionalCloudflareAdapter)
    .then((m) => m.initOpenNextCloudflareForDev())
    .catch(() => {
      // Optional in local environments where Cloudflare adapter isn't installed.
    });
}
