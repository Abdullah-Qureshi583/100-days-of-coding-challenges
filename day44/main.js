"use strict";
// Question 130
// Explain how to export a function from one JavaScript file and import it into another file.
Object.defineProperty(exports, "__esModule", { value: true });
var function_1 = require("./function"); // import function from another file
var Sum = function_1.sum;
console.log(Sum(3, 4)); // 7
// Question 131
// Create two modules; one that exports a class, and another that imports the class and creates an instance.
var person_1 = require("./person");
// use of Person class
var ali = new person_1.Person("Ali");
ali.greet(); // Hello, my name is Ali
// Question 132
// Discuss the difference between default and named exports in JavaScript modules.
var defaultExpport_1 = require("./defaultExpport"); // import a default export.
var namesExport_1 = require("./namesExport");
// uses of imports
var myCalculator = new defaultExpport_1.default();
var number1 = namesExport_1.num1;
var number2 = namesExport_1.num2;
