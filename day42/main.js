// Question 124
// Create a function inside an object that returns the objects own name property using the this keyword.
var student = {
    name: "Ali",
    class: "10th",
    age: 17,
    userInfo: function () {
        return "Name: ".concat(this.name, ", Class: ").concat(this.class, ", Age: ").concat(this.age, ".");
    },
};
console.log(student.userInfo()); // Name: Ali, Class: 10th, Age: 17.
// Question 125
// Modify a method in an object to use the this keyword to access another property in the same object.
var rectangle = {
    length: 4,
    width: 5,
    calculateArea: function () {
        return this.length * this.width;
    },
};
console.log(rectangle.calculateArea()); // 20
// Question 126
// Explain how the this keyword changes its value when used inside a nested function within a method.
var myObject = {
    property: "Value",
    outerMethod: function () {
        var _this = this;
        console.log(this.property);
        var innerMethod = function () {
            console.log(_this.property); // log value due to arrow function
        };
        innerMethod();
    },
};
myObject.outerMethod();
