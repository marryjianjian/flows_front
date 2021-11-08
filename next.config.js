/** @type {import('next').NextConfig} */
module.exports = {
  serverRuntimeConfig: {
    backend_url: process.env.BACKEND_URL,
  },
  reactStrictMode: true,
  poweredByHeader: false,
  typescript: {
    // !! WARN !!
    // ignore error for now
    ignoreBuildErrors: true,
  },
}
