class Use {
	constructor(public id: number, public name: string) {}
}

function getData(id: number, name: string): Use {
	return new Use(id, 'John');
}

type RT = ReturnType<typeof getData>; // Use
type RT2 = ReturnType<() => void>; // void
type RT3 = ReturnType<<T>() => T>; // unknown
type RT4 = ReturnType<<T extends string>() => T>; // string

type PT = Parameters<typeof getData>[0]; // number
// type first = PT[0];

type CP = ConstructorParameters<typeof Use>; // [id: number, name: string]

type IT = InstanceType<typeof Use>; // Use
