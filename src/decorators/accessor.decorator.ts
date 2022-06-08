import chalk from 'chalk';

interface IUserServicee {
	getUsersInDatabase(): number;
}

class UserSer implements IUserServicee {
	private _users: number;

	@Log()
	set users(value: number) {
		this._users = value;
	}

	get users() {
		return this._users;
	}

	getUsersInDatabase(): number {
		throw new Error('Error');
	}
}

function Log() {
	return (target: Object, _: PropertyKey, descriptor: PropertyDescriptor) => {
		const oldSetter = descriptor.set;

		descriptor.set = (...args: any) => {
			console.log(chalk.bgGreen.black(`value: ${args}`));
			oldSetter?.apply(target, args);
		};
	};
}

const uuuuser = new UserSer();
uuuuser.users = 155;
console.log(uuuuser.users);
