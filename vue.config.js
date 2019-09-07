const path = require('path')

module.exports = {

  // path config
  configureWebpack: {
    resolve: {
      alias: {
        pages: path.resolve(__dirname, './src/pages'),
        assets: path.resolve(__dirname, './src/assets'),
        components: path.resolve(__dirname, './src/components'),
        utils: path.resolve(__dirname, './src/utils'),
        mixins: path.resolve(__dirname, './src/mixins')
      }
    }
  },

  // proxy config
  devServer: {
    proxy: {
      '/api': {
        target: 'https://m.jyc99.com/',
        changeOrigin: true
      }
    }

  }
}