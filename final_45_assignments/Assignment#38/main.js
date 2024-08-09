// Assignment # 38
// ities: Write a function called describe_city() that accepts the name of a city and its country.
var describe_city = function (city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(city, " is in ").concat(country));
};
describe_city("Karachi"); //1.
describe_city("Multan"); //2
describe_city("Makka", "Saudi"); //3
