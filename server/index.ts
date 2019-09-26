import express from 'express';
import server from './server';
import path from 'path';

server.use(express.static(path.join(__dirname, '../dist')));

server.listen(8081, () => {
	console.log('Server listening on port 8081');
});
