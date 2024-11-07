console.log(null >= 0);

// strict checking

console.log("2" == 2);
console.log("2" === 2);
console.log(2 === 2);

// Primitive

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLogIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id == anotherId);

const bigNumber = 123456789234567n;

console.log(typeof bigNumber);

// Non primitive
// 3 types: Array, Objects, Functions

const heros = ["emily", "samrat"];
let myObj = {
  name: "emily",
  age: 27,
};

const myFunction = function () {
  console.log("hello sunshine");
};

console.log(typeof heros);
console.log(typeof myObj);
console.log(typeof myFunction);
