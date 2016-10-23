module.exports = {
  // entry file
  entry: './src/index.jsx',
  output: {
    path: __dirname + '/build',
    publicPath: '/build/',
    filename: 'bundle.js'
  },
	resolve: {
		extensions: ['', '.js', '.jsx'],
	},
  devServer: {
    inline: true // reload on the fly (auto refresh)
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}
