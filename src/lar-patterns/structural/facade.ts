import { col } from '../../colorize.js';

class Notify {
	send(template: string, to: string): void {
		console.log(`Sending ${template} to: ${to}`);
	}
}

class Log {
	log(message: string): void {
		console.log(message);
	}
}

interface ITemp {
	name: string;
	template: string;
}

class Template {
	private templates = [{ name: 'other', template: '<h1>Template!</h1>' }];

	getByName(name: string): ITemp | null {
		return this.templates.find(temp => temp.name === name) || null;
	}
}

class NotificationFacade {
	private notify: Notify;
	private logger: Log;
	private template: Template;

	constructor() {
		this.notify = new Notify();
		this.logger = new Log();
		this.template = new Template();
	}

	send(to: string, templateName: string) {
		const data = this.template.getByName(templateName);

		if (!data) {
			this.logger.log(col.red('Template not found!'));
			return;
		}

		this.logger.log(col.green(`Sending ${templateName} to: ${to}`));
		this.notify.send(data.template, to);
	}
}

const notify = new NotificationFacade();

notify.send('user', 'other');

// notify.send(col.red('abc'), col.red('xyz'));
