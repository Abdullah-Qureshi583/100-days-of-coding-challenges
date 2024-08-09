// Assignment # 43

// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich

let makeSandwich = (...items: string[]) => {
    console.log(`Sandwich is prepared by items: ${items}.`);   
}

makeSandwich("vegeis", "cheese");
makeSandwich("cheese", "chicken", "mayonies");
makeSandwich("bacon", "lettuce", "tomatoes", "pickles");