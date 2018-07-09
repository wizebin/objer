const path = require('path')

const serverConfig = {
  entry: './src/index.js',
  output: {
    filename: 'node.index.js',
    path: path.resolve(__dirname, 'dist/src'),
    library: 'nexusdk',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }]
  },
  target: 'node',
};

const clientConfig = {
  entry: './src/index.js',
  output: {
    filename: 'web.index.js',
    path: path.resolve(__dirname, 'dist/src'),
    library: 'nexusdk',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }]
  },
  target: 'web',
};

module.exports = [ serverConfig, clientConfig ];
