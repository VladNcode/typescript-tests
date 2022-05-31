abstract class Logger2 {
	abstract log(message: string): void;
	printDate(date: Date) {
		console.log(date.toString());
	}
}

class Logger3 extends Logger2 {
	log(message: string): void {
		console.log(message);
	}

	logWithDate(message: string): void {
		this.printDate(new Date());
		this.log(message);
	}
}

const logger = new Logger3();

logger.logWithDate('test');
