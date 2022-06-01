async function a() {
	const a = new Promise<number>((resolve, reject) => {
		resolve(1);
	});
}

const check: Record<string, boolean> = {
	drive: true,
	kpp: false,
	hello: false,
};

function logMiddleware<T>(data: T): T {
	console.log(data);
	return data;
}

const ress = logMiddleware<number>(10);

type SplitHalf = <T>(data: Array<T>) => Array<T>;

const splitHalf: SplitHalf = data => {
	const l = data.length / 2;
	return data.splice(0, l);
};

interface Us<T> {
	age: number;
	data: T;
}

const us: Us<{ a: number }> = {
	age: 50,
	data: { a: 5 },
};

class Vehicle2 {
	run: number;
}

class LCV extends Vehicle2 {
	capacity: number;
}

function kmToMiles<T extends Vehicle2>(vehicle: T): T {
	vehicle.run = vehicle.run / 0.62;
	return vehicle;
}

const vehicle = kmToMiles(new Vehicle2());
const lcv = kmToMiles(new LCV());
