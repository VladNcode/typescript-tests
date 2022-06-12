import chalk from 'chalk';

const green = chalk.bgGreen.black;

interface Prototypee<T> {
	clone(): T;
}

class UserHistory implements Prototypee<UserHistory> {
	createdAt: Date;
	constructor(public email: string, public name: string) {
		this.createdAt = new Date();
	}

	clone(): UserHistory {
		let target = new UserHistory(this.email, this.name);
		target.createdAt = this.createdAt;
		return target;
	}
}

let userA = new UserHistory('test@test.com', 'John');
let userB = userA.clone();
userB.email = 'testB@test.com';

console.log(green('userA ->'), userA);
console.log(green('userB ->'), userB);
