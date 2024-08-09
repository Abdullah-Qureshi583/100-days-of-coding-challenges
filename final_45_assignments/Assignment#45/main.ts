// Assignment # 45

let makingCar = (
    manufacturer : string,
    model : string,
    ...options : [string, string | number | boolean][]
) => {
    let car = {
        manufacturer,
        model
    };
    options.forEach(([key,value]) => {
            car[key] = value ;
        })
    return car;
}

console.log(makingCar("Honda","Civic",["color", "black"],["year", 2020]));
console.log(makingCar("Toyota", "Corolla", ["color", "green"], ["year", 2020]));
console.log(makingCar("Ford", "Fiesta", ["color", "blue"], ["sunroof", true]));