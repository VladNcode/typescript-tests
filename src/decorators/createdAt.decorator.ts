@CreatedAtDeco
class CatDog {
	catName: string;
	dogName: string;
}

function CreatedAtDeco<T extends { new (...args: any[]): {} }>(constructor: T) {
	return class extends constructor {
		createdAt = new Date();
	};
}

type CreatedAt = { createdAt: Date };

const catdog = new CatDog() as CatDog & CreatedAt;

console.log(catdog.createdAt);
