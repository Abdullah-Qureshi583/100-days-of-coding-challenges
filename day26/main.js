// Question 76:
// Function Parameters and Return Values: Create a function that takes two numbers as 
// parameters, adds them together, and returns the result. Show how you can call this 
// function and log the result.
var adds = function (num1, num2) {
    return num1 + num2;
};
console.log(adds(5, 10)); // Output: 15
// Question 77: 
// Default Parameters: Write a function that greets a user. It should take the user's
// name as a parameter and say hello. If no name is given, it should greet an anonymous user.
var greetUser = function (name) {
    if (name === void 0) { name = "anonymous"; }
    console.log("Hello, ".concat(name, "!"));
};
greetUser("John Doe");
greetUser();
// Question 78: 
// Function Expressions vs. Function Declarations: 
function squareDeclarations(num1) {
    return num1 * num1;
}
;
var squareExpressions = function (number1) {
    return number1 * number1;
};
console.log(squareDeclarations(4)); // 16
console.log(squareExpressions(6)); // 36
