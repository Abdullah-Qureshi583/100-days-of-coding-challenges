// Question 145
// Create a function that accepts a callback and invokes it with some arguments.

// This function accepts a callback function and invokes it with given arguments
let executeCallback = (
  callback: (arg1: number, arg2: number) => void,
  arg1: number,
  arg2: number
): void => {
  callback(arg1, arg2);
};

// Example callback function that adds two numbers
const add = (a: number, b: number) => {
  console.log(a + b); // Outputs the sum of a and b
};

executeCallback(add, 5, 3); // Outputs: 8

// Question 146
// Show an example of a callback function used to filter an array of numbers.

// This array of numbers will be filtered
const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Uses .filter() with a callback function to filter
// out numbers greater than 5
const filteredNumbers = (numbers: number[]): number[] => {
  return numbers.filter((number) => number > 5);
};

console.log(filteredNumbers(numbers)); // Outputs: [6, 7, 8, 9, 10]

// Question 147
// Explain how to handle errors in a callback pattern.

function fetchData(
  callback: (error: Error | null, data?: string) => void
): void {
  // Simulating an error condition
  const showError = new Error("Failed to fetch data");
  const showData = "Some data";

  // Simulate fetching data with a chance of error
  if (Math.random() > 0.5) {
    callback(null, showData); // No error, data is fetched successfully
  } else {
    callback(showError); // Passes error to the callback
  }
}

// Using the fetchData function with error handling in the callback
fetchData((error, data) => {
  if (error) {
    console.error(error.message); // Handles the error
  } else {
    console.log(data); // Processes the data
  }
});
