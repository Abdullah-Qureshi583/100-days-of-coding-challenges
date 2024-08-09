// Question 97: 
// Write a function that returns the current date in the format "DD-MM-YYYY".
let currentDate = () => {
    let date = new Date();
    let day = String(date.getDate()).padStart(2, '0'); // 08
    let month = String(date.getMonth() + 1).padStart(2, '0'); // 07
    let year = date.getFullYear();
    return `${day}-${month}-${year}`
}
  
console.log(currentDate());  // Output: 08-07-2023
  

// Question 98: 
//   Create a JavaScript snippet that calculates and logs how many days are left until New Year.
    
function daysUntilNewYear(): number {
    const today = new Date();
    const newYear = new Date(today.getFullYear() + 1, 0, 1); // January 1st of next year month is 0 indexed
    const diff = newYear.getTime() - today.getTime(); // Difference in milliseconds
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24)); // Converts to days
    return days;
}
  
console.log(daysUntilNewYear() + " days until New Year.");
  
  
// Question 99: 
// Generate a date object representing your next birthday and log it to the console.
  
function getNextBirthday(month: number, day: number) : Date{
    const today = new Date();   
    let year = today.getFullYear();
    const birthday = new Date(year, month - 1, day); // Months are 0-indexed
    if (birthday < today) {
        // If the birthday this year has already passed, use next year's date
        birthday.setFullYear(year + 1);
    }
    return birthday;
}
  
let nextBirthday = getNextBirthday(2, 21); // Example: february 21st
console.log("Next birthday on:", nextBirthday.toLocaleDateString()); 