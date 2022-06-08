//Если в проекте есть сложное дерево компонент,
//  по которым нам нужно пройтись и выполнить однотипную операцию,
//  то лучше использовать

abstract class DeliveryItem {
	public item: DeliveryItem[] = [];

	add = (item: DeliveryItem): void => {
		this.item.push(item);
	};

	price(): number {
		return this.item.reduce((acc: number, i: DeliveryItem): number => (acc += i.get()), 0);
	}

	abstract get(): number;
}

let stepShop = 0;
class Shop extends DeliveryItem {
	constructor(private fee: number) {
		super();
	}

	get(): number {
		++stepShop;
		return this.price() + this.fee;
	}
}

let stepNewShop = 0;
class NewShop extends DeliveryItem {
	constructor(private fee: number) {
		super();
	}

	get(): number {
		++stepNewShop;
		return this.price() + this.fee;
	}
}

let stepPackage = 0;
class Package extends DeliveryItem {
	get(): number {
		++stepPackage;
		return this.price();
	}
}

let stepProduct = 0;
class Product2 extends DeliveryItem {
	constructor(private productPrice: number) {
		super();
	}
	get(): number {
		++stepProduct;
		return this.productPrice;
	}
}

const pack = new Package(); //1
pack.add(new Product2(1));
pack.add(new Product2(1));

const pack1 = new Package(); //1
pack1.add(new Product2(1));
pack1.add(new Product2(1));
pack1.add(new Product2(1));

const shop = new Shop(1);
const prod = new Product2(1);
shop.add(prod);
shop.add(pack);
shop.add(pack1);

const shop2 = new Shop(1);
shop2.add(prod);
shop2.add(pack);
shop2.add(pack1);

const newShop = new NewShop(1);
newShop.add(shop);
newShop.add(shop2);

console.log(newShop.get() + 2);

console.log('stepNewShopt :', stepNewShop);
console.log('stepShop    :', stepShop);
console.log('stepPackage :', stepPackage);
console.log('stepProduct :', stepProduct);
