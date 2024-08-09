// Question 67:
// Arithmetic with Mixed Types: Write a function that takes two parameters: a number 
// and a string that represents a number (e.g., `5`). Return their sum as a number.
var sumNumAndStr = function (a, b) {
    return a + Number(b);
};
console.log(sumNumAndStr(2, "4")); // 6
// Question 68:
// Multiplying Decimals:Create a function that accepts two decimal numbers and returns
//  their product. Round the result to two decimal places.
var multiplyDecimals = function (num1, num2) {
    return Math.round(num1 * num2 * 100) / 100;
};
console.log(multiplyDecimals(9.67, 6.456)); // 62.43
// Question 69:
// Dividing and Finding the Remainder: Write a function that divides two numbers 
// and returns both the quotient and the remainder. Use an object to return both values.
// This function divides two numbers and finds the quotient and remainder
function divideAndRemainder(dividend, divisor) {
    var quotient = Math.floor(dividend / divisor);
    var remainder = dividend % divisor;
    return { quotient: quotient, remainder: remainder };
}
console.log(divideAndRemainder(10, 3)); //{ quotient: 3, remainder: 1 }
