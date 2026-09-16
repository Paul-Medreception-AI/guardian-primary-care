/** @type {import("next").NextConfig} */
const { legacyRedirects } = require('./lib/legacy-redirects')

const nextConfig = {
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      // Hand-written rules stay FIRST: first match wins, so these keep priority
      // over the generated legacy map below.
      { source: '/privacy', destination: '/privacy-sms', permanent: true },
      { source: '/privacy-policy', destination: '/privacy-sms', permanent: true },
      { source: '/terms', destination: '/terms-sms', permanent: true },
      { source: '/terms-of-service', destination: '/terms-sms', permanent: true },
      { source: '/sms-terms', destination: '/terms-sms', permanent: true },

      // Generated from the Webflow site's sitemap (70 indexed URLs) so the
      // cutover does not 404 everything Google currently holds.
      ...legacyRedirects(),
    ]
  },
}
module.exports = nextConfig
