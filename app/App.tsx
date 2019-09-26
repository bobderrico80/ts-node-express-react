import React, { useState, useEffect } from 'react';
import { Hello } from '../server/server';

interface AppProps {};

const App = (props: AppProps) => {
	const [text, setText] = useState('');

	useEffect(() => {
		(async () => {
			const response = await fetch('/api/hello');
			const hello: Hello = await response.json();
			setText(hello.message);
		})();
	}, []);

	return (
		<h1>{text}</h1>
	);
}

export default App;
