const { merge } = require('webpack-merge');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    entry: './src/rating/rating.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'index.js',
        publicPath: 'http://localhost:8080/dist/'
    },
    mode: 'production',
    devtool: 'source-map',
    // see https://webpack.js.org/configuration/optimization/
    optimization: {
        minimizer: [new OptimizeCSSAssetsPlugin({})]
    },
    module: {
        rules: [
            {
                test: /\.(scss|sass)$/,
                // only use MiniCssExtractPlugin in production and without style-loader
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: 'dist/*.*'
        }),
        // Mini CSS Extract plugin extracts CSS into separate files.
        // It creates a CSS file per JS file which contains CSS.
        // It supports On-Demand-Loading of CSS and SourceMaps.
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        })
    ]
});
