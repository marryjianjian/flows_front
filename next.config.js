/** @type {import('next').NextConfig} */
module.exports = {
  serverRuntimeConfig: {
    backend_url: process.env.BACKEND_URL,
  },
  reactStrictMode: true,
  poweredByHeader: false,
}
