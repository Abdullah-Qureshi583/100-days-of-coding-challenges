// Question 130
// Explain how to export a function from one JavaScript file and import it into another file.

import { sum } from "./function"; // import function from another file

let Sum = sum;
console.log(Sum(3, 4)); // 7

// Question 131
// Create two modules; one that exports a class, and another that imports the class and creates an instance.

import { Person } from "./person";

// use of Person class
let ali = new Person("Ali");

ali.greet(); // Hello, my name is Ali

// Question 132
// Discuss the difference between default and named exports in JavaScript modules.

import Calculator from "./defaultExpport"; // import a default export.

import { num1, num2 } from "./namesExport";

// uses of imports

let myCalculator = new Calculator();

let number1 = num1;
let number2 = num2;
