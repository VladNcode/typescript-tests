// const sum = function (a: number, b: number): number {
//   return a + b;
// };

// let arr: Array<number> = [1, 2, 3];

// arr = [1, 2, 'a'];

// console.log(sum(5, 4));

//! Boolean
let isCool: boolean = true;

//! Number
let age: number = 28;

//! String
let eyeColor: string = 'brown';
let favoriteQuote: string = `I'm not old, i'm only ${age}`;

//! Array
let pets: string[] = ['cat', 'dog', 'pig'];
let pets2: Array<string> = ['lion', 'dragon', 'lizard'];

//! Object
let wizard: object = {
  a: 'John',
};

//! Null and undefined
let meh: undefined = undefined;
let noo: null = null;

//! Tuple
let basket: [string, number];
basket = ['basketball', 5];
// basket = [5, 'basketball'];

//! Enum
enum Size {
  Small = 1,
  Medium = 2,
  Large = 3,
}
// let sizeName: string = Size[2];
let sizeName: number = Size.Small;

//! Any ----> Shoudn't use
let whatever: any = 'aghhhhhhhhh noooo!!!!';
whatever = 5;
whatever = null;
whatever = undefined;
whatever = basket;

//! Void
let sing = (): void => {
  console.log('lalalallala');
  // return 5;
};

//! Never (no return and no reachable endpoint)
let error = (): never => {
  throw Error('ooops');
  // return 'hello';
};

//! Interface
interface RobotArmy {
  count: number;
  type: string;
  magic?: string;
}

let fightRobotArmy = (robots: RobotArmy) => {
  console.log('FIGHT');
};

fightRobotArmy({ count: 1, type: 'dragon' });

let fightRobotArmy2 = (robots: { count: number; type: string; magic: string }) => {
  console.log('FIGHT');
};

//! Type Assertion
interface CatArmy {
  count: number;
  type: string;
  magic: string;
}

let dog = {} as CatArmy;
dog.count;

//! Function
let fightRobotArmy3 = (robots: RobotArmy): void => {
  console.log('FIGHT');
};

let fightRobotArmy4 = (robots: { count: number; type: string; magic: string }): number => {
  console.log('FIGHT');
  return 5;
};

//! Classes
class Animal {
  // private sing: string = 'lallalala';
  public sing: string = 'lallalala';
  constructor(sound: string) {
    this.sing = sound;
  }

  greet(): string {
    return `Hello, ${this.sing}!`;
  }
}

let lion = new Animal('RAAAAWWWWR');
lion.sing;

//! Union
let confused: string | number | boolean = 'hello';
confused = 5;
confused = true;
// confused = null;

//! Automatic
let x = 4;
// x = '5';
