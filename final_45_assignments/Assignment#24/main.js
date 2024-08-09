"use strict";
// conditional Tests: Write a series of conditional tests.
Object.defineProperty(exports, "__esModule", { value: true });
// Assignment # 24
//1. Tests for equality and inequality with strings
let str1 = "hello world";
let str2 = "hello world";
console.log(str1 === str2); //true
console.log(str2 !== str2); //false
//2. Tests using the lower case function
let upperCase = "APPLE";
let lowerCase = "apple";
console.log(upperCase.toLowerCase() === lowerCase); //true
console.log(upperCase === lowerCase); //false
console.log(upperCase !== lowerCase); //true
console.log(upperCase === lowerCase.toUpperCase()); //true
//3. Numerical tests involving  
const num1 = 7;
const num2 = 21;
// equality and inequality
console.log(num1 === num2); //false
console.log(num1 !== num2); //true
// greater than and less than
console.log(num1 > num2); //false
console.log(num1 < num2); //true
// greater than or equal to, and less than or equal to
console.log(num1 >= num2); //false
console.log(num1 <= num2); //true
//4. Tests using "and" and "or" operators
const x = 10;
const y = 15;
const z = 20;
console.log(x < y && y < z); //true
console.log(x < y || y > z); //true
console.log(x > y && y < z); //false
console.log(x > y || y < z); //true
console.log(x > z || z > y); //true
//5. Test whether an item is in a array
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr.includes(5)); //true
console.log(arr.indexOf(5) === 4); //true
//6. Test whether an item is not in a array
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(array.includes(11)); //false
console.log(array.indexOf(4) !== -1); //true
