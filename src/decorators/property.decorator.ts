import chalk from 'chalk';

interface IUserServicee {
	users: number;
	getUsersInDatabase(): number;
}

class UserServiceeee implements IUserServicee {
	@Max(100)
	users: number = 1000;

	getUsersInDatabase(): number {
		throw new Error('Error');
	}
}

function Max(max: number) {
	return (target: Object, propertyKey: PropertyKey) => {
		console.log(target, propertyKey);

		let value: number;

		let getter = () => {
			return value;
		};

		let setter = (newValue: number) => {
			if (newValue > max)
				throw new Error(chalk.bgRed.black(`Number is higher than ${chalk.bgYellow.black(max)}!`));
			value = x;
		};

		Object.defineProperty(target, propertyKey, {
			get: getter,
			set: setter,
		});
	};
}

const usssser = new UserServiceeee();

console.log(usssser.users);
