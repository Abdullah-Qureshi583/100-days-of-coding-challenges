// Question 52: 
// Make a Smartphone Object: Create a simple way to keep track of a smartphone's details. Include its brand, model, and other key features like how much storage it has, the size of its screen, and how long its battery lasts.

let smartPhone = {
    brand: "Samsung",
    model: "Galaxy S21 Ultra",
    species:{
        storage: "128GB",
        screenSize: "6.7-inch",
        batteryLife: "10 hours"
    }
}
console.log(smartPhone);

// Question 53: 
// Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what a computer programmer knows, like coding languages, tools, and software frameworks. Find a way to get three specific skills from this list and show them.

// A list showing a programmer's skills in detail
let developerSkills = {
    languages: ["JavaScript", "TypeScript", "Python"],
    frameworks: ["React", "Angular", "Vue"],
    tools: ["Git", "Webpack", "Docker"]
};

// Getting specific skills from the list
let { languages, frameworks, tools } = developerSkills;

// Showing a skill from each category
console.log(`Language: ${languages[0]},\nFramework: ${frameworks[0]},\nTool: ${tools[0]}`);

// Question 54:
// Making Flexible Object Keys: Learn how to set up a list where you can change the name of each section based on what you need at that moment, like adjusting labels based on user choices.

let DynamicKeyObject = (key: string, value: string)=> {
    let dynamicObject:any = {};
    // Setting up a section in the list with a changeable name
    dynamicObject[key] = value;
    return dynamicObject;
}

let userObj = DynamicKeyObject("theme", "dark");

// Showing the user's object
console.log(userObj);