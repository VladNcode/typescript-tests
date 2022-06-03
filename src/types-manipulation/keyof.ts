interface IUser5 {
	name?: string;
	age: number;
}

type KeysOfUser = keyof IUser5;

const key: KeysOfUser = 'name';

function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
	return obj[key];
}

const user8: IUser5 = { name: 'John', age: 35 };

const userName = getValue(user8, 'name');
