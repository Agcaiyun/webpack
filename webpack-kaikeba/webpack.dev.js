const merge = require('webpack-merge')
const commonConfig = require('./webpack.common.js')

const devConfig = {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: './dist',
        open: true,
        port: 8000,
        // proxy: {
        // 	"/api": {
        // 		target: "http://localhost:8001"
        // 	}
        // }
    },
    optimization: {
        usedExports: true
    }
}

module.exports = merge(commonConfig, devConfig)