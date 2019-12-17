const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack')

module.exports = {
	"entry": "./index.js",
	"output": {
		path: path.resolve(__dirname, "./dist"),
		filename: "main.js"
	},
	mode: 'development',
	devtool: 'cheap-module-source-map',
	devServer: {
		contentBase: './dist',
		open: true,
		port: 8000,
		proxy: {
			"/api": {
				target: "http://localhost:8001"
			}
		}
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
			},
			{
				test: /\.js$/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							"presets": ["@babel/preset-env"]
						}
					}
				]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			title: 'custom title',
			template: './index.html'
		}),
		new CleanWebpackPlugin()
	]
}
