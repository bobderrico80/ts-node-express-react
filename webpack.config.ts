import path from 'path';
import { Configuration } from 'webpack';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const config: Configuration = {
	mode: 'development',
	entry: './app/index.tsx',
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/'
	},
	resolve: {
		extensions: [".ts", ".tsx", ".js"]
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './app/index.html'
		}),
		new CleanWebpackPlugin()
	],
	devtool: 'inline-source-map'
}

export default config;
