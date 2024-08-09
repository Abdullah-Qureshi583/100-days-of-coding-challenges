// Assignment # 32
// create a program that ensure that everyone has a unique username.
var current_users = ["Abdullah", "Adil", "Qureshi", "Salman", "Asad"];
var new_users = ["Abdullah", "Nair", "Saleem", "Arif", "Salman"];
for (var i = 0; i < current_users.length && i < new_users.length; i++) {
    if (new_users[i].toLowerCase() === current_users[i].toLowerCase()) {
        console.log("\"".concat(new_users[i].toLowerCase(), "\" is not available, You will need to enter a new username"));
    }
    else {
        console.log("\"".concat(new_users[i].toLowerCase(), "\" is available"));
    }
}
