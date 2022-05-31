class Payment3 {
	private date: Date = new Date();

	getDate(this: Payment3, a: number, b?: string): Date {
		return this.date;
	}

	getDateArrow = () => {
		return this.date;
	};
}

const p = new Payment3();

const user6 = {
	id: 1,
	paymentDate: p.getDate.bind(p),
	paymentDateArrow: p.getDateArrow,
};

// console.log(p.getDate(1));
// console.log(user6.paymentDate(1));
// console.log(user6.paymentDateArrow());

class Payment3Persistent extends Payment3 {
	save() {
		return this.getDateArrow();
	}
}

console.log(new Payment3Persistent().save());
