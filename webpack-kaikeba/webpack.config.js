const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const merge = require('webpack-merge')
const devConfig = require('./webpack.dev')
const prodConfig = require('./webpack.prod')

const commonConfig = {
    "entry": {
        index: './index.js',
        loadsh: './lodash.js'
    },
    "output": {
        path: path.resolve(__dirname, "./dist"),
        filename: "[name].js"
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
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader'
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

module.exports = (env) => {
    return env && env.production
        ? merge(commonConfig, prodConfig)
        : merge(commonConfig, devConfig)
}