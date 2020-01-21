const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const merge = require('webpack-merge')
const devConfig = require('./webpack.dev')
const prodConfig = require('./webpack.prod')

const commonConfig = {
    "entry": {
        index: './src/index.tsx'
    },
    "output": {
        path: path.resolve(__dirname, "./dist"),
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                test: /\.ts(x)?$/,
                loader: 'ts-loader'
            },
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
                test: /\.less/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'less-loader'
                    }
                ]
            },
            {
                test: /\.js(x)?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ]
            },
            {
                enforce: "pre",
                test: "/.\js$/",
                loader: "source-map-loader"
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.tsx', '.ts', '.json', '.css']
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            title: 'custom title',
            template: './src/index.html'
        }),
        new CleanWebpackPlugin()
    ]
}

module.exports = (env) => {
    return env && env.production
        ? merge(commonConfig, prodConfig)
        : merge(commonConfig, devConfig)
}