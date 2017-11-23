var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry:[
    'webpack-dev-server/client?http://localhost:1024',
    'webpack/hot/only-dev-server',
    'react-hot-loader/patch',
    path.join(__dirname,'app/index.js')
  ],
  output:{
      path:path.join(__dirname,'/dist/'),
      filename:'[name].js',
      publicPath:'/'
  },
  plugins:[
    new HtmlWebpackPlugin({
      template:'./index.tpl.html',
      inject:'body',
      filename:'./index.html'
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE>ENV':JSON.stringify('development')
    })
  ],
  module:{
    loaders:[
      {
        test:/\.js$/,
        exclude:/node_modules/,
        loader:"babel-loader",
        query:{
          presets:['react','es2015']
        }
      },
      {
        test:/\.css$/,
        loader:"style!css"
      },
      {
        test:/\.less/,
        loader:"style-loader!css-loader!less-loader",
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,

        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
        }
      }
    ]
  }
}
