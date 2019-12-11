const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	"entry": "./index.js",
	"output": {
		path: path.resolve(__dirname, "./dist"),
		filename: "main.js"
	},
	module: {
		rules: [
			{
				test: /\.jpg$/,
				use: {
					loader: 'file-loader',
					options: {
						name: '[name].[ext]',
						outputPath: 'img'
					}
				}
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					 'css-loader', 
					{
						loader: 'postcss-loader',
						options: {
								plugins: [
									require('autoprefixer')()
								]
							}
					}
				]
				
			},
			{
				test: /\.s[ac]ss$/,
				use: ['style-loader', 'css-loader', 'sass-loader']
			}
		]
	},
 	plugins: [
		new HtmlWebpackPlugin({
			filename: 'indexTest.html',
			title: 'custom title',	
			template: './index.html'	
		})
	]
}
