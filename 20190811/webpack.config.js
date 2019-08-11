module.exports = {
    mode: 'production',
    entry: __dirname + '/src/index.js',
    output: {
        path: __dirname + '/dist/',
        filename: 'index.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
                use: 'babel-loader'
            }
        ]
    }
}