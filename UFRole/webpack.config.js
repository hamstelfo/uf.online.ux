var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var DIST_DIR = path.join(__dirname, 'dist');
var SRC_DIR = path.join(__dirname, 'src');

module.exports = {
  context: SRC_DIR,
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.css']
  },
  entry: {
    app: './index.tsx',
    vendor: [
      'core-js',
      'react',
      'react-dom',
      'toastr',
    ],
    styles: [
      '../node_modules/bootstrap/dist/css/bootstrap.css',
      '../node_modules/toastr/build/toastr.css',
      './css/styles.css',
      './css/stylesTest.css',
    ],
  },
  output: {
    path: DIST_DIR,
    filename: '[chunkhash].[name].js',
  },
  devServer: {
    contentBase: DIST_DIR, //Content base
    inline: true, //Enable watch and live reload
    host: 'localhost',
    noInfo: true,
    port: 8081
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: 'awesome-typescript-loader',
        options: {
          useBabel: true,
        },
      },
      // Load css from src with CSS Modules
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]',
              camelCase: true,
            },
          },
        }),
      },
      // Load css from node_modules
      {
        test: /\.css$/,
        include: /node_modules/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader',
        }),
      },
      // Loading glyphicons => https://github.com/gowravshekar/bootstrap-webpack
      // Using here url-loader and file-loader
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
      },
    ]
  },
  plugins: [
    // Caching vendors with manifest
    // https://webpack.js.org/guides/code-splitting-libraries/#manifest-file
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest'],
    }),
    new ExtractTextPlugin({
      filename: '[name].css',
      disable: false,
      allChunks: true,
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html', //Name of file in ./dist/
      template: 'index.html' //Name of template in ./src
    }),
  ]
};
