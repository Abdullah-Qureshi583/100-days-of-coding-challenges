// Storing names in an Array.

let names : string[] = ["Abdullah", "Arif", "Adil", "Anas", "Ali", "Zahid"];

// Add a message with name and use for loop to print the one by one.

for(let i = 0; i < names.length; i++) {
    console.log(`${i+1}. Hello ${names[i]}! How are you taday?` );
}