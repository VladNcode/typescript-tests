class CatDoge {
	catName: string;
	dogName: string;

	@CatchErr({ rethrow: false })
	async throwErr() {
		throw new Error('ERROR!!!');
	}
}

function CatchErr(data: { rethrow: boolean } = { rethrow: false }) {
	return (
		_: Object,
		__: string | symbol,
		descriptor: TypedPropertyDescriptor<(...args: any[]) => any>,
	): TypedPropertyDescriptor<(...args: any[]) => any> | void => {
		const oldValue = descriptor.value;

		descriptor.value = async (...args: any[]) => {
			try {
				// return await oldValue?.apply(target, args);
				if (oldValue !== undefined) return await oldValue();
			} catch (e) {
				if (e instanceof Error) {
					console.log('Catched error: ' + e.message);

					if (data.rethrow) {
						throw e;
					}
				}
			}
		};
	};
}

console.log(new CatDoge().throwErr());
