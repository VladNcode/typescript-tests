interface Data {
	group: number;
	name: string;
}

interface IGroup<T> {
	[key: string]: T[];
}

const data2: Data[] = [
	{
		group: 1,
		name: 'a',
	},
	{
		group: 2,
		name: 'b',
	},
	{
		group: 1,
		name: 'c',
	},
	{
		group: 2,
		name: 'b',
	},
	{
		group: 4,
		name: 'b',
	},
	{
		group: 2,
		name: 'b',
	},
];

function group2<T extends Record<K, PropertyKey>, K extends keyof T>(data: T[], key: K): IGroup<T> {
	return data.reduce((acc, item) => {
		(acc[item[key]] = acc[item[key]] || []).push(item);
		return acc;
	}, {} as Record<T[K], T[]>);
}

function group<T extends Record<K, PropertyKey>, K extends keyof T>(data: T[], key: K): IGroup<T> {
	const obj = {} as Record<T[K], T[]>;

	for (const d of data) {
		// if (obj[d[key]]) {
		// 	obj[d[key]] = [...obj[d[key]], d];
		// } else {
		// 	obj[d[key]] = [d];
		// }

		(obj[d[key]] = obj[d[key]] || []).push(d);
	}

	return obj;
}

console.log(group(data2, 'group'));
console.log(group2(data2, 'group'));
