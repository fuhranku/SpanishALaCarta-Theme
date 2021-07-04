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
        }
      ]
    },
    externals: {
      jquery: 'jQuery'
    }
}