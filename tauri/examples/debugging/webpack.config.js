const HtmlWebpackPlugin = require('html-webpack-plugin');
/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
    mode: "development",
    entry: [
        './src/tauri.js',
        './src/index.ts'
    ],
    devtool: 'source-map',
    resolve: {
        extensions: ['.ts', '.js']
    },
    output: {
        filename: 'bundle.js',
        publicPath: './',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Debug Example",
            template: "index.html"
        }),
    ],
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'ts-loader'
                    }
                ]
            },
        ],
    }
};
