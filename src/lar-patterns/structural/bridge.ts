import { col as c } from '../../colorize.js';

interface IProvider {
	sendMessage(message: string): void;
	connect(config: unknown): void;
	disconnect(): void;
}

class TelegramProvider implements IProvider {
	sendMessage(message: string): void {
		console.log(c.green(message));
	}
	connect(config: string): void {
		console.log(c.green(config));
	}
	disconnect(): void {
		console.log(c.green('Disconnected from Telegram!'));
	}
}

class WhatsUpProvider implements IProvider {
	sendMessage(message: string): void {
		console.log(c.yellow(message));
	}
	connect(config: string): void {
		console.log(c.yellow(config));
	}
	disconnect(): void {
		console.log(c.yellow('Disconnected from WhatsUp!'));
	}
}

class NotificationSender {
	constructor(protected provider: IProvider) {}

	send(message: string): void {
		console.log(c.magenta('Sending normal message!'));

		this.provider.connect('Config loaded!');
		this.provider.sendMessage(message);
		this.provider.disconnect();
	}
}

class DeleyedNotificationSender extends NotificationSender {
	// constructor(provider: IProvider) {
	// 	super(provider);
	// }

	override send(message: string, seconds?: number): void {
		if (seconds) {
			setTimeout(() => {
				console.log(c.cyan('Sending delayed message!'));

				this.provider.connect('Config loaded!');
				this.provider.sendMessage(message);
				this.provider.disconnect();
			}, seconds * 1000);
		} else {
			super.send(message);
		}
	}
}

const telegram = new NotificationSender(new TelegramProvider());
telegram.send(c.red('Telegram message'));

const whatsup = new NotificationSender(new WhatsUpProvider());
whatsup.send(c.red('WhatsUp message'));

const delayedTelegram = new DeleyedNotificationSender(new TelegramProvider());
delayedTelegram.send(c.red('DelayedTelegram message'), 2);
