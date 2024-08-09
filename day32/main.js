// Question 94: 
// Use the .map() method to create a new array that contains the length of each word from an array of words.
var words = ["Hello", "Javascript", "Python", "World", "Windows"];
var lengths = words.map(function (word) {
    return word.length;
});
console.log(lengths);
// Question 95: 
// Write a function that uses the .filter() method to return an array of numbers greater than 10.
var numbers = [5, 10, 15, 20, 25, 30];
var filterGreaterThanTen = function (numbers) {
    return numbers.filter(function (number) { return number > 10; });
};
console.log(filterGreaterThanTen(numbers));
// Question 96: 
// Demonstrate how to use the .reduce() method to calculate the sum of all numbers in an array.
var calcSum = function (numbers) {
    return numbers.reduce(function (prev, curr) { return prev + curr; });
};
var Numbers = [1, 2, 3, 4, 5, 6];
console.log("sum: ", calcSum(Numbers));
