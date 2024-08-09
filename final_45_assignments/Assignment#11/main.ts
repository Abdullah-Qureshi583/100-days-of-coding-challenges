// Storing names in an Array.

let names : string[] = ["Abdullah","Arif","Adil","Anas", "Ali","Zahid"];

// Usiing for loop to print names one by one.

// for(let i = 1; i <= names.length; i++){
//     console.log(i , names[i-1]);
// }

names.forEach(name =>{
    console.log(name); 
});