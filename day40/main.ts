// Question 118: 
// Write a loop that logs numbers from 1 to 10 to the console.

for(let i = 1; i <= 10; i++){
    console.log(i);
}


// Question 119: 
// Create a while loop that logs "Hello, World!" 5 times.

let looptimes: number = 1;
while(looptimes <= 5){
    console.log(looptimes,"Hello, World!");
    looptimes++;
}


// Question 120: 
// Use a for...of loop to iterate through an array of your favorite movies and log each one.

let favoriteMovies: string[] = ["Inception", "The Matrix", "Pulp Fiction", "Interstellar"];

for(let movie of favoriteMovies){
    console.log(movie);
    
}