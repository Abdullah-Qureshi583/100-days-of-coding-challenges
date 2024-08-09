// Assignment # 43
var magicians = ["David Blaine", "Derren Brown", "Harry Houdini", "Doug Henning"];
var makeGreet = function (magicians) {
    var greetMagicians = [];
    magicians.forEach(function (magician) {
        greetMagicians.push("".concat(magician, " the Great"));
    });
    // console.log(greetMagicians)
    return greetMagicians;
};
console.log(makeGreet(magicians));
;
