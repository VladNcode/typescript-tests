let strOrNum: string | number;

if (Math.random() > 0.5) {
	strOrNum = 5;
} else {
	strOrNum = 'abc';
}

if (typeof strOrNum === 'string') {
	console.log(strOrNum);
} else {
	console.log(strOrNum);
}

let strOrNum2: typeof strOrNum;

const userr = {
	name: 'John',
	age: 50,
};

type keyOfUser = keyof typeof userr;

enum Direction {
	Up,
	Down,
}

type d = keyof typeof Direction;
