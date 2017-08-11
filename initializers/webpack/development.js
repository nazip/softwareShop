const path = require('path');

export default module.exports = {
  entry: './src/App.js',

  output: {
    filename: './src/static/assets/bundle.js',
    publicPath: '/assets/'
  },

  devServer: {
    contentBase: path.join(__dirname, 'src', 'static', 'assets'),
    compress: true,
    port: 9000
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        loader: 'babel-loader'
      }
    ]
  },

  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname, 'src')
    ]
  }

};
