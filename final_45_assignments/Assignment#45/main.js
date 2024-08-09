// Assignment # 45
var makingCar = function (manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    options.forEach(function (_a) {
        var key = _a[0], value = _a[1];
        car[key] = value;
    });
    return car;
};
console.log(makingCar("Honda", "Civic", ["color", "black"], ["year", 2020]));
console.log(makingCar("Toyota", "Corolla", ["color", "green"], ["year", 2020]));
console.log(makingCar("Ford", "Fiesta", ["color", "blue"], ["sunroof", true]));
