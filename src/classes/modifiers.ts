class Vehicle {
	public make: string;
	private price: number;
	protected type: string;

	readonly test = () => {
		console.log('hello');
	};
}

class Car extends Vehicle {
	getType() {
		this.type = 'type';
		console.log(this.type);
	}
}

const t = new Vehicle();
const c = new Car();

c.getType();

// t.test = () => {
// 	console.log('test');
// };

t.test();
