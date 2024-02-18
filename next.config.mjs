/** @type {import('next').NextConfig} */
import withPlaiceholder from "@plaiceholder/next";
import withPWA from "next-pwa";
import withYAML from "next-yaml";

const nextConfig = {};
const withPWA_ = withPWA({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
});

export default withPlaiceholder(withYAML({ ...withPWA_, ...nextConfig }));
