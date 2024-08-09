"use strict";
//Storing a person name in a variabe
let personName = "Abdullah ";
//Adding line scape character in person name.
personName = "\n\t Abdullah \t ";
//Printing the message.
console.log(`Person Name with White space:${personName}`);
// adding stripped character to person name
let strippedName = personName.trim();
//Printing the message without whitespace.
console.log(`Stripped name: ${strippedName}`);
