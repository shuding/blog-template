const slug = require('rehype-slug')

module.exports = require('@zeit/next-mdx')({
  options: {
    hastPlugins: [
      slug
    ]
  }
})({
  target: 'serverless',
  pageExtensions: ['jsx', 'js', 'md', 'mdx'],
  experimental: {
    publicDirectory: true
  }
})
