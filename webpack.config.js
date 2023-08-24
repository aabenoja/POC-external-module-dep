const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = [{
  entry: './src/main.ts',
  target: 'es2020',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  externalsType: 'module',
  experiments: {
    outputModule: true
  },
  externals: {
    'external-module': 'module /module.js'
  },
  module: {
    rules: [{
      test: /\.ts$/,
      use: 'ts-loader'
    }]
  },
  plugins: [new HtmlWebpackPlugin({
    scriptLoading: 'module'
  })]
}, {
  entry: './src/module.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'module.js',
    library: {
      type: 'module'
    }
  },
  module: {
    rules: [{
      test: /\.ts$/,
      use: 'ts-loader'
    }]
  },
  externalsType: 'module',
  experiments: {
    outputModule: true,
  }
}]