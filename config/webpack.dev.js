const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const CompressionPlugin = require('compression-webpack-plugin');
const FileRouterPlugin = require('./plugin/file-router-plugin.js');
// const webpack = require('webpack');

module.exports = merge(common, {
  mode: "development",
  output: {
    path: path.resolve(__dirname, '../app/www/dev'),
    filename: 'app.js',
  },
  watch: true,
  watchOptions: {
    ignored: /node_modules/,
  },
  plugins: [
    ...common.plugins,
    // new webpack.HotModuleReplacementPlugin(),
    new CompressionPlugin(), // 开发资源开启gzip
    new FileRouterPlugin({
      ignorePaths: [
        "schema-",
        "component/",
        "components/"
      ]
    }),
  ],
});

