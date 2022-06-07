/**
 * Пример класса, имеющего возможность клонирования. Мы посмотрим как происходит
 * клонирование значений полей разных типов.
 */
class Prototype {
	public primitive: any;
	public component: object;
	public circularReference: ComponentWithBackReference;

	public clone(): this {
		const clone = Object.create(this);

		clone.component = Object.create(this.component);

		// Клонирование объекта, который имеет вложенный объект с обратной
		// ссылкой, требует специального подхода. После завершения клонирования
		// вложенный объект должен указывать на клонированный объект, а не на
		// исходный объект. Для данного случая хорошо подойдёт оператор
		// расширения (spread).
		clone.circularReference = {
			...this.circularReference,
			prototype: { ...this },
		};

		// console.log(Object.getPrototypeOf(clone));

		return clone;
	}
}

class ComponentWithBackReference {
	public prototype;

	constructor(prototype: Prototype) {
		this.prototype = prototype;
	}
}

/**
 * Клиентский код.
 */
function clientCodee() {
	const p1 = new Prototype();
	p1.primitive = 245;
	p1.component = new Date();
	p1.circularReference = new ComponentWithBackReference(p1);

	// console.log(p1);

	const p2 = p1.clone() as Prototype & { name: string };
	// Object.defineProperty(p2, 'name', { value: 'zombie' });

	p2.name = 'zombie';
	// console.log(Object.getPrototypeOf(p2));

	console.log(p2.name);

	const p3 = p2.clone();

	console.log(p3.name);

	// const p4 = p3.clone();

	// p1.primitive = 2222;
	// p2.primitive = 1111;
	// p2.primitive = 555;
	// p4.primitive = p1.primitive;

	// console.log(p1.primitive);
	// console.log(p2.primitive);
	// console.log(p3.primitive);
	// console.log(p4.primitive);

	// console.log(p1.primitive === p2.primitive);
	// if (p1.primitive === p2.primitive) {
	// 	console.dir(p2.primitive);
	// 	console.log('Primitive field values have been carried over to a clone. Yay!');
	// } else {
	// 	console.log('Primitive field values have not been copied. Booo!');
	// }
	// if (p1.component === p2.component) {
	// 	console.log('Simple component has not been cloned. Booo!');
	// } else {
	// 	console.log('Simple component has been cloned. Yay!');
	// }

	// if (p1.circularReference === p2.circularReference) {
	// 	console.log('Component with back reference has not been cloned. Booo!');
	// } else {
	// 	console.log('Component with back reference has been cloned. Yay!');
	// }

	// if (p1.circularReference.prototype === p2.circularReference.prototype) {
	// 	console.log('Component with back reference is linked to original object. Booo!');
	// } else {
	// 	console.log('Component with back reference is linked to the clone. Yay!');
	// }

	// console.log(p2);
}

clientCodee();
