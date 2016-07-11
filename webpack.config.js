import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from "extract-text-webpack-plugin";

export default {
  debug: true,
  devtool: '#eval-source-map',
  context: path.join(__dirname, 'src'),

  entry: [
    'webpack/hot/dev-server',
    'webpack-hot-middleware/client',
    './main'
  ],

  output: {
    path: path.join(__dirname, 'src', 'assets', 'js'),
    filename: 'bundle.js'
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('main.css', {
      allChunks: true
    })
  ],

  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['react-hot', 'babel'] },
      { test: /\.json$/, loader: 'json' },
      { test: /\.scss$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader') },
      { test: /.(png|woff(2)?|eot|ttf|svg)(\?[a-z0-9=\.]+)?$/, loader: 'url-loader?limit=100000' }
    ]
  }
}
