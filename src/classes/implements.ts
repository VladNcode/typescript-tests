interface ILogger {
	log(...args: any[]): void;
	error(...args: any[]): void;
}

class Logger implements ILogger {
	log(...args: any[]): void {
		console.log(...args);
	}
	error(...args: any[]): void {
		console.log(...args);
	}
}

interface IPayable {
	pay(paymentId: number): void;
	price?: number;
}

interface IDeletable {
	delete(): void;
}

class User4 implements IPayable, IDeletable {
	delete(): void {}
	pay(paymentId: number): void {}
	price?: number | undefined;
}
