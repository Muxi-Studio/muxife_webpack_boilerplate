const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

module.exports = {
	devtool: 'cheap-source-map',
	entry: [
    	path.resolve(__dirname, './src/index.js'),

  	],
  	output: {
	    path: path.join(__dirname, './build'),
    	filename: 'bundle.js'
    },
    module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel',
				exclude: /node_modules/
			},
	        {
	          	test: /\.scss/,
	          	loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
	        },
			{
		        test: /\.(jpe?g|png|gif|svg)$/,
        		loader: 'url?limit=8024&name=images/[name].[ext]'
			}
		],
	},
	plugins: [
	    new uglifyJsPlugin({
	      compress: {
	        warnings: false
	      }
	    }),
    	new ExtractTextPlugin('bundle.css')
 	]
};