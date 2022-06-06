interface IUserS {
	users: number;
	getUsersInDatabase(): number;
}

class UserServicee implements IUserS {
	users: number = 1000;

	getUsersInDatabase(): number {
		return this.users;
	}
}

function nullUser2(obj: IUserS) {
	obj.users = 0;
	return obj;
}

function logUsers(obj: IUserS) {
	console.log('Users: ' + obj.users);
	return obj;
}

console.log(new UserServicee().getUsersInDatabase());
console.log(nullUser2(new UserServicee()).getUsersInDatabase());
console.log(logUsers(nullUser2(new UserServicee())).getUsersInDatabase());
