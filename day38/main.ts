// Question 112:
// Create a Map that stores the names of countries as keys and their capitals as values. Add three countries to the Map.

const countries = new Map<string, string>();
countries.set("USA", "Washington D.C."); // Adds USA to the Map
countries.set("France", "Paris"); // Adds France to the Map
countries.set("Japan", "Tokyo"); // Adds Japan to the Map

console.log(countries);

// Question 113: Write a function that checks if a Map contains a key for "Canada" and logs the capital if it exists.

const Countries = new Map<string, string>();
countries.set("USA", "Washington D.C."); // Adds USA to the Map
countries.set("France", "Paris"); // Adds France to the Map
countries.set("Canada", "naopa"); // Adds Japan to the Map

if(countries.has("Canada") ){
    console.log(countries.get("Canada"));
}


// Question 114: 
// Iterate over a Map of student IDs and names, and log each pair to the console.

const students = new Map<number, string>();
students.set(1, "Alice");
students.set(2, "Bob");
students.set(3, "Charlie");

for(let [id, name] of students){
    console.log(`Student ID: ${id}, Name: ${name}`);    
};