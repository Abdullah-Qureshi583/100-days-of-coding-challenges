// Assignment # 41

// Function which prints the name of each magician in the array.

let  magicianNames = ["David Blaine", "Derren Brown", "Harry Houdini", "Doug Henning"]

const showMagicians=(magicians: string[])=>{
    magicians.forEach((name,i) => console.log(i+1,name));
}
showMagicians(magicianNames)

console.log("============================================");

// Assignment # 42

// Modifies the array of magicians by adding the phrase "the Great" to each magician’s name.

const make_great = (magicians: string[]= magicianNames) => {
    for(let i= 0; i < magicianNames.length; i++){
        magicians[i] +=  " the Great"
    }
}
make_great()

showMagicians(magicianNames);  // to see the list actually been modified

////////////////////////////////////////////////////////////////


