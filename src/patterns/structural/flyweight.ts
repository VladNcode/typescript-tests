class Flyweight {
	constructor(private sharedState: any) {}

	public operation(uniqueState: any): void {
		const s = JSON.stringify(this.sharedState);
		const u = JSON.stringify(uniqueState);
		console.log(`Flyweight: Displaying shared (${s}) and unique (${u}) state.`);
	}
}

class FlyweightFactory2 {
	private flyweights: { [key: string]: Flyweight } = <any>{};

	constructor(initialFlyweights: string[][]) {
		for (const state of initialFlyweights) {
			this.flyweights[this.getKey(state)] = new Flyweight(state);
		}
	}

	private getKey(state: string[]): string {
		return state.join('_');
	}

	public getFlyweight(sharedState: string[]): Flyweight {
		const key = this.getKey(sharedState);

		if (!(key in this.flyweights)) {
			console.log("FlyweightFactory2: Can't find a flyweight, creating new one.");
			this.flyweights[key] = new Flyweight(sharedState);
		} else {
			console.log('FlyweightFactory2: Reusing existing flyweight.');
		}

		return this.flyweights[key];
	}

	public listFlyweights(): void {
		const count = Object.keys(this.flyweights).length;
		console.log(`\nFlyweightFactory2: I have ${count} flyweights:`);
		for (const key in this.flyweights) {
			console.log(key);
		}
	}
}

const factory2 = new FlyweightFactory2([
	['Chevrolet', 'Camaro2018', 'pink'],
	['Mercedes Benz', 'C300', 'black'],
	['Mercedes Benz', 'C500', 'red'],
	['BMW', 'M5', 'red'],
	['BMW', 'X6', 'white'],
	['BMW', 'X1', 'red'],
	// ...
]);

factory2.listFlyweights();

// ...

function addCarToPoliceDatabase(
	ff: FlyweightFactory2,
	plates: string,
	owner: string,
	brand: string,
	model: string,
	color: string,
) {
	console.log('\nClient: Adding a car to database.');
	const flyweight = ff.getFlyweight([brand, model, color]);

	flyweight.operation([plates, owner]);
}

addCarToPoliceDatabase(factory2, 'CL234IR', 'James Doe', 'BMW', 'M5', 'red');

addCarToPoliceDatabase(factory2, 'CL234IR', 'James Doe', 'BMW', 'X1', 'red');

factory2.listFlyweights();

const cache: { [key: string]: number } = { a: 5 };

if (cache['a']) {
	console.log('already exist');
} else {
	cache['a'] = 5;
}
