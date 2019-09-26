import express from 'express';

const API_ROOT = process.env.API_ROOT || '/api';

const server = express();

server.get(`${API_ROOT}/hello`, (req, res) => {
	res.json({ message: 'Hello, World!' });
});

export default server;
