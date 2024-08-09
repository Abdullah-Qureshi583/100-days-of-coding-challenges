// Question 94: 
// Use the .map() method to create a new array that contains the length of each word from an array of words.

let words: any[] = ["Hello", "Javascript", "Python", "World", "Windows"];

let lengths = words.map(word =>{
   return word.length;
});

console.log(lengths);


// Question 95: 
// Write a function that uses the .filter() method to return an array of numbers greater than 10.

let numbers: number[] = [5, 10, 15, 20, 25, 30];

let filterGreaterThanTen = (numbers:number[])=>{ 
  return numbers.filter(number => number > 10);
}

console.log(filterGreaterThanTen(numbers));


// Question 96: 
// Demonstrate how to use the .reduce() method to calculate the sum of all numbers in an array.

let calcSum = (numbers:number[]) =>{
  return numbers.reduce((prev,curr) => prev + curr)
}

const Numbers = [1,2,3,4,5,6]

console.log("sum: ",calcSum(Numbers));