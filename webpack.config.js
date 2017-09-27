const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'edTable.js',
    path: path.resolve(__dirname, '')
    /*library:'edTable',
    libraryTarget: 'window'*/
  },
    plugins: [/*new UglifyJSPlugin() - use it for minification file*/]
};