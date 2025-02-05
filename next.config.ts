import { NextConfig } from "next";
import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
    dest: "public",
    disable: false,

});

const nextConfig: NextConfig = {
    reactStrictMode: false
};

export default withPWA(nextConfig)
