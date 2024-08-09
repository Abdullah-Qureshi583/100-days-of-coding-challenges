// Question 106: 
// Determine if a given year is a leap year using comparison operators.
var isLeapYear = function (year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};
console.log(isLeapYear(2020)); // true
console.log(isLeapYear(1800)); // false
// Question 107: 
// Write a condition using logical operators that checks if a number is divisible by both 2 and 3.
var isDivisibleByTwoAndThree = function (num) {
    return (num % 2 === 0 && num % 3 === 0);
};
console.log(isDivisibleByTwoAndThree(6)); //true
console.log(isDivisibleByTwoAndThree(8)); //false
// Question 108: Compare two strings to check if they are identical, ignoring case sensitivity.
var areStringsEqualIgnoreCase = function (str1, str2) {
    return str1.toLowerCase() === str2.toLowerCase();
};
console.log(areStringsEqualIgnoreCase("hello", "HELLO")); //true
console.log(areStringsEqualIgnoreCase("word", "World")); //false
