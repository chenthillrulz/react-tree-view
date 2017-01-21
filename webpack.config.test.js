'use strict';

module.exports = {
    cache: true,
    devtool: 'inline-source-map',
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: [/node_modules/],
            loaders: ['babel-loader']
        }],
        postLoaders: [{
            test: /\.js$/,
            exclude: [/test\/*/, /node_modules/],
            loader: 'istanbul-instrumenter'
        }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
}