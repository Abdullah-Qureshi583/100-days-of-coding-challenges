// this question is onwards to assignment # 16
// This is Assignment # 17

// Storing guest list in an array.
let GuestList : string[] = ["Jawad", "Ali", "Arif", "Waqas"]

//Print a message that our new dinner table won’t arrive in time for the dinner, and we have space for only two guests.

console.log("\n*************************************");

console.log(`Unfortunately! Our new dinner table wont arrive in time for the dinner, and we have space for only two guests. `);

console.log("*************************************\n");

// invite two guest to the dinner.

GuestList.unshift("Abdullah", "Zahid");

// Removing guest from list else remaining two guest.

while(GuestList.length > 2){
    let removeGuest = GuestList.pop();
    console.log(`Sorry ${removeGuest} we can't invite you for dinner.`);
}

console.log("\n*************************************");

// inforn to the remaining two guests that they are still invited to dinner.
GuestList.forEach(guest => {
    console.log(`Dear ${guest} you are still invited for dinner`);
    
});

console.log("\n*************************************");

// Removing to the remaining two guests from list.

GuestList.splice(0, GuestList.length);

//Print updated guest list.

console.log(GuestList);


// console.log(GuestList);



