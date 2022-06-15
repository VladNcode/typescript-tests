import { col } from '../../colorize.js';

interface IObserver {
	update(subject: ISubject): void;
}

interface ISubject {
	attach(observer: IObserver): void;
	detach(observer: IObserver): void;
	notify(): void;
}

class Lead {
	constructor(public name: string, public phone: string) {}
}

class NewLead implements ISubject {
	private observers: IObserver[] = [];
	public state: Lead;

	attach(observer: IObserver): void {
		if (!this.observers.includes(observer)) {
			this.observers.push(observer);
		}
	}

	detach(observer: IObserver): void {
		const observerIndex = this.observers.indexOf(observer);

		if (observerIndex === -1) return;

		this.observers.splice(observerIndex, 1);
	}

	notify(): void {
		this.observers.forEach(obs => obs.update(this));
	}
}

class NotificationService implements IObserver {
	update(subject: ISubject): void {
		console.log(col.green('Notification received'));
		console.log(subject);
	}
}

class LeadService implements IObserver {
	update(subject: ISubject): void {
		console.log(col.cyan('Lead Notification received'));
		console.log(subject);
	}
}

const subject = new NewLead();
subject.state = new Lead('John', '555');
const s1 = new NotificationService();
const s2 = new LeadService();

subject.attach(s1);
subject.attach(s2);
subject.notify();
subject.detach(s2);
subject.notify();
