// Question 82: 
// Find the Length of a String: Write a function that takes a string 
// as an argument and returns the number of characters in the string.
var stringLength = function (str) {
    return str.length;
};
console.log(stringLength("abdullah"));
// Question 83: 
// Converting to Upper and Lower Case: Create a function that takes a string, 
// converts it to uppercase, then to lowercase, and logs both.
var convertCase = function (str) {
    var uppercaseStr = str.toUpperCase();
    var lowercaseStr = uppercaseStr.toLowerCase();
    console.log("Uppercase", uppercaseStr);
    console.log("Lowercase", lowercaseStr);
};
convertCase("Hello, World!");
// Question 84: 
// Replacing Text in a String: Write a function that takes a sentence and 
// replaces all instances of the word "JavaScript" with "TypeScript".
var replaceText = function (sentence) {
    var replacedSentence = sentence.replace(/JavaScript/g, "TypeScript");
    return replacedSentence;
};
console.log(replaceText("I love learning JavaScript. JavaScript is the best programming language!"));
