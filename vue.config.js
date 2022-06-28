const { defineConfig } = require('@vue/cli-service')
const path = require('path');

module.exports = defineConfig({
  publicPath: '/',
  outputDir: 'chika-official',
  assetsDir: 'assets',
  devServer: {
    static: {
      directory: path.join(__dirname, 'content'),
      publicPath: '/content',
    },
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.resolve(__dirname, 'src/styles/*.less')
      ]
    }
  }
})
