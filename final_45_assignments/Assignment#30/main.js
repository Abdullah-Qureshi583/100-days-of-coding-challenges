// Assignment # 30
// Print a greeting to each user after they log in to a website.
var userName = ["Admin", "Amir", "Abdullah", "adeel", "Aliya"];
userName.forEach(function (name) {
    if (name == "Admin") {
        console.log("Hello ".concat(name, ", would you like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(name, ", thank you for logging in again."));
    }
});
