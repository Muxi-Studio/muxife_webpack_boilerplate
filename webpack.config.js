const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
	devServer: {
	    historyApiFallback: true,
	    hot: true,
	    inline: true,
	    progress: true,
	    contentBase: './src',
	    port: 8080
	},
	entry: [    
		'webpack/hot/dev-server',
    	'webpack-dev-server/client?http://localhost:8080',
    	path.resolve(__dirname,'./src/index.js')
    ],
	output: {
	    path: path.join(__dirname, './build'),
    	publicPath: 'http://localhost:8080/',
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
	            test: /\.scss$/,
	            exclude: /node_modules/,
	            loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
	        },
			{
		        test: /\.(jpe?g|png|gif|svg)$/,
        		loader: 'url?limit=8024&name=images/[name].[ext]'
			}
		],
	},
	resolve: {
    	  extensions: ['', '.js', '.scss'],
  	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
    	new OpenBrowserPlugin({ url: 'http://localhost:8080' }),
    	new ExtractTextPlugin('bundle.css')
 	]

};