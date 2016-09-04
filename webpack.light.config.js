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
	externals: {
    '../physics/index.js': 'var false',
    './physics/index.js': 'var false'
  },
	plugins: [
		new webpack.optimize.UglifyJsPlugin(),
		new webpack.optimize.DedupePlugin()
  ]
};
