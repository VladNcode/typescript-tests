interface IUserS {
	users: number;
	getUsersInDatabase(): number;
}

@threeUserAdvanced
@nullUser
class UserServiceee implements IUserS {
	users: number;

	getUsersInDatabase(): number {
		return this.users;
	}
}

function nullUser(target: Function) {
	target.prototype.users = 0;
}

function threeUserAdvanced<T extends { new (...args: any[]): {} }>(constructor: T) {
	return class extends constructor {
		users = 3;
	};
}

console.log(1);

console.log(new UserServiceee().getUsersInDatabase());
