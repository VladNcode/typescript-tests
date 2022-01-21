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
