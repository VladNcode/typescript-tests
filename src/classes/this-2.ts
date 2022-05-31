class UserBuilder {
	name: string;

	setName(name: string): this {
		if (this.isAdmin()) {
			this.name = 'admin';
		} else {
			this.name = name;
		}

		return this;
	}

	isAdmin(): this is AdminBuilder {
		return this instanceof AdminBuilder;
	}
}

class AdminBuilder extends UserBuilder {
	roles: string[];
}

const res = new UserBuilder().setName('John');
const res2 = new AdminBuilder().setName('John');

const user7: UserBuilder | AdminBuilder = new UserBuilder();

if (user7.isAdmin()) {
	console.log(user7);
} else {
	console.log(user7);
}
