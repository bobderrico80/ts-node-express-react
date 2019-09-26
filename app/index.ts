interface Hello {
	message: string;
}

const init = async () => {
	const response = await fetch('/api/hello')
	const json: Hello = await response.json();
	const message = json.message;

	const h1 = document.createElement('h1');
	h1.innerText = message;

	const root = document.getElementById('root');

	if (root) {
		root.appendChild(h1);
	}
};

init();
