module.exports = {
  entry: './demo/app.js',
  output: {
    filename: 'bundle.js',
    path: './demo'
  },
 resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: [/node_modules/],
            loaders: ['react-hot', 'babel-loader']
        }]
    }

}
