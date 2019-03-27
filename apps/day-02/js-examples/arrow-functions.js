// JavaScript classic function
// function sum(a, b) {
//   return a + b;
// }

// function expression syntax
// var sum = function (a, b) {
//   return a + b;
// };

// Arrow function 1
// var sum = (a, b) => {
//   return a + b;
// };

// Arrow function 2
var sum = (a, b) => a + b;

// Arrow function 3
var double = a => a * 2;

var greet = () => console.log('hello arrow functions');

console.log(sum(10, 20));
console.log(double(10));
greet();