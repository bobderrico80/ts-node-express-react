import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import server from './server/server';
import config from './webpack.config';

const PORT = process.env.PORT || 8081;
const compiler = webpack(config);

server.use(webpackDevMiddleware(compiler, {
	publicPath: '/'
}));

server.listen(PORT, () => {
	console.log(`Dev server listening on port ${PORT}`);
});
