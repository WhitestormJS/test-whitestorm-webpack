const webpack = require('webpack');

module.exports = {
  entry: './js/app.js',
  output: {
    path: __dirname + '/js',
    filename: 'app.bundle.js'
  },
  target: 'web',
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel'
    }]
  },
  plugins: [
    new webpack.NormalModuleReplacementPlugin(/inline\-worker/, 'webworkify-webpack'),
    new webpack.optimize.UglifyJsPlugin({
      compress: false, // Ammo.js is already compressed and throws error when compressed twice.
      minimize: true
    }),
    new webpack.optimize.DedupePlugin()
  ]
};
