// Question 58:
// Average Score Calculator: Write a simple program that can take lots of scores and find their average.

let avgScore =(...scores:number[]) =>{
    let answer = scores.reduce((prev, curr) => (prev + curr) / scores.length);
    return answer;
}

console.log(avgScore(300,410,150,270));


// Question 59:
//  Add a Special Number: Make a program that creates custom adders. These adders can add a specific number to any other number you give them later.

let makeAdders = (valToAdd: number) => {
    return (num: number) => num + valToAdd;
}

let fiveAdder= makeAdders(5);

console.log(fiveAdder(18));


// Question 60:
// Self-Running User Profile: Create a quick, self-setup profile for a user that can tell you the user's name and age.

let userProfile = ( () => {
    let name = "Abdullah";
    let age = 17;
    return {
        displayProfile(){
            console.log(`Name: ${name}, Age: ${age}`);
        }
    }
})();

userProfile.displayProfile();
