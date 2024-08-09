"use strict";
// Question 85: 
// Finding the Position of a Substring: Write a function that locates the first 
// occurrence of the word "code" within any given string and returns its position.
Object.defineProperty(exports, "__esModule", { value: true });
let findCodePosition = (str) => {
    let codeIndex = str.indexOf("code");
    return codeIndex;
};
console.log(findCodePosition("Learn to code with JavaScript"));
// Question 86: 
// Checking for Text Presence: Create a function that checks if the word "JavaScript" 
// is present in a given string. It should return true if found, otherwise false.
let checkForJavaScript = (str) => {
    return str.includes("JavaScript");
};
console.log(checkForJavaScript("this is to test JavaScript"));
// Question 87: 
// Extracting a Substring: Demonstrate how to extract the first 10 characters from 
// a string.
let extractFirstTenChars = (str) => {
    return str.substring(0, 10);
};
console.log(extractFirstTenChars("Hello javascript world! "));
