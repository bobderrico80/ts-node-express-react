import express from 'express';

const server = express();

server.get('/', (req, res) => {
	res.send('hello world');
});

export default server;
