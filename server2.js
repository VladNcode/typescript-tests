import { AsyncLocalStorage, executionAsyncResource } from 'node:async_hooks';
import express from 'express';

const app = express();
const context = new AsyncLocalStorage();

const foo4 = () => {
	const requestId = context.getStore().get('requestId');

	console.log(requestId);

	console.log(executionAsyncResource());
};

const foo3 = () => {
	foo4();
};

const foo2 = () => {
	foo3();
};

const foo1 = () => {
	foo2();
};

app.get('/', (_, res) => {
	const requestId = 'request id: 555';

	const store = new Map();
	store.set('requestId', requestId);

	context.run(store, () => {
		foo1();

		res.send('Hello world!');
	});
});

app.listen(3000, () => {
	console.log('Listening on 3000');
});
