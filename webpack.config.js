var webpack = require('webpack');
var path = require('path');
var libraryName = 'confere';
var plugins = [], outputFile = `${libraryName}.js`;

if (process.env.WEBPACK_ENV === 'build') {
    plugins.push(new webpack.optimize.UglifyJsPlugin({ minimize: true }));
    outputFile = libraryName + '.min.js';
} else {
    outputFile = libraryName + '.js';
}

var config = {
    entry: __dirname + '/src/index.js',
    devtool: 'source-map',
    output: {
        path: __dirname + '/lib',
        filename: outputFile,
        library: "Confere",
        libraryTarget: 'umd',
        libraryExport: 'default',
        umdNamedDefine: true
    },
    module: {
        loaders: [
            {
                test: /(\.jsx|\.js)$/,
                loader: 'babel-loader',
                exclude: /(node_modules|bower_components)/
            },
            {
                test: /(\.jsx|\.js)$/,
                loader: "eslint-loader",
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        //root: path.resolve('./src'),
        extensions: ['.js']
    },
    plugins: plugins
}
module.exports = config;