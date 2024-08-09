// Assignment # 18
// Storing 5 places in an array
var placeToVisit = ["Newyork", "America", "London", "Iran", "Paris"];
// Printing array in its original order
console.log("Original order", placeToVisit);
// Printing array in its alphabetical order
console.log("Alphabetical order", placeToVisit.slice().sort());
// // Printing that array is still in its original order
console.log("Original order : ", placeToVisit);
// // Printing array in reverse alphabatical order
console.log("reverse alphabatical order: ", placeToVisit.slice().sort().reverse());
// // Printing that array is still in its original order
console.log("original order", placeToVisit);
// Changing the order of the list in reverse order
placeToVisit.reverse();
console.log("Changed the order of the list in reverse order", placeToVisit);
// Changing the order of the list again in original order
placeToVisit.reverse();
console.log("Changed the order of the list again in original order", placeToVisit);
//Sorting and printing array in alphabatical order
placeToVisit.sort();
console.log("alphabatical order: ", placeToVisit);
//Sorting and printing array in reverse alphabatical order
placeToVisit.sort().reverse();
console.log("alphabatical order: ", placeToVisit);
console.log("****************************************************************************************");
