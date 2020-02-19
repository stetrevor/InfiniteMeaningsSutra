const { GenerateSW } = require('workbox-webpack-plugin')

module.exports = {
  publicPath:
    process.env.NODE_ENV === 'develop' ? '/InfiniteMeaningsSutra/' : '',

  chainWebpack: config => {
    config.module
      .rule('markdown')
      .test(/\.md$/)
      .use('html-loader')
      .loader('html-loader')
      .end()
      .use('markdown-loader')
      .loader('markdown-loader')
  },

  configureWebpack: {
    plugins: [new GenerateSW()],
  },
}
