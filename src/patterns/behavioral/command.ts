interface Command {
	execute(): void;
}

class SimpleCommand implements Command {
	constructor(private payload: string) {}
	execute(): void {
		console.log(`Doing simple command... ${this.payload}`);
	}
}

class ComplexCommand implements Command {
	constructor(private reciever: Receiver, private a: string, private b: string) {}

	execute(): void {
		console.log('Doing complex command...');

		this.reciever.doSimpleCommand(this.a);
		this.reciever.doSomethingElse(this.b);
	}
}

class Receiver {
	doSimpleCommand(a: string) {
		console.log(`Reciever doing something... ${a}`);
	}
	doSomethingElse(b: string) {
		console.log(`Reciever not doing something... ${b}`);
	}
}

class Invoker {
	onStart: Command;
	onFinish: Command;

	doOnStart(command: Command) {
		this.onStart = command;
	}
	doOnFinish(command: Command) {
		this.onFinish = command;
	}

	doSomethingGreat() {
		if (this.check(this.onStart)) {
			this.onStart.execute();
		}

		console.log('doSomethingImportant');

		if (this.check(this.onFinish)) {
			this.onFinish.execute();
		}
	}

	check(obj: Command): obj is Command {
		return obj.execute !== undefined;
	}
}

class Manager {
	commands: Command[] = [];

	execute() {
		console.log('doSomethingImportant');

		const validCommands = this.commands.filter(command => this.check(command));
		validCommands.forEach(command => command.execute());
	}

	addCommand(command: any) {
		this.commands.push(command);
	}

	check(obj: Command): obj is Command {
		return obj.execute !== undefined;
	}
}

const invoker = new Invoker();
invoker.doOnStart(new SimpleCommand('Say Hi!'));
const receiver = new Receiver();
invoker.doOnFinish(new ComplexCommand(receiver, 'Send email', 'Save report'));

const manager = new Manager();
manager.addCommand(new SimpleCommand('Eat'));
manager.addCommand(new SimpleCommand('Walk'));
manager.addCommand('test');
manager.addCommand(new SimpleCommand('Eat'));
manager.addCommand(new ComplexCommand(receiver, 'Send email', 'Save report'));
manager.execute();

// invoker.doSomethingGreat();
