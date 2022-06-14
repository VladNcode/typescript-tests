abstract class DeliveryItem {
	items: DeliveryItem[] = [];

	addItem(item: DeliveryItem): void {
		this.items.push(item);
		// console.log('this items ->', this.items);
	}

	getSubTotal() {
		return this.items.reduce((acc: number, item: DeliveryItem) => (acc += item.getPrice()), 0);
	}

	abstract getPrice(): number;
}

class DeliveryShop extends DeliveryItem {
	getPrice(): number {
		this.items.forEach(item => {
			if (item instanceof Produc) item.price += 77;
		});

		return this.getSubTotal();
	}
}

class Package extends DeliveryItem {
	constructor(private deliveryFee: number) {
		super();
	}

	getPrice(): number {
		return this.getSubTotal() + this.deliveryFee;
	}
}

class Produc extends DeliveryItem {
	constructor(public price: number) {
		super();
	}

	getPrice(): number {
		return this.price;
	}
}

const shop = new DeliveryShop();
shop.addItem(new Produc(1000));

const pack1 = new Package(11);
pack1.addItem(new Produc(200));
// pack1.addItem(new Produc(500));

// const p2 = new Package();
// p2.addItem(new Produc(777));
// p2.addItem(new Produc(999));

// pack1.addItem(p2);

shop.addItem(pack1);

const pack2 = new Package(11);
pack2.addItem(new Produc(300));
shop.addItem(pack2);

console.log(shop.getPrice());
