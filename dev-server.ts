import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import config from './webpack.config';

const app = express();
const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
	publicPath: '/'
}));

app.listen(8081, () => {
	console.log('Dev server listening on port 8081');
});
