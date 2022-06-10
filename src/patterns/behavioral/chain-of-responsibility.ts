interface Handler {
	setNext(handler: Handler): Handler;

	handle(request: string): string | null;
}

abstract class AbstractHandler implements Handler {
	private nextHandler: Handler;

	public setNext(handler: Handler): Handler {
		this.nextHandler = handler;
		return handler;
	}

	public handle(request: string): string | null {
		if (this.nextHandler) {
			return this.nextHandler.handle(request);
		}

		return null;
	}
}

class MonkeyHandler extends AbstractHandler {
	public override handle(request: string): string | null {
		if (request === 'Banana') {
			return `Monkey: I'll eat the ${request}.`;
		}
		return super.handle(request);
	}
}

class SquirrelHandler extends AbstractHandler {
	public override handle(request: string): string | null {
		if (request === 'Nut') {
			return `Squirrel: I'll eat the ${request}.`;
		}
		return super.handle(request);
	}
}

class DogHandler extends AbstractHandler {
	public override handle(request: string): string | null {
		if (request === 'MeatBall') {
			return `Dog: I'll eat the ${request}.`;
		}
		return super.handle(request);
	}
}

function cli(handler: Handler) {
	const foods = ['Nut', 'Banana', 'Cup of coffee'];

	for (const food of foods) {
		console.log(`Client: Who wants a ${food}?`);

		const result = handler.handle(food);
		if (result) {
			console.log(`  ${result}`);
		} else {
			console.log(`  ${food} was left untouched.`);
		}
	}
}

const monkey = new MonkeyHandler();
const squirrel = new SquirrelHandler();
const dog2 = new DogHandler();

monkey.setNext(squirrel).setNext(dog2);

console.log('Chain: Monkey > Squirrel > Dog\n');
cli(monkey);
console.log('');

console.log('Subchain: Squirrel > Dog\n');
cli(squirrel);
