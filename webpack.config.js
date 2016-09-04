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
      compress: {
        hoist_funs: false, // Turn this off to prevent errors with Ammo.js
        warnings: false
      },
      minimize: true
    }),
    new webpack.optimize.DedupePlugin()
  ]
};
