// Question 133
//   Write a JavaScript object and convert it into a JSON string.
// JavaScript object
var person = {
    name: "Ali",
    age: 17,
    city: "Karachi",
};
// convert the obj into a JSON string
var jsonString = JSON.stringify(person);
console.log(jsonString); // Outputs: {"name":"Alice","age":30,"city":"Wonderland"}
// Question 134
// Take a JSON string and parse it into a JavaScript object.
var JSONSTRING = "{\"name\": \"Ali\", \"age\": 17, \"city\": \"Karachi\"}";
var javascriptObj = JSON.parse(JSONSTRING);
console.log(javascriptObj); // {name: "Ali", age: 17, city: "Karachi",}
// Question 135
// Explain how you can format a JSON string with proper indentation for readability
var Person = {
    name: "Alice",
    age: 30,
    city: "Wonderland",
};
// Converts the object into a JSON string with indentation
var json_string = JSON.stringify(Person, null, 2); // 2 mean generate 2 spaces
console.log(json_string);
/* Outputs:
    {
      "name": "Alice",
      "age": 30,
      "city": "Wonderland"
    }
*/ 
