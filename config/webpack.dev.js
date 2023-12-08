const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const FileRouterPlugin = require('./plugin/file-router-plugin.js');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
// const webpack = require('webpack');

module.exports = merge(common, {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, '../app/www/dev'),
    filename: 'app.js',
  },
  watch: true,
  watchOptions: {
    ignored: /node_modules/,
  },
  stats: 'errors-only',
  plugins: [
    ...common.plugins,
    // new webpack.HotModuleReplacementPlugin(),
    new FriendlyErrorsWebpackPlugin(),
    new FileRouterPlugin({
      ignorePaths: ['schema-', 'component/', 'components/'],
    }),
  ],
});
