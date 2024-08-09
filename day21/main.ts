// Question 61:
// Making Enums for Vehicles: Let's create categories for vehicles like cars,
//  trucks, and motorcycles using enums, and show one example.

enum Vehicles {
    Car,
    Truck,
    Motorcycle
}

console.log(Vehicles.Car);//0


// Question 62:
// Making a Student Template: Create a blueprint for student information, 
// including their name, age, and the classes they're taking, and then fill in this
//  blueprint with an example student.

//Interface for student
interface StudentTemplate {
    name: string;
    age: number;
    classes: string[];
}

// Filling in the blueprint with an example student
let student: StudentTemplate = {
    name: "Alice",
    age: 22,
    classes: ["Math", "Science", "History"]
};

console.log(student);

// Question 63:
// Shape Shifter: Write a program that can describe either a circle or a rectangle 
// using a special type alias, including properties unique to each shape.

 // Type alias for shapes that could be circles or rectangles
type Shape = {
    kind: "circle" | "rectangle";
    radius?: number; // for circles
    width?: number;  // for rectangles
    height?: number; // for rectangles
};

// Describing a circle using our Shape type
let circle: Shape = {
    kind: "circle",
    radius: 5
};

// Describing a rectangle using our Shape type
let rectangle: Shape = {
    kind: "rectangle",
    height: 15,
    width: 10
}

console.log(circle); // circle
console.log(rectangle); // rectangle

