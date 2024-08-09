// Question 148:
// Demonstrate the use of the setTimeout() function to execute code after a delay.
var useSetTimeout = function () {
    setTimeout(function () {
        console.log("Hello, setTimeout!");
    }, 5000);
};
useSetTimeout(); // this will execute after 5 seconds
// Question 149:
// Explain the concept of the event loop in JavaScript with an example.
///Event loop in javascript enable asyncronous execution
// when the code is written it goes to the call stack if the code is not time taken or 
// not use of APIs it executes but when there is use of APIs or setTimeout it waits 
// and call stack does not stops it continues its work and when the apis return data 
// it goes to the callback queue and then return back to callback stack and ececutes
console.log("start"); //executes first
setTimeout(function () {
    console.log("there is setTimeout..."); //executes third
}, 3000);
console.log("end"); //executes second
