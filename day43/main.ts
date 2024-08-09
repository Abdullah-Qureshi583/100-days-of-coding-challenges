// Question 127
// Convert a traditional function expression to an arrow function.

// Traditional function expression
const traditionalFunction = function (a: number, b: number) {
  return a + b;
};

// Converted to arrow function
const arrowFunction = (a: number, b: number) => a + b;

console.log(arrowFunction(3, 5)); //8

// Question 128
// Create an arrow function that takes multiple parameters and returns the product of all parameters.

const multiplyParameters = (...numbers: number[]) =>
  numbers.reduce((total, number) => total * number, 1);

console.log(multiplyParameters(2, 3, 4)); // Outputs: 24

// Question 129
// Explain how this behaves differently in arrow functions compared to traditional functions.

const traditionalVsArrow = {
  value: "traditionalVsArrow value",
  traditionalFunction: function () {
    console.log("Traditional function:", this.value); // traditionalVsArrow value.
  },

  arrowFunction: () => {
    console.log("Arrow function:", this.value); // undefined bcz this keyword finds global value.
  },
};

traditionalVsArrow.traditionalFunction(); // Logs "traditionalVsArrow value"

traditionalVsArrow.arrowFunction(); // Likely undefined
