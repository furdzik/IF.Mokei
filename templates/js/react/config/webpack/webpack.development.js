const { merge } = require('webpack-merge');
const { HotModuleReplacementPlugin } = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');

const webpackCommon = require('./webpack.common');

const PORT = '{port}';

const webpackDevelopment = () => ({
  entry: 'src/index.jsx',
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    port: PORT,
    host: '{repoName}.local',
    historyApiFallback: true,
    static: './'
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: './public/', to: './' },
      ]
    }),
    new HotModuleReplacementPlugin()
  ]
});

module.exports = (options) => merge(webpackCommon(options), webpackDevelopment());
