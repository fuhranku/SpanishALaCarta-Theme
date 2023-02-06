const path = require('path');
const common = require('./webpack.common');
const {
    merge
} = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
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
    module: {
        rules: [{
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "resolve-url-loader",
                    "sass-loader"
                ],
            },
            {
                test: /\.(png|jpg|svg|jpeg|ico|webp|gif)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        publicPath: "http://s942334853.onlinehome.us/wp-content/themes/SpanishALaCarta/assets/build/images",
                        outputPath: "/images",
                        name: '[name].[ext]',
                    }
                }]
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].bundle.css',

        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        new webpack.EnvironmentPlugin({
            URL: "http://s942334853.onlinehome.us",
            THEME_URL: "http://s942334853.onlinehome.us/wp-content/themes/spanischalacarte/"
        })
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin(),
            `...`,
            new CssMinimizerPlugin(),
        ]
    },
});