class User6 {
	constructor(public name: string) {}
}

class Users extends Array<User6> {
	searchByname(name: string): User6 | undefined {
		return this.find(user => user.name === name);
	}

	override toString(): string {
		return this.map(user => user.name).join(', ');
	}
}

class UserList {
	users: User6[];

	push(user: User6): void {
		this.users.push(user);
	}
}

class Payment2 {
	date: Date;
}

class UserWithPayment extends Payment {
	name: string;
}

class UserWithPayment2 {
	constructor(public user: User6, public payment: Payment) {}
}

const users = new Users();

users.push(new User6('John'));
users.push(new User6('Andrew'));
console.log(users.toString());
