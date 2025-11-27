import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "raw.githubusercontent.com",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "github.com",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "omo.akamai.opta.net",
                port: "",
                pathname: "/**",
            },
        ],
    },
};

export default nextConfig;
