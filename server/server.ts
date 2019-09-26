import express from 'express';

export interface Hello {
	message: string;
}

const API_ROOT = process.env.API_ROOT || '/api';

const server = express();

server.get(`${API_ROOT}/hello`, (req, res) => {
	const hello: Hello = { message: 'Hello, World!' };
	res.json(hello);
});

export default server;
