// Assignment # 39
// City Names: Write a function called city_country() that takes in the name of a city and its country.
var city_country = function (city, country) {
    return "\"".concat(city, ", ").concat(country, "\"");
};
console.log(city_country("Karachi", "Pakistan"));
console.log(city_country("Tokyo", "Japan"));
console.log(city_country("Paris", "France"));
