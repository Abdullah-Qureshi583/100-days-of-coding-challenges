"use strict";
// Question 121:
// Implement a for loop that counts from 1 to 10 but skips number 5 using the continue statement.
Object.defineProperty(exports, "__esModule", { value: true });
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i);
}
// Question 122:
// Use a while loop to count down from 10 to 1 and breaks the loop when it reaches 5.
let countdown = 10;
while (countdown >= 1) {
    console.log(countdown);
    if (countdown === 5) {
        break;
    }
    countdown--;
}
// Question 123:
// Create a loop that iterates through a string and stops when it finds the first vowel.
let logUntilVowel = (str) => {
    let vowels = "AaEeIiOoUu";
    for (let char of str) {
        if (vowels.includes(char)) {
            console.log("First vowel found: ", char);
            break;
        }
        console.log(char);
    }
};
logUntilVowel("bcdef"); // breaks at e
