const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack'); // to access built-in plugins

const BUILD_DIR = path.resolve(__dirname, 'assets/build');

module.exports = merge(common, {
    mode: "production",
    devtool: 'source-map',
    output: {
        path: BUILD_DIR,
        filename: 'js/[name].bundle.js',
        clean: true
    },
    module:{
        rules:[
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    "css-loader",
                    "resolve-url-loader",
                    "sass-loader"
                ],
            },
            {
                test: /\.(png|jpg|svg|jpeg|ico|webp|gif)$/,
                use: [
                    {
                      loader: 'file-loader',
                      options: {
                        publicPath: "https://staging.frankponte.com/wp-content/themes/spanischalacarte/assets/build/images",
                        outputPath: "/images",
                        name: '[name].[ext]',
                      }
                    }
                  ]
            },
        ],
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename: 'css/[name].bundle.css',
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        new webpack.EnvironmentPlugin({
            URL: "https://staging.spanishalacarte.com/",
            THEME_URL: "https://staging.spanishalacarte.com/wp-content/themes/spanischalacarte/"
        })
    ],
    optimization:{
        minimizer: [
            new OptimizeCssAssetsPlugin({
                // cssnano configuration
                cssProcessorPluginOptions: {
                  preset: ['default', {
                    discardComments: {
                      removeAll: true
                    }
                  }],
                },
            }),
            new TerserPlugin({
                terserOptions: {
                    compress:{
                        // pure_funcs: [ 'console.log' ]
                    }
                }
            }),
        ]
    },
});