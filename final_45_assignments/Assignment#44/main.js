// Assignment # 43
// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich
var makeSandwich = function () {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwich is prepared by items: ".concat(items, ","));
};
makeSandwich("vegeis", "cheese");
makeSandwich("cheese", "chicken", "mayonies");
makeSandwich("bacon", "lettuce", "tomatoes", "pickles");
