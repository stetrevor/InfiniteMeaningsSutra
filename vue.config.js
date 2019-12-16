const { GenerateSW } = require('workbox-webpack-plugin')

module.exports = {
<<<<<<< HEAD
  publicPath: '',
=======
  publicPath: dev ? '/InfiniteMeaningsSutra/' : '',
>>>>>>> 63d456d... Init commit: Infinite Meanings Sutra

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
