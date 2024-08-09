// Assignment # 37

// Large Shirts: Modify the make_shirt() function so that shirts are large by default with
//  a message that reads I love TypeScript. Make a large shirt and a medium shirt with the 
//  default message, and a shirt of any size with a different message.

const makeShirt = (size: string = "large", message: string = "I love Typescript") => {
    console.log(`Making a ${size} tShirt with the message "${message}" printed on it.`);
}

makeShirt();  //default size and message

makeShirt("large");  //large size and default message

makeShirt("medium");  //medium size and default message

makeShirt("small", "I am making a function in typescript");  // custom message and size