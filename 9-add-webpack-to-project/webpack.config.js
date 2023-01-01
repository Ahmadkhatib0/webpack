const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const MiniCss = require('mini-css-extract-plugin')

module.exports = {
  entry: {
    index: './src/index.js',
    courses: './src/pages/courses.js',
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  devServer: {
    static: './dist',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCss.loader, 'css-loader'], // replaced style-loader with MiniCss loader to
        // prevent the webpack injecting the css styles inside the markup, instead split them separately
      },
      {
        test: /\.s[ac]ss$/,
        use: [MiniCss.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpeg|jpg|gif)$/,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      chunks: ['index'],
      filename: 'index.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/courses.html',
      chunks: ['courses'],
      filename: 'courses.html',
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/assets/images/*'),
          to: path.resolve(__dirname, 'dist'),
          context: 'src', //without context, it will add also the src folder inside dist,
        },
      ],
    }),
    // new BundleAnalyzerPlugin({}),
    new MiniCss(),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
}
