// const sum = function (a: number, b: number): number {
//   return a + b;
// };
// let arr: Array<number> = [1, 2, 3];
// arr = [1, 2, 'a'];
// console.log(sum(5, 4));
//! Boolean
var isCool = true;
//! Number
var age = 28;
//! String
var eyeColor = 'brown';
var favoriteQuote = "I'm not old, i'm only ".concat(age);
//! Array
var pets = ['cat', 'dog', 'pig'];
var pets2 = ['lion', 'dragon', 'lizard'];
//! Object
var wizard = {
    a: 'John'
};
//! Null and undefined
var meh = undefined;
var noo = null;
//! Tuple
var basket;
basket = ['basketball', 5];
// basket = [5, 'basketball'];
//! Enum
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
// let sizeName: string = Size[2];
var sizeName = Size.Small;
//! Any ----> Shoudn't use
var whatever = 'aghhhhhhhhh noooo!!!!';
whatever = 5;
whatever = null;
whatever = undefined;
whatever = basket;
//! Void
var sing = function () {
    console.log('lalalallala');
    // return 5;
};
//! Never (no return and no reachable endpoint)
var error = function () {
    throw Error('ooops');
    // return 'hello';
};
