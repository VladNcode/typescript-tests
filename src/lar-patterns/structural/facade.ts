import { col } from '../../colorize.js';

class Notify {
	send(template: string, to: string): void {
		console.log(`Sending ${template} to: ${to}`);
	}
}

const notify = new Notify();

notify.send(col.red('abc'), col.red('xyz'));
