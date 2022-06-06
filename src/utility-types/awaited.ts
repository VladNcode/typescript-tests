type A = Awaited<Promise<string>>;
type AA = Awaited<Promise<Promise<string>>>;

interface IMenu {
	name: string;
	url: string;
}

async function getMenu(): Promise<IMenu[]> {
	return [{ name: 'test', url: 'test' }];
}

type RIMenu = Awaited<ReturnType<typeof getMenu>>; // IMenu[]

async function getArray<T>(x: T): Promise<Awaited<T>[]> {
	return [await x];
}

// OLD WAY
// async function getArray2<T>(x: T): Promise<T[]> {
// 	return [await x];
// }
