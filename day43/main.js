// Question 127
// Convert a traditional function expression to an arrow function.
var _this = this;
// Traditional function expression
var traditionalFunction = function (a, b) {
    return a + b;
};
// Converted to arrow function
var arrowFunction = function (a, b) { return a + b; };
console.log(arrowFunction(3, 5)); //8
// Question 128
// Create an arrow function that takes multiple parameters and returns the product of all parameters.
var multiplyParameters = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (total, number) { return total * number; }, 1);
};
console.log(multiplyParameters(2, 3, 4)); // Outputs: 24
// Question 129
// Explain how this behaves differently in arrow functions compared to traditional functions.
var traditionalVsArrow = {
    value: "traditionalVsArrow value",
    traditionalFunction: function () {
        console.log("Traditional function:", this.value); // traditionalVsArrow value.
    },
    arrowFunction: function () {
        console.log("Arrow function:", _this.value); // undefined bcz this keyword finds global value.
    },
};
traditionalVsArrow.traditionalFunction(); // Logs "traditionalVsArrow value"
traditionalVsArrow.arrowFunction(); // Likely undefined
