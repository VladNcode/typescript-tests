class MyMap2 {
	private static instance: MyMap2;
	map: Map<number, string> = new Map();

	constructor() {
		if (!MyMap2.instance) MyMap2.instance = this;
		return MyMap2.instance;
	}

	cleanMap() {
		this.map = new Map();
	}
}

class Service11 {
	addToMap(key: number, value: string) {
		const myMap = new MyMap2();
		myMap.map.set(key, value);
		console.log(`Added key: "${key}", value: "${value}" to the map!`);
	}
}

class Service22 {
	getFromMap(key: number) {
		const myMap = new MyMap2();

		const val = myMap.map.get(key);
		console.log(`Recieved value: "${val}" from the map!`);

		myMap.cleanMap();
		console.log('Cleaning up the map...');

		const val2 = myMap.map.get(key);
		console.log(`Recieved value: "${val2}" from the map!`);
	}
}

new Service11().addToMap(1, 'Hello from Service1!');
new Service22().getFromMap(1);
