// Question 79: 
// Creating and Accessing Object Properties: Construct an object representing 
// a car with properties for make, model, and year. Then, show how you can 
// access the model property of the car.

let car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};

console.log(car.model); // Outputs: Corolla


// Question 80:
// Updating Object Properties: Add a property named color to the existing car object, 
// and then update the year property to 2021. Show how to perform these operations.

let Car:{
    make: string,
    model: string,
    year: number,
    [prop: string]: any 
} = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};

Car["color"] = "blue"; // Adds a new property 'color'
Car.year = 2021; // Updates the 'year' property

console.log(Car); // updated


// Question 81: 
// Iterating Over Object Properties: Write a function that takes an object as an 
// argument and logs all of its properties and values.

function logObjectProperties(obj: object) {
    for (let property in obj) {
        console.log(`${property}: ${obj[property]}`);
    }
}

logObjectProperties({ make: "Toyota", model: "Corolla", year: 2021, color: "blue" });