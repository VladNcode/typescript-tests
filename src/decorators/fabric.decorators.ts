@logMe()
@setUsersCounter(5)
@setUsersCounterAdvanced(10)
class Usser {
	users: number = 1000;

	getUsers() {
		return this.users;
	}
}

function logMe() {
	console.log('logMe init');

	return (_: Function) => {
		console.log('logMe run');
	};
}

function setUsersCounter(n: number) {
	console.log('setUsersCounter init');

	return (target: Function) => {
		console.log('setUsersCounter run');
		target.prototype.users = n;
	};
}

function setUsersCounterAdvanced(n: number) {
	console.log('setUsersCounterAdvanced init');

	return <T extends { new (...args: any[]): {} }>(constructor: T) => {
		console.log('setUsersCounterAdvanced run');
		return class extends constructor {
			users = n;
		};
	};
}

console.log(new Usser().getUsers());
