const { resolve } = require('path');

const webpack = require('webpack');

const rootPath = resolve(__dirname);
const distPath = resolve(__dirname, 'dist');
const isDevelopment = process.env.NODE_ENV !== 'production';

const config = {
  devtool: isDevelopment ? 'cheap-module-eval-source-map' : 'source-map',

  entry: {
    client: [
      'babel-polyfill',
      'react-hot-loader/patch',
      'webpack-hot-middleware/client',
      './index.js'
  ]
},

  output: {
    filename: '[name].js',
    path: distPath,
    publicPath: '/',
  },

  context: rootPath,

  devServer: {
    contentBase: distPath,
    hot: true,
    compress: true,
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          'babel-loader',
        ],
        include: rootPath,
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ],
        exclude: /node_modules/
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },

  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],

  resolve: {
    extensions: ['.js', '.jsx', '/index.jsx', '/index.js']
  }
};

module.exports = config;
