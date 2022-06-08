import chalk from 'chalk';
import 'reflect-metadata';

const POSITIVE_METADATA_KEY = Symbol('POSITIVE_METADATA_KEY');

interface IUserServicee {
	getUsersInDatabase(): number;
}

class UserServ implements IUserServicee {
	private _users: number;

	getUsersInDatabase(): number {
		return this._users;
	}

	@Validate()
	setUsersInDatabase(@Positive() num: number, @Positive() num2: number): void {
		this._users = num;
	}
}

function Positive() {
	return (target: Object, propertyKey: string | symbol, parameterIndex: number) => {
		// console.log(Reflect.getOwnMetadata('design:type', target, propertyKey));
		// console.log(Reflect.getOwnMetadata('design:paramtypes', target, propertyKey));
		// console.log(Reflect.getOwnMetadata('design:returntype', target, propertyKey));

		let existParams: number[] =
			Reflect.getOwnMetadata(POSITIVE_METADATA_KEY, target, propertyKey) || [];

		existParams.push(parameterIndex);

		Reflect.defineMetadata(POSITIVE_METADATA_KEY, existParams, target, propertyKey);

		// console.log(UserServ);
		// console.log(Reflect.getOwnMetadata(POSITIVE_METADATA_KEY, target, propertyKey));
	};
}

function Validate() {
	return (
		target: Object,
		propertyKey: string | symbol,
		// descriptor: TypedPropertyDescriptor<(...args: any[]) => any>,
		descriptor: PropertyDescriptor,
	) => {
		let method = descriptor.value;

		descriptor.value = function (...args: any[]) {
			let positiveParams: number[] = Reflect.getOwnMetadata(
				POSITIVE_METADATA_KEY,
				target,
				propertyKey,
			);

			console.log(Reflect.getMetadataKeys(target));

			// console.log(positiveParams);
			if (args.length) {
				for (const index of args) {
					console.log(index);
					if (index < 0) {
						throw new Error(chalk.bgRed.black(`${index} must be greater than zero!`));
					}
				}
			}

			if (positiveParams) {
				for (let index of positiveParams) {
					if (args[index] < 0) {
						throw new Error(
							chalk.bgRed.black(`Number at index ${index} must be greater than zero!`),
						);
					}
				}
			}

			return method?.apply(target, args);
		};
	};
}

const usssrrrr = new UserServ();

console.log(usssrrrr.setUsersInDatabase(10, 50));
// console.log(usssrrrr.setUsersInDatabase(25, -1));
