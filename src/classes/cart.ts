class Product {
	constructor(public id: number, public title: string, public price: number) {}
}

class Delivery {
	constructor(public date: Date) {}
}

class HomeDelivery extends Delivery {
	constructor(public date: Date, public address: string) {
		super(date);
	}
}

class ShopDelivery extends Delivery {
	constructor(public shopId: number) {
		super(new Date());
	}
}

type DeliveryOptions = HomeDelivery | ShopDelivery;

class Cart {
	private cart: Product[] = [];
	private deliveryData: DeliveryOptions;

	private cartIsNotEmpty(): boolean {
		return this.cart.length > 0;
	}

	addProduct(product: Product): Product[] {
		this.cart.push(product);

		return this.cart;
	}

	deleteProduct(id: number): Product[] | null {
		this.cart = this.cart.filter(product => product.id !== id);

		if (!this.cart.length) return null;

		return this.cart;
	}

	calculateTotal(): number {
		if (!this.cartIsNotEmpty()) {
			throw new Error('Cart is empty!');
		}

		return this.cart.reduce((acc, prod) => acc + prod.price, 0);
	}

	setDelivery(delivery: DeliveryOptions): void {
		this.deliveryData = delivery;
	}

	checkout() {
		if (!this.cartIsNotEmpty() || !this.deliveryData) {
			throw new Error('Cart is empty or delivery data is missing!');
		}

		return 'shopId' in this.deliveryData
			? `Checked out sussesfully, your package in on its way to our shop #${this.deliveryData.shopId}!`
			: `Checked out sussesfully, your package in on its way to: ${this.deliveryData.address}!`;
	}
}

const cart = new Cart();

cart.addProduct(new Product(1, 'Overwatch', 55));
cart.addProduct(new Product(2, 'Cake', 50));
cart.deleteProduct(1);
cart.setDelivery(new ShopDelivery(5));
cart.checkout();
