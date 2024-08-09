// this question is onwards to assignment # 15
// This is Assignment # 16
// Storing guest list in an array.
var guestList = ["Abdullah", "Ali", "Arif"];
//Print a message that we found a bigger dinner table.
console.log("\n*************************************");
console.log("Great News! We found a bigger dinner table ");
console.log("*************************************\n");
// Adding one guest(Zahid) to the biginning of the list by using unshift method.
guestList.unshift("Zahid");
// Adding one guest(Waqas) at the end of the list by using push method.
guestList.push("Waqas");
// Adding one guest(Jawad) to the middle of the list by using splice .
guestList.splice(Math.floor(guestList.length / 2), 0, "Jawad");
// // Printing message to invite all guestList.
guestList.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you are cardially invited to dinner.\n"));
});
