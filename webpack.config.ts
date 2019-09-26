import path from 'path';
import { Configuration } from 'webpack';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const config: Configuration = {
	mode: 'development',
	entry: './app/index.ts',
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
		  { test: /\.tsx?$/, loader: "ts-loader" }
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
