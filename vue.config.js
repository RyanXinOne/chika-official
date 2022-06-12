const { defineConfig } = require('@vue/cli-service')
const path = require('path');

module.exports = defineConfig({
  transpileDependencies: true,

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.resolve(__dirname, './src/assets/styles/*.less'),
        'https://api.fontshare.com/css?f[]=satoshi@300,400,500,700,900,1&display=swap',
        'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap'
      ]
    }
  }
})
