type PaymentStatus = 'new' | 'paid';

class Payment {
	id: number;
	status: PaymentStatus = 'new';

	constructor(id: number) {
		this.id = id;
	}

	pay() {
		this.status = 'paid';
	}
}

class PersitedPayment extends Payment {
	databaseId: number;
	payedAt: Date;

	constructor() {
		const id = Math.random();
		super(id);
	}

	override pay(date?: Date) {
		super.pay();

		if (date) {
			this.payedAt = date;
		}
	}

	save() {
		// save to DB
	}
}
