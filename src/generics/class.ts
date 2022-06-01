class Resp<D, E> {
	data?: D;
	error?: E;

	constructor(data?: D, error?: E) {
		if (data) {
			this.data = data;
		}
		if (error) {
			this.error = error;
		}
	}
}

const res3 = new Resp<string, undefined>('data');

class HTTPResp<F> extends Resp<string, number> {
	code: F;

	setCode(code: F): void {
		this.code = code;
	}
}

const res4 = new HTTPResp();
