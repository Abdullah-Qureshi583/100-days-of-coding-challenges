// Assignment # 43

let  magicians = ["David Blaine", "Derren Brown", "Harry Houdini", "Doug Henning"]

let makeGreet =(magicians:string[]) => {
    let greetMagicians : string[] = [];
    magicians.forEach(magician =>{
        greetMagicians.push(`${magician} the Great`)
    })
    // console.log(greetMagicians)
    return greetMagicians;
}


console.log(makeGreet(magicians));


