/** @type {import('next').NextConfig} */

import withPlaiceholder from '@plaiceholder/next';
import withPWA from 'next-pwa';
import withYAML from 'next-yaml';
import withBundlerAnaylzer from '@next/bundle-analyzer';

const withBundlerAnaylzer_ = withBundlerAnaylzer({
  enabled: process.env.ANALYZE === 'true',
});
const nextConfig = {
  module: {
    rules: [
      {
        type: 'json',
        test: /\.ya?ml$/,
        use: 'yaml-loader',
      },
    ],
  },
};
const withPWA_ = withPWA({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
});

export default withPWA_(
  withBundlerAnaylzer_({
    ...withYAML(withPlaiceholder(nextConfig)),
  })
);
