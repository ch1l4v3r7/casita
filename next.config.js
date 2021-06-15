const withPlugins = require('next-compose-plugins')
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true"
})

module.exports = withPlugins([[withBundleAnalyzer]], {
  future: {
    webpack5: true
  },
  i18n: {
    localeDetection: false,
    locales: ['en', 'ar'],
    defaultLocale: 'en'
  }
})