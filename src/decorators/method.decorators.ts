interface IUs {
	users: number;
	getUsersInDatabase(): number;
}

class UsService implements IUs {
	users: number = 1000;

	@Log()
	getUsersInDatabase(): number {
		throw new Error('Test');
	}
}

function Log() {
	return (
		target: Object,
		propertyKey: string | symbol,
		descriptor: TypedPropertyDescriptor<(...args: any[]) => any>,
	): TypedPropertyDescriptor<(...args: any[]) => any> | void => {
		console.log(target);
		console.log(propertyKey);
		console.log(descriptor);

		const oldValue = descriptor.value;

		descriptor.value = () => {
			console.log('NO ERROR!!!');

			if (oldValue !== undefined) {
				oldValue();
			}
		};
	};
}

console.log(new UsService().getUsersInDatabase());
