/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable prefer-template */
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackBar = require('webpackbar');

module.exports = {
  entry: './src/app.tsx',
  performance: false, // 去掉性能上的警告
  externals: {
    axios: 'axios',
    react: 'React',
    'react-dom': 'ReactDOM',
    '@arco-design/web-react': 'arco',
    '@arco-design/web-react/icon': 'arcoicon',
    'react-color': 'ReactColor',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'], // 表示在import 文件时文件后缀名可以不写
    alias: {
      '@': path.resolve(__dirname, '../src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: {
          // loader: 'ts-loader',
          loader: 'esbuild-loader', // 构建时间缩短一半
          options: {
            // target: 'es2015'
          }
        },
      },
      {
        test: /\.less$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader'],
      },
      {
        test: /\.(svg|png|jpe?g|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            name: '[name].[ext]',
            publicPath: '../image',
            outputPath: 'image',
            limit: 1024 * 10, // 图片大于阈值 不会转base64,小于会转base64
          },
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            publicPath: '../', // 资源路径需要从css文件夹跳出去
          },
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),
    new WebpackBar({
      basic: false, // 默认true，启用一个简单的日志报告器
      profile: false, // 默认false，启用探查器。
    }),
  ],
};
