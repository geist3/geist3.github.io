const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
    entry: './src/index.ts',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'inline-source-map',
    devServer: {
            contentBase: './dist'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new htmlWebpackPlugin({
            template: 'index.html',
            title: 'game1'
        })
    ],
    mode: "development",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'babel-loader',
                //use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                loader: "source-map-loader",
                enforce: 'pre',
                exclude: /node_modules/
            },
            {
                test: /\.(png|gif)$/,
                use: 'file-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js','.png']
    }
}