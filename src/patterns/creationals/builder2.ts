class Carr {
	autoPilot: boolean;
	parktronic: boolean;
	signaling: boolean;
	engine: string;

	constructor() {
		this.autoPilot = false;
		this.parktronic = false;
		this.signaling = false;
	}
}

class CarBuilder {
	car: Carr;
	constructor() {
		this.car = new Carr();
	}

	addAutoPilot(autoPilot: boolean) {
		this.car.autoPilot = autoPilot;
		return this;
	}

	addParktronic(parktronic: boolean) {
		this.car.parktronic = parktronic;
		return this;
	}

	addSignaling(signaling: boolean) {
		this.car.signaling = signaling;
		return this;
	}

	updateEngine(engine: string) {
		this.car.engine = engine;
		return this;
	}

	polniyFarsh(engine: string) {
		this.addAutoPilot(true);
		this.addSignaling(true);
		this.addParktronic(true);
		this.updateEngine(engine);

		return this.car;
	}

	build() {
		return this.car;
	}
}

const car = new CarBuilder().addAutoPilot(true).addParktronic(true).updateEngine('V8').build();
const car1 = new CarBuilder().addAutoPilot(true).addParktronic(false).updateEngine('V9').build();

console.log(car);
console.log(car1);
