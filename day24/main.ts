// Question 70:
// Understanding let in Loops: Write a function that uses a loop with the let keyword
// to print numbers from 1 to 5. Explain how the let keyword affects the visibility of the loop variable.

function printNumbersWithLet() {
    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }
}

printNumbersWithLet();


// Question 71:
// Compare let and const: Create two examples where let allows reassignment but 
// const does not. Try to reassign a const-declared variable and catch the error.

let age = 16;
age = 17;

const fullName = "Abdullah Qureshi";

try{
    // fullName = "Abdullah"; //cause error
}catch(err){
    console.log("Cannot reassign a const variable");
    
};


// Question 72: 
// Block Scope with let and const: Demonstrate block scope by creating a code block 
// with {} that uses both let and const. Show how variables declared inside the block 
// are not accessible outside of it.

{
    let blockLet = "visible inside the block";
    const blockConst = "also only inside the block";
    console.log(blockLet); // Works fine here
    console.log(blockConst); // Also works fine here
}

try {
    // console.log(blockLet); // cause error
} catch (error) {
    console.log("`blockLet` is not accessible outside the block.");
}

try {
    // console.log(blockConst); // cause error
} catch (error) {
    console.log("`blockConst` is not accessible outside the block.");
}