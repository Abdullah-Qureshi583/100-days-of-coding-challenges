// Question 58:
// Average Score Calculator: Write a simple program that can take lots of scores and find their average.
var avgScore = function () {
    var scores = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        scores[_i] = arguments[_i];
    }
    var answer = scores.reduce(function (prev, curr) { return (prev + curr) / scores.length; });
    return answer;
};
console.log(avgScore(300, 410, 150, 270));
// Question 59:
//  Add a Special Number: Make a program that creates custom adders. These adders can add a specific number to any other number you give them later.
var makeAdders = function (valToAdd) {
    return function (num) { return num + valToAdd; };
};
var fiveAdder = makeAdders(5);
console.log(fiveAdder(18));
// Question 60:
// Self-Running User Profile: Create a quick, self-setup profile for a user that can tell you the user's name and age.
var userProfile = (function () {
    var name = "Abdullah";
    var age = 17;
    return {
        displayProfile: function () {
            console.log("Name: ".concat(name, ", Age: ").concat(age));
        }
    };
})();
userProfile.displayProfile();
