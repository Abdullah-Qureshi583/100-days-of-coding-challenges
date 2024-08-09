// this question is onwards to assignment # 14
// This is Assignment # 15
// Storing guest list in an array.
var guestList = ["Abdullah", "Ali", "Adeel"];
//Print a message that one guest is not invited.
console.log("\n*************************************");
console.log("Now ".concat(guestList[2], " is not invited to dinner! "));
console.log("*************************************");
// Removing guest from list of guest by using pop method.
guestList.pop();
// Inviting anather guest for dinner by push method.
guestList.push("Arif");
// Printing message to invite all guestList.
guestList.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you are cardially invited to dinner.\n"));
});
