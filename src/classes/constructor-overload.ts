class User {
	name: string;
	age: number;

	constructor();
	constructor(name: string);
	constructor(age: number);
	constructor(name: string, age: number);
	constructor(ageOrName?: string | number, age?: number) {
		if (typeof ageOrName === 'string') {
			this.name = ageOrName;
		}

		if (typeof ageOrName === 'number') {
			this.age = ageOrName;
		}

		if (age) {
			this.age = age;
		}
	}
}

const user = new User();
const user2 = new User('John');
const user3 = new User(45);
const user4 = new User('John', 45);
