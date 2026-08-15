import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  typedRoutes: false,
  images: {
    qualities: [25, 50, 75, 100],
  },
};

export default withNextIntl(nextConfig);
