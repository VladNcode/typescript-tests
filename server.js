import express from 'express';

const app = express();

const foo4 = requestId => {
	console.log(requestId);
};

const foo3 = requestId => {
	foo4(requestId);
};

const foo2 = requestId => {
	foo3(requestId);
};

const foo1 = requestId => {
	foo2(requestId);
};

app.get('/', (req, res) => {
	const requestId = 'request id: 555';
	foo1(requestId);

	res.send('Hello, world!');
});

app.listen(3000, () => {
	console.log('Listening on 3000');
});
