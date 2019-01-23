'use strict';
// Imports
var path = require('path');
// Webpack Configuration
module.exports = {
  // Entry
  entry: './src/index.js',
  mode: 'production',
  // Output
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'main.js',
    libraryTarget: 'umd',
  },
  // Loaders
  module: {
    rules : [
      // JavaScript/JSX Files
      {
      test: /\.js?$/,
      exclude: /node_modules/,
      use: ['babel-loader']
      },
      // CSS Files
      {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    alias: {
      'react': path.resolve(__dirname, './node_modules/react'),
      'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
    }
  },
  externals: {
    // Don't bundle react or react-dom
    react: {
      commonjs: "react",
      commonjs2: "react",
      amd: "React",
      root: "React"
    },
    "react-dom": {
      commonjs: "react-dom",
      commonjs2: "react-dom",
      amd: "ReactDOM",
      root: "ReactDOM"
    }
  },
  // Plugins
  plugins: []
};
