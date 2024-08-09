// Question 115: 
// Use a switch statement to log the days of the week based on a number (1-7).

let dayOfWeek = (day: number):void => {
    switch(day){
        case 1:
            console.log("Sunday");
            break;
        case 2:
            console.log("Monday");
            break;
        case 3:
            console.log("Tuesday");
            break;
        case 4:
            console.log("Wednesday");
            break;
        case 5:
            console.log("Thursday");
            break;
        case 6:
            console.log("Friday");
            break;
        case 7:
            console.log("Saturday");
            break;
        default:
            console.log("Invalid day number");
    }
}

dayOfWeek(1); // Output: Sunday


// Question 116: 
// Create a switch case that matches several cases to the same code block, representing seasons.

let logSeason = (month: number): void => {
    switch(month){
        case 3:
        case 4:
        case 5:
            console.log("Spring");
            break;
        case 6:
        case 7:
        case 8:
            console.log("Summer");
            break;
        case 9:
        case 10:
        case 11:
            console.log("Autumn");
            break;
        case 12:
        case 1:
        case 2:
            console.log("Winter");
            break;
        default:
            console.log("Invalid month number");
    }
}

logSeason(4); // Output: Spring


// Question 117: 
// Implement a switch statement that evaluates an expression and uses the default case if none of the cases match.

let evaluateExpression = (expression: string): void => {
    switch(expression){
        case "true":
            console.log("Expression is true");
            break;
        case "false":
            console.log("Expression is false");
            break;
        default:
            console.log("Expression is neither true nor false");
    }
}

evaluateExpression("Ok"); // Output: Uses Default