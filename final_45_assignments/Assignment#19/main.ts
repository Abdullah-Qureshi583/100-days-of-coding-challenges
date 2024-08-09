// this question is onwards to assignment # 16
// This is Assignment # 19 :
// Dinner Guests: Working with one of the programs from Exercises 14 through 18, 
// print a message indicating the number of people you are inviting to dinner.

// Storing guest list in an array.

let guestList : string[] = ["Jawad", "Ali", "Arif", "Waqas"]

//Print a message that our new dinner table won’t arrive in time for the dinner, and we have space for only two guests.

console.log("\n*************************************");

console.log(`Unfortunately! Our new dinner table wont arrive in time for the dinner, and we have space for only two guests. `);

console.log("*************************************\n");

// invite two guest to the dinner.

guestList.unshift("Abdullah", "Zahid");

// Removing guest from list else remaining two guest.

while(guestList.length > 2){
    let removeGuest = guestList.pop();
    console.log(`Sorry ${removeGuest} we can't invite you for dinner.`);
}

console.log("\n*************************************");

// inforn to the remaining two guests that they are still invited to dinner.
guestList.forEach(guest => {
    console.log(`Dear ${guest} you are still invited for dinner`);
    
});

console.log("\n*************************************");

// Removing to the remaining two guests from list.

guestList.splice(0, guestList.length);

//Print updated guest list.

console.log(guestList);


