// Question 73:
// Assigning and Updating Variables.
function updateVariable() {
    var number = 10;
    console.log("Initial value:", number); // 10
    number = 20;
    console.log("Updated value:", number); // 20
}
updateVariable();
// Question 74:
// Swapping Variables: Demonstrate how to swap the values of two variables. 
// Start with variables a = 5 and b = 10, then swap their values so that a becomes 
// 10 and b becomes 5.
var swapValues = function () {
    var a = 5;
    var b = 10;
    console.log("Before swapping:", "a =", a, "b =", b);
    var temp = a;
    a = b;
    b = temp;
    console.log("After swapping:", "a =", a, "b =", b);
};
swapValues();
// Question 75:
// Compound Assignment Operators:
var usesCompVariable = function () {
    var x = 2;
    console.log("Initial value:", x);
    x += 2;
    console.log("After addition:", x);
    x -= 2;
    console.log("After subtraction:", x);
    x *= 2;
    console.log("After multiplication:", x);
    x /= 2;
    console.log("After division:", x);
};
usesCompVariable();
