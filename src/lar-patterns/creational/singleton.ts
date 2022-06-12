class MyMap {
	private static instance: MyMap;
	map: Map<number, string> = new Map();

	private constructor() {}

	public static getMap() {
		if (!MyMap.instance) MyMap.instance = new MyMap();
		return MyMap.instance;
	}

	clearMap() {
		this.map = new Map();
	}
}

class Service1 {
	addToMap(key: number, value: string) {
		const myMap = MyMap.getMap();

		myMap.map.set(key, value);
		console.log(`Added key: "${key}", value: "${value}" to the map!`);
	}
}

class Service2 {
	getFromMap(key: number) {
		const myMap = MyMap.getMap();

		const val = myMap.map.get(key);
		console.log(`Recieved value: "${val}" from the map!`);

		myMap.clearMap();
		console.log('Cleaning up the map...');

		const val2 = myMap.map.get(key);
		console.log(`Recieved value: "${val2}" from the map!`);
	}
}

new Service1().addToMap(1, 'Hello from Service1!');
new Service2().getFromMap(1);
