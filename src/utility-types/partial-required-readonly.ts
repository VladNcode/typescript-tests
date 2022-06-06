interface Userrrr {
	name: string;
	age?: number;
	email: string;
}

type required = Required<Userrrr>;
type partial = Partial<Userrrr>;
type readonly = Readonly<Userrrr>;
type requiredAndReadonly = Required<Readonly<Userrrr>>;

const pp: partial = {};
