interface IPaymentAPI {
	getPaymentDetails(id: number): IPaymentDetail | undefined;
}

interface IPaymentDetail {
	id: number;
	sum: number;
}

class PaymentAPI implements IPaymentAPI {
	private data = [{ id: 1, sum: 10000 }];

	getPaymentDetails(id: number): IPaymentDetail | undefined {
		return this.data.find(d => d.id === id);
	}
}

class PaymentAccessProxy implements IPaymentAPI {
	constructor(private api: PaymentAPI, private userId: number) {}

	getPaymentDetails(id: number): IPaymentDetail | undefined {
		if (this.userId === 1) {
			return this.api.getPaymentDetails(id);
		}

		console.log('Invalid user tried to access payment details!');
		return undefined;
	}
}

const proxyCorrect = new PaymentAccessProxy(new PaymentAPI(), 1);
console.log(proxyCorrect.getPaymentDetails(1));

const proxyInvalid = new PaymentAccessProxy(new PaymentAPI(), 2);
console.log(proxyInvalid.getPaymentDetails(1));
