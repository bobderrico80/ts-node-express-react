import express from 'express';
import server from './server';
import path from 'path';

const PORT = process.env.PORT || 8081;
const SERVE_STATIC = process.env.SERVE_STATIC === 'false' ? false : true;

if (SERVE_STATIC) {
	server.use(express.static(path.join(__dirname, '../dist')));
}

server.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});
