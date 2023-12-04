const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const FileRouterPlugin = require('./plugin/file-router-plugin.js');

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
    new FileRouterPlugin({
      ignorePaths: [
        "schema-",
        "component/",
        "components/"
      ]
    }),
  ],
});

