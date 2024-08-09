// Question 61:
// Making Enums for Vehicles: Let's create categories for vehicles like cars,
//  trucks, and motorcycles using enums, and show one example.
var Vehicles;
(function (Vehicles) {
    Vehicles[Vehicles["Car"] = 0] = "Car";
    Vehicles[Vehicles["Truck"] = 1] = "Truck";
    Vehicles[Vehicles["Motorcycle"] = 2] = "Motorcycle";
})(Vehicles || (Vehicles = {}));
console.log(Vehicles.Car); //0
// Filling in the blueprint with an example student
var student = {
    name: "Alice",
    age: 22,
    classes: ["Math", "Science", "History"]
};
console.log(student);
// Describing a circle using our Shape type
var circle = {
    kind: "circle",
    radius: 5
};
// Describing a rectangle using our Shape type
var rectangle = {
    kind: "rectangle",
    height: 15,
    width: 10
};
console.log(circle); // circle
console.log(rectangle); // rectangle
