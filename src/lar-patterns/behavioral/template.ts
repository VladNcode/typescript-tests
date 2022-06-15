class Form {
	constructor(public name: string) {}
}

abstract class SafeForm<T> {
	public save(form: Form) {
		const res = this.fill(form);
		this.log(res);
		this.send(res);
	}

	protected abstract fill(form: Form): T;
	protected abstract send(data: T): void;

	protected log(data: T): void {
		console.log(data);
	}
}

class FirstAPI extends SafeForm<string> {
	protected fill(form: Form): string {
		return form.name;
	}

	protected send(data: string): void {
		console.log(`First api, Sending data: ${data}...`);
	}
}

class SecondAPI extends SafeForm<{ fio: string }> {
	protected fill(form: Form): { fio: string } {
		return { fio: form.name };
	}

	protected send(data: { fio: string }): void {
		console.log(`Second api, Sending data: ${JSON.stringify(data)}...`);
	}
}

const form1 = new FirstAPI();
form1.save(new Form('John'));

const form2 = new SecondAPI();
form2.save(new Form('John'));
