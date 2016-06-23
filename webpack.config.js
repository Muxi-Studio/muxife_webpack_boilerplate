var webpack = require('webpack');
var path = require('path');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
	entry: [    
		'webpack/hot/dev-server',
    	'webpack-dev-server/client?http://localhost:8080',
    	path.resolve(__dirname,'./src/js/app.js')
    ],
	output: {
	    path: __dirname + '/build',
    	publicPath: '/',
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
				loaders: ['style', 'css', 'sass','autoprefixer-loader']
			},
			{
		        test: /\.(jpe?g|png|gif|svg)$/,
        		loader: 'url?limit=8024&name=images/[name].[ext]'
			},
			{
		        test: /\.html$/,
       			 loader: 'url?name=[name].[ext]'
			}
		],
	},
	plugins: [
    	new OpenBrowserPlugin({ url: 'http://localhost:8080' })
 	]

};