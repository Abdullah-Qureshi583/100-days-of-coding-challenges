"use strict";
// Question 142
// Create a Promise that resolves with `Hello, World!` after 2 seconds.
const helloPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Hello, World!"); // execute after 2 seconds
    }, 2000);
});
// Question 143
// Show how to use the .then() and .catch() methods to handle Promise resolution and rejection.
const conditionalsPromise = new Promise((resolve, reject) => {
    let randomNumber = Math.random();
    if (randomNumber <= 0.5) {
        resolve("Ramdom number is less than 0.5");
    }
    else {
        reject("Random number is greater than 0.5");
    }
});
conditionalsPromise
    .then((result) => {
    console.log(result);
})
    .catch((err) => {
    console.log(err);
});
// Question 144
// Explain the use of the Promise.all() method with an example.
let Promise1 = Promise.resolve(3);
let Promise2 = 42;
const promise3 = new Promise((resolve) => {
    resolve("done 3rd promise");
});
Promise.all([Promise1, Promise2, promise3]).then((values) => {
    console.log(values);
}); // it only runs when all the promises are resolved
