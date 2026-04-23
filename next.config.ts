import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    basePath: "/liverpoolfc",
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
