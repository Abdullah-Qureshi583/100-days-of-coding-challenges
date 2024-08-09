"use strict";
// Question 103: 
// Write a function that returns a random boolean value, true or false.
Object.defineProperty(exports, "__esModule", { value: true });
function getRandomBoolean() {
    return Math.random() > 0.5;
}
console.log(getRandomBoolean()); // Outputs either true or false randomly
// Question 104: 
// Create a function that generates a random hexadecimal color code.
function getRandomHexColor() {
    const color = '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0');
    return color; // Returns the random color code
}
console.log(getRandomHexColor()); // random hex color code
// Question 105: 
// Simulate a dice roll using JavaScript and return a random integer between 1 and 6.
let rollDince = () => {
    return Math.floor(Math.random() * 6) + 1;
};
console.log(rollDince()); // number b/w 1 to 6
