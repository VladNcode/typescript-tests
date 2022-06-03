const aaa: number = Math.random() > 0.5 ? 1 : 0;

function first(n: number) {
	console.log(n);
	console.log('first(): factory evaluated');
	return function (target: any, propertyKey: string) {
		console.log('\x1b[34m%s\x1b[0m', 'First_1 :', this);
		console.log('\x1b[34m%s\x1b[0m', 'First_2 :', target);
		console.log('\x1b[34m%s\x1b[0m', 'First_3 :', propertyKey);
		console.log('first(): called');

		let value: any;
		const get = function () {
			console.log('\x1b[32m%s\x1b[0m', 'getter_+ :', this);
			return value;
		};
		const set = function (n: number) {
			if (n < n) {
				console.log('\x1b[35m%s\x1b[0m', 'Short');
				return;
			}
			value = n;
			console.log('\x1b[32m%s\x1b[0m', 'setter_+:', value);
		};

		Object.defineProperty(target, propertyKey, { set, get });
		Object.defineProperties(target, { propertyKey: { set, get } });
	};
}

function second(n: number) {
	console.log(n);
	console.log('second(): factory evaluated');
	return function (target: any, propertyKey: string) {
		console.log('\x1b[33m%s\x1b[0m', 'Second_1 :', this);
		console.log('\x1b[33m%s\x1b[0m', 'Second_2 :', target);
		console.log('\x1b[33m%s\x1b[0m', 'Second_3 :', propertyKey);
		console.log('second(): called');

		let value: any;
		const get = function () {
			console.log('\x1b[32m%s\x1b[0m', 'getter_+ :', this);
			return value;
		};
		const set = function (n: number) {
			if (n < n) {
				console.log('\x1b[35m%s\x1b[0m', 'Short');
				return;
			}
			value = n;
			console.log('\x1b[32m%s\x1b[0m', 'setter_+:', value);
		};

		Object.defineProperty(target, 'asdasd', { set, get });
		Object.defineProperties(target, { asd: { set, get } });
	};
}

class ExampleClass {
	@first(1)
	@second(5)
	method: string;

	constructor(method: string) {
		this.method = method;
	}

	test(a: string, b: number) {}
}

const test = new ExampleClass('asd').method;

console.log(test);
