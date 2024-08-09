// Question 100: 
// Use the JavaScript Math object to find the square root of 144.
// Finds the square root of 144 using Math.sqrt()
var number = 144;
var squareRoot = Math.sqrt(number);
console.log(squareRoot); // Outputs: 12
// Question 101: 
// Generate a random integer between 1 and 10.
var getRandomInt = function () {
    return Math.floor(Math.random() * 10) + 1;
};
console.log(getRandomInt()); // random integer between 1 and 10
// Question 102: 
// Calculate and log the absolute difference between the number -5 and 5.
var difference = Math.abs(-5 - 5);
console.log(difference); // Outputs: 10
