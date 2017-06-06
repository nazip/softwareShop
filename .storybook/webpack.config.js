const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
        include: path.resolve(process.cwd(), 'src')
      }
    ]
  }
};
