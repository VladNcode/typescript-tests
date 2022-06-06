enum TransportType {
	Truck = 'Truck',
	Helicopter = 'Helicopter',
	Boat = 'Boat',
	Train = 'Train',
}

abstract class Transport {
	constructor(public type: TransportType, public speed: number) {}

	deliveryTime(dist: number) {
		console.log(dist / this.speed);
		return dist / this.speed;
	}

	abstract gasCapacity(): number;
}

class Truck extends Transport {
	gasCapacity() {
		return 100;
	}
}

class Helicopter extends Transport {
	gasCapacity() {
		return 500;
	}
}

class Boat extends Transport {
	gasCapacity() {
		return 200;
	}
}

class Train extends Transport {
	gasCapacity() {
		return 0;
	}
}

type TransportTypes = Boat | Train | Helicopter | Truck | Transport;

class TransportFactory {
	create(type: TransportType): TransportTypes {
		const transportTypes = {
			[TransportType.Boat]: new Boat(type, 50),
			[TransportType.Helicopter]: new Helicopter(type, 500),
			[TransportType.Truck]: new Truck(type, 100),
			[TransportType.Train]: new Train(type, 200),
		};

		return transportTypes[type];
	}
}

const factory = new TransportFactory();

const heli = factory.create(TransportType.Helicopter);

heli.deliveryTime(250);
console.log(heli.gasCapacity());
