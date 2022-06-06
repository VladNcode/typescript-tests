function min(n: number) {
	console.log('Min n: ', n);

	// console.log('min start');
	return (target: {} | any, name: PropertyKey): any => {
		// console.log('min init');

		let value: number;

		const descriptor = {
			get() {
				return 5;
			},

			set(x: number) {
				// console.log('setter Min oldValue: ', oldValue);
				console.log('setter Min x: ', x);
				console.log('setter Min value', value);

				// value = x;

				value = x < n ? x : n;
				// console.log('value: ', value);
				// console.log('x: ', x);
				return value;
			},

			enumerable: true,
			configurable: true,
		};

		Object.defineProperty(target, name, descriptor);

		// console.log('min end');
	};
}

function max(n: number) {
	console.log('Max n: ', n);
	// console.log('max start');
	return (target: {} | any, name: any): any => {
		// console.log('max init');
		let value: number;

		//@ts-ignore
		let oldValue: any = Object.getOwnPropertyDescriptor(target, name)?.set();

		const descriptor = {
			get() {
				return value;
			},

			set(x: any) {
				// console.log('setter max');
				// console.log('oldValue: ', oldValue);
				// value = x > n ? n : x;
				// return value;
				console.log('setter Max value', value);

				value = x;

				console.log('setter Max oldValue: ', oldValue);
				console.log('setter Max x: ', x);
				return value;
			},

			enumerable: true,
			configurable: true,
		};

		Object.defineProperty(target, name, descriptor);

		// console.log('max end');
	};
}

class ExampleClass {
	@max(5)
	@min(1)
	method: number;
}

const test = new ExampleClass();

test.method = 6;
console.log(test.method);

// test.method = 6;
// console.log(test.method);

/*
 
1) Сделать 2 декоратора +
2) Проверять n > min && n < max +
3) Получаем число с которым нужно сравнить +
4) Получаем число которое нужно сравнивать +-
5) Прокинуть в нексте число возвращаемое первым декоратором во второй
6) Проверить число полученное из первого декоратора во втором

 */
