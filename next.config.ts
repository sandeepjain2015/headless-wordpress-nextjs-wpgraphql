import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 images: {
    remotePatterns: [
     
      {
        protocol: "http",
        hostname: "localhost",
        pathname: "/tikamgarh_properties/wp-content/uploads/**",
      },
      
    ],
  }
};

export default nextConfig;
