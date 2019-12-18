const devConfig = {
    mode: 'development',
    devtool: 'source-map',
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

module.exports = devConfig