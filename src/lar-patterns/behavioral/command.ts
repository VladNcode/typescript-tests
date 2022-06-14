class UserX {
	constructor(public userId: number) {}
}

class CommandHistory {
	public commands: Command[] = [];

	push(command: Command): void {
		this.commands.push(command);
	}

	remove(command: Command) {
		this.commands = this.commands.filter(c => command.commandId !== c.commandId);
	}
}

abstract class Command {
	public commandId: number;

	abstract execute(): void;

	constructor(public history: CommandHistory) {
		this.commandId = Math.random();
	}
}

class AddUserCommand extends Command {
	constructor(private user: UserX, private reciever: UserService, history: CommandHistory) {
		super(history);
	}

	execute(): void {
		this.reciever.saveUser(this.user);
		this.history.push(this);
	}

	undo() {
		this.reciever.deleteUser(this.user.userId);
		this.history.remove(this);
	}
}

class UserService {
	saveUser(user: UserX) {
		console.log(`Saving user with id: ${user.userId}...`);
	}

	deleteUser(userId: number) {
		console.log(`Deleting user with id: ${userId}...`);
	}
}

class Controller {
	reciever: UserService;
	history: CommandHistory = new CommandHistory();

	addReciever(reciever: UserService) {
		this.reciever = reciever;
	}

	run() {
		const addUserCommand = new AddUserCommand(new UserX(1), this.reciever, this.history);
		addUserCommand.execute();
		console.log(addUserCommand.history);
		addUserCommand.undo();
		console.log(addUserCommand.history);
	}
}

const controller = new Controller();
controller.addReciever(new UserService());
controller.run();
