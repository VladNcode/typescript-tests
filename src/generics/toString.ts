function toString<T>(data: T): string | undefined {
	if (data instanceof Array) {
		return data.join(', ');
	}

	switch (typeof data) {
		case 'string':
			return data;
		case 'number':
		case 'bigint':
		case 'boolean':
		case 'symbol':
		case 'function':
			return String(data);
		case 'object':
			return JSON.stringify(data);
		default:
			return undefined;
	}
}

console.log(toString<number[]>([5, 10]));
console.log(toString({ a: 5 }));
console.log(toString(() => 'hello world'));
