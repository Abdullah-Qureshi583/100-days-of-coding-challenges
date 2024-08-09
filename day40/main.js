// Question 118: 
// Write a loop that logs numbers from 1 to 10 to the console.
for (var i = 1; i <= 10; i++) {
    console.log(i);
}
// Question 119: 
// Create a while loop that logs "Hello, World!" 5 times.
var looptimes = 1;
while (looptimes <= 5) {
    console.log(looptimes, "Hello, World!");
    looptimes++;
}
// Question 120: 
// Use a for...of loop to iterate through an array of your favorite movies and log each one.
var favoriteMovies = ["Inception", "The Matrix", "Pulp Fiction", "Interstellar"];
for (var _i = 0, favoriteMovies_1 = favoriteMovies; _i < favoriteMovies_1.length; _i++) {
    var movie = favoriteMovies_1[_i];
    console.log(movie);
}
