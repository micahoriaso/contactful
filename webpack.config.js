const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const root = __dirname;

module.exports = {
    entry: {
        main: path.join(root, 'src/main.js'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Contactful',
            template: path.join(root, 'src/templates/index.html'),
        }),
    ],
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        }
      ]
    }
  };