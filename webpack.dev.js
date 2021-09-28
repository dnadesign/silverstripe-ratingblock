const { merge } = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.js');
const eslintFormatter = require('react-dev-utils/eslintFormatter');
const ESLintPlugin = require('eslint-webpack-plugin');
const { HotModuleReplacementPlugin } = require('webpack');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    target:  'web',
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: 'http://localhost:8080/dist/'
    },
    plugins: [
        new ESLintPlugin({
            context: path.join(__dirname, 'src'),
            formatter: eslintFormatter,
            extensions: ['js', 'jsx']
        }),
        new HotModuleReplacementPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                enforce: 'pre',
                use: [{
                    loader: 'source-map-loader',
                    options: {
                        filterSourceMappingUrl: (url, resourcePath) => {
                            if (/.*\/node_modules\/.*/.test(resourcePath)) {
                                return false
                            }
                            return true
                        }
                    }
                }]
            },
            {
                test: /\.(scss|sass)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'fast-sass-loader'
                ]
            }
        ]
    },
    resolve: {
        fallback: { "buffer": require.resolve("buffer/") }
    },
    stats: {
        warnings: false
    },
    devServer: {
        hot: true,
        open: true,
        port: 8082,
        host: "0.0.0.0",
        publicPath: 'http://localhost:8082/dist',
        disableHostCheck: true,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods':
                'GET, POST, PUT, DELETE, PATCH, OPTIONS',
            'Access-Control-Allow-Headers':
                'X-Requested-With, content-type, Authorization'
        }
    }
});
