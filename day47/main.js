import inquirer from "inquirer";
// Question 139
// List three reserved words in JavaScript and create a valid use case for each.
// 1.let - used to declare a block-scoped local variable
let count = 5;
// 2.if - used to execute a block of code if a specified condition is true
if (count > 0) {
    console.log("Count is greater than 0.");
}
;
// 3. return - used to exit a function and return a value from that function
const add = (a, b) => {
    return a + b;
};
// Question 140
// Explain the error that occurs when trying to use a reserved word as a variable name.
// let let = 17;
// When we try to use a reserved word as a variable name it will throw SyntaxError
// Question 141
// Discuss the significance of the await reserved word in asynchronous JavaScript.
// Example use of the 'await' reserved word 
const Question = await inquirer.prompt({
    name: 'age',
    type: 'number',
    message: 'Please enter your age'
});
console.log(`Your age is ${Question.age}`);
console.log(`The 'await' keyword allows asynchronous, promise-based behavior to be written in a cleaner, more linear fashion.`);
