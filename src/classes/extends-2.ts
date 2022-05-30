class User5 {
	name: string = 'user';

	constructor() {
		console.log(this.name);
	}
}

class Admin extends User5 {
	name: string = 'admin';

	constructor() {
		super();
		console.log(this.name);
	}
}

new Admin();

class HttpError extends Error {
	constructor(message: string, public code?: number) {
		super(message);
		this.code = code ?? 500;
	}
}
