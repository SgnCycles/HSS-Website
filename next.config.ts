import {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
 
const nextConfig: NextConfig ={
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.cdninstagram.com",
      },
      {
        protocol: "https",
        hostname: "**.behold.pictures",
      },
      {
        protocol: "https",
        hostname: "**.behold.so",
      },
    ],
  },
};
const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);