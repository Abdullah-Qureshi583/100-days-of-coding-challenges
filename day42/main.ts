// Question 124
// Create a function inside an object that returns the objects own name property using the this keyword.

let student: {
  name: string;
  class: string;
  age: number;
  userInfo: () => void;
} = {
  name: "Ali",
  class: "10th",
  age: 17,
  userInfo() {
    return `Name: ${this.name}, Class: ${this.class}, Age: ${this.age}.`;
  },
};

console.log(student.userInfo()); // Name: Ali, Class: 10th, Age: 17.

// Question 125
// Modify a method in an object to use the this keyword to access another property in the same object.

const rectangle = {
  length: 4,
  width: 5,
  calculateArea() {
    return this.length * this.width;
  },
};

console.log(rectangle.calculateArea()); // 20

// Question 126
// Explain how the this keyword changes its value when used inside a nested function within a method.

const myObject = {
  property: "Value",
  outerMethod() {
    console.log(this.property);

    const innerMethod = () => {
      console.log(this.property); // log value due to arrow function
    };

    innerMethod();
  },
};

myObject.outerMethod();
