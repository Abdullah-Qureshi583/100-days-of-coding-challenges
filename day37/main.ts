// Question 109: 
// Write an if statement that logs "Good Morning" if the current time is before 12 PM.

let currentTime = new Date();

if (currentTime.getHours() < 12) {
    console.log("Good Morning");
}


// Question 110: 
// Create a function that assigns a grade (A, B, C, D, F) based on a student's score.

function assignGrade(score: number): string {
    if(score > 100) {
        return "Invalid score"
    } else if (score >= 80) {
        return "A";
    } else if (score >= 70) {
        return "B";
    } else if (score >= 60) {
        return "C";
    } else if (score >= 50) {
        return "D";
    } else{
        return "F";
    }
}
  
console.log(assignGrade(84)); // Outputs: A
console.log(assignGrade(31)); // Outputs: F


// Question 111: 
// Use an if-else-if chain to categorize a person's age group (child, teenager, adult).

let categorizeAgeGroup = (personAge: number): string => {
    if(personAge < 13){
        return "Child";
    }  else if (personAge <= 19) {
        return "Teenager";
    } else {
        return "Adult";
    }
}

console.log(categorizeAgeGroup(10)); // Child
console.log(categorizeAgeGroup(17)); // Teenager
console.log(categorizeAgeGroup(28)); // Adult
