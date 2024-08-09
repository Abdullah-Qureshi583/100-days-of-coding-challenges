// Question 55: 
// Double Numbers in an Array: Make a list of numbers. Then, use a trick to make a new list where each number is twice its original value.
var numbers = [1, 2, 3, 4, 5];
var doubledNumbers = numbers.map(function (number) { return number * 2; });
// Showing the doubled numbers.
console.log(doubledNumbers);
// Question 56: 
// Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.
// A mixed bag of items
var mixedArray = [1, "apple", 2, "banana", true, "carrot"];
// Picks out only the words
var stringsArray = mixedArray.filter(function (item) { return typeof item === "string"; });
// Shows the list of just words
console.log(stringsArray);
// Question 57:
// Find the Average Grade: Given a list of grades, calculate the average grade.
var grades = [90, 85, 95, 80, 92, 65, 100];
var averageGrade = grades.reduce(function (prev, curr) {
    return (prev + curr) / grades.length;
});
console.log(averageGrade);
