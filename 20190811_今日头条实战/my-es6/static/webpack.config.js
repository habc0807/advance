const merge = require('webpack-merge');

const baseConfig = {
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
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			}
		]
	}
};

const devConfig = {
    devServer: {
        overlay: true,
        contentBase: './dist/index.html',
        open: true,
        port: 8383,
        hot: true,
        historyApiFallback: true,
        proxy: {
          '/api': {
            target: 'http://localhost:8099',
            secure: false, // https
            pathRewrite: {
              '^/api': '',
            },
          },
        },
      },
}

module.exports = merge(baseConfig, devConfig)