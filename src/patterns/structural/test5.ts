abstract class TTest {
	num: number;
	protected constructor(num: number) {
		this.num = num;
	}
}

class TTest2 extends TTest {
	constructor() {
		super(6);
	}

	abc(num: number): void;
	abc(str: string): void;
	abc(numOrStr: number | string) {
		console.log(this.num);
	}
}

console.log(new TTest2().num);
