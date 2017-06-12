const path = require('path');
module.exports = {
  context: __dirname,
  entry: './src/noms.jsx',
  output: {
    path: path.join(__dirname, 'app', 'javascripts'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '*']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'es2017']
        }
      }
    ]
  },
  devtool: 'source-maps'
};
