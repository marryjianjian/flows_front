/** @type {import('next').NextConfig} */
module.exports = {
  serverRuntimeConfig: {
    backend_host: process.env.BACKEND_HOST,
  },
  reactStrictMode: true,
  poweredByHeader: false,
}
