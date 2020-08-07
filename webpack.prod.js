const { merge } = require('webpack-merge');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const common = require('./webpack.common.js');
const pkg = require('./package.json');
const libraryName = pkg.name;

module.exports = merge(common, {
    entry: './src/rating/rating.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'index.js',
        library: libraryName,
        libraryTarget: 'umd',
        publicPath: '/dist/',
        umdNamedDefine: true
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
        new BundleAnalyzerPlugin(),
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
    ],
    resolve: {
        alias: {
            'react': path.resolve(__dirname, './node_modules/react'),
            'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
            '@material-ui/core': path.resolve(__dirname, './node_modules/@material-ui/core'),
            '@material-ui/lab': path.resolve(__dirname, './node_modules/@material-ui/lab'),
        }
    },
    externals: {
        // Don't bundle react or react-dom
        react: {
            commonjs: "react",
            commonjs2: "react",
            amd: "React",
            root: "React"
        },
        "react-dom": {
            commonjs: "react-dom",
            commonjs2: "react-dom",
            amd: "ReactDOM",
            root: "ReactDOM"
        },
        "@material-ui/core": {},
        "@material-ui/lab": {}
    }
});
