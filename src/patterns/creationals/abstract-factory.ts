abstract class AbstractFactory {
	abstract createChair(): AbstractChair;
	abstract createSofa(): AbstractSofa;
}

abstract class AbstractChair {
	abstract usefulFunctionA(): string;
}
abstract class AbstractSofa {
	abstract usefulFunctionA(): string;
	abstract abc(): string;
}

class FactoryA extends AbstractFactory {
	createChair(): AbstractChair {
		return new Chair();
	}
	createSofa(): AbstractSofa {
		return new Sofa();
	}
}

class Chair extends AbstractChair {
	usefulFunctionA(): string {
		return 'new chair';
	}
}

class Sofa extends AbstractSofa {
	usefulFunctionA(): string {
		return 'new chair';
	}
	abc(): string {
		return 'abc';
	}
}

class FactoryB extends AbstractFactory {
	createChair(): AbstractChair {
		return new ChairB();
	}
	createSofa(): AbstractSofa {
		return new SofaB();
	}
}

class ChairB extends AbstractChair {
	usefulFunctionA(): string {
		return 'new chair';
	}
}

class SofaB extends AbstractSofa {
	usefulFunctionA(): string {
		return 'new chair';
	}
	abc(): string {
		return 'abc';
	}
}

class FactoryC extends AbstractFactory {
	createChair(): AbstractChair {
		return new ChairB();
	}
	createSofa(): AbstractSofa {
		return new SofaB();
	}
}

class ChairC extends AbstractChair {
	usefulFunctionA(): string {
		return 'new chair';
	}
}

class SofaC extends AbstractSofa {
	usefulFunctionA(): string {
		return 'new chair';
	}
	abc(): string {
		return 'abc';
	}
}
