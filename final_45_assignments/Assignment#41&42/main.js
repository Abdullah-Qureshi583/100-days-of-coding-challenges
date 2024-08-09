// Assignment # 41
// Function which prints the name of each magician in the array.
var magicianNames = ["David Blaine", "Derren Brown", "Harry Houdini", "Doug Henning"];
var showMagicians = function (magicians) {
    magicians.forEach(function (name, i) { return console.log(i + 1, name); });
};
showMagicians(magicianNames);
console.log("============================================");
// Assignment # 42
// Modifies the array of magicians by adding the phrase "the Great" to each magician’s name.
var make_great = function (magicians) {
    if (magicians === void 0) { magicians = magicianNames; }
    for (var i = 0; i < magicianNames.length; i++) {
        magicians[i] += " the Great";
    }
};
make_great();
showMagicians(magicianNames); // to see actually has been modified
var r = [];
magicianNames.forEach(function (name) {
    r.push(name);
});
// console.log(r);
