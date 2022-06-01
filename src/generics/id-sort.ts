interface ObjWithId {
	id: number;
}

function sortById<T extends ObjWithId>(data: T[], order: 'asc' | 'desc' = 'asc'): T[] {
	return data.sort((a, b) => (order === 'desc' ? b.id - a.id : a.id - b.id));
}

const data = [
	{ id: 3, name: 'John' },
	{ id: 1, status: 5 },
	{ id: 2, name: 'Sawa' },
];

console.log(sortById(data));
