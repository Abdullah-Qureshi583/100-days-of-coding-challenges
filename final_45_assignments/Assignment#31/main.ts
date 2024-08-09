// Assignment # 31

// Onwards to question 30
// Remove all of the usernames from your array, and make sure the correct message is printed.

let username = ["Admin", "Amir", "Abdullah", "adeel", "Aliya"];

// Removing users from the list
while(username.length >= 1){
    username.pop();  
}

// Print if the list is empty
if(username.length === 0){
    console.log("We need to find some users!")
}