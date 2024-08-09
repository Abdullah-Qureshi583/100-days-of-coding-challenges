// Question 145
// Create a function that accepts a callback and invokes it with some arguments.
// This function accepts a callback function and invokes it with given arguments
var executeCallback = function (callback, arg1, arg2) {
    callback(arg1, arg2);
};
// Example callback function that adds two numbers
var add = function (a, b) {
    console.log(a + b); // Outputs the sum of a and b
};
executeCallback(add, 5, 3); // Outputs: 8
// Question 146
// Show an example of a callback function used to filter an array of numbers.
// This array of numbers will be filtered
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Uses .filter() with a callback function to filter
// out numbers greater than 5
var filteredNumbers = function (numbers) {
    return numbers.filter(function (number) { return number > 5; });
};
console.log(filteredNumbers(numbers)); // Outputs: [6, 7, 8, 9, 10]
// Question 147
// Explain how to handle errors in a callback pattern.
function fetchData(callback) {
    // Simulating an error condition
    var showError = new Error("Failed to fetch data");
    var showData = "Some data";
    // Simulate fetching data with a chance of error
    if (Math.random() > 0.5) {
        callback(null, showData); // No error, data is fetched successfully
    }
    else {
        callback(showError); // Passes error to the callback
    }
}
// Using the fetchData function with error handling in the callback
fetchData(function (error, data) {
    if (error) {
        console.error(error.message); // Handles the error
    }
    else {
        console.log(data); // Processes the data
    }
});
