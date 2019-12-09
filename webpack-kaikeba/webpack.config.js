const path = require("path");

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
				use: ['style-loader', 'css-loader']
			}
		]
	}
} 	
