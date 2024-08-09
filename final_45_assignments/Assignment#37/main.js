// Assignment # 37
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with
//  a message that reads I love TypeScript. Make a large shirt and a medium shirt with the 
//  default message, and a shirt of any size with a different message.
var makeShirt = function (size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love Typescript"; }
    console.log("Making a ".concat(size, " tShirt with the message \"").concat(message, "\" printed on it."));
};
makeShirt(); //default size and message
makeShirt("large"); //large size and default message
makeShirt("medium"); //medium size and default message
makeShirt("small", "I am making a function in typescript"); // custom message and size
