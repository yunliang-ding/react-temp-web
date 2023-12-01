/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable prefer-template */
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WebpackBar = require('webpackbar');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  entry: './src/app.tsx',
  mode: process.env.NODE_ENV,
  externals: {
    axios: 'axios',
    react: 'React',
    'react-dom': 'ReactDOM',
    '@arco-design/web-react': 'arco',
    '@arco-design/web-react/icon': 'arcoicon',
    'react-color': 'ReactColor',
  },
  output: {
    path:
      process.env.NODE_ENV === 'production'
        ? path.resolve(__dirname, '../../app/www/build')
        : path.resolve(__dirname, '../../app/www/dist'),
    filename: 'app.js',
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
        test: /\.ts[x]?$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
        },
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'less-loader',
        ],
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
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),
    new WebpackBar({
      color: '#85d', // 默认green，进度条颜色支持HEX
      basic: false, // 默认true，启用一个简单的日志报告器
      profile: false, // 默认false，启用探查器。
    }),
    new CompressionPlugin(),
  ],
};
