// Assignment # 32

// create a program that ensure that everyone has a unique username.

let current_users : string[] = ["Abdullah", "Adil", "Qureshi", "Salman", "Asad"];

let new_users : string[] = ["Abdullah", "Nair","Saleem", "Arif", "Salman"];

for(let i = 0; i < current_users.length && i< new_users.length; i++){

    if(new_users[i].toLowerCase() === current_users[i].toLowerCase()){
        console.log(`"${new_users[i].toLowerCase()}" is not available, You will need to enter a new username`);
    }

    else{
        console.log(`"${new_users[i].toLowerCase()}" is available`);
    }
}