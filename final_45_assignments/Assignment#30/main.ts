// Assignment # 30

// Print a greeting to each user after they log in to a website.

let userName = ["Admin", "Amir", "Abdullah", "adeel", "Aliya"];

userName.forEach(name=>{
    if(name == "Admin"){
        console.log(`Hello ${name}, would you like to see a status report?`);
    } else {
        console.log(`Hello ${name}, thank you for logging in again.`);        
    }
});