const path = require('path');
const webpack = require('webpack'); // to access built-in plugins
const JS_DIR = path.resolve(__dirname, 'assets/src/js');

module.exports = {
    entry: {
      main: {
        import: JS_DIR + '/main.js',
        dependOn: "vendor"
      },
      vendor: {
        import: JS_DIR + '/vendor.js'
      },
      homepage: {
        import: JS_DIR + "/pages/homepage.js",
        dependOn: ["main", "vendor"]
      },
      about_us: {
        import: JS_DIR + "/pages/about-us.js",
        dependOn: ["main", "vendor"]
      },
      contact_us: {
        import: JS_DIR + "/pages/contact-us.js",
        dependOn: ["main", "vendor"]
      },
      blog: {
        import: JS_DIR + "/pages/blog.js",
        dependOn: ["main", "vendor"]
      },
      single: {
        import: JS_DIR + "/pages/single.js",
        dependOn: ["main", "vendor"]
      },
      archive_product: {
        import: JS_DIR + "/pages/woocommerce/archive-product.js",
        dependOn: ["main", "vendor"]
      },
      single_product: {
        import: JS_DIR + "/pages/woocommerce/single-product.js",
        dependOn: ["main", "vendor"]
      },
      utilsScript: "/node_modules/intl-tel-input/build/js/utils.js"
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new webpack.ProvidePlugin({
          $: 'jquery',
          jQuery: 'jquery'
        })
    ],
    module:{
      rules:[
        {
          test: /\.js$/,
          include: [ JS_DIR ],
          exclude: /node_modules/,
          use: 'babel-loader'
        },
        { test: /\.woff2(\?v=[0-9]\.[0-9]\.[0-9])?$/i, loader: 'url-loader', options: { limit: 1000000, mimetype: 'application/font-woff2' } },
        { test: /\.woff(\?v=[0-9]\.[0-9]\.[0-9])?$/i, loader: 'url-loader', options: { limit: 1000000, mimetype: 'application/font-woff' } },
        { test: /\.(ttf|eot|svg|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/i, loader: 'file-loader' }
      ]
    },
    externals: {
      jquery: 'jQuery'
    }
}