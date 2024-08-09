// Question 91: 
// Create an array of your three favorite fruits and add a new fruit to the end of the array.

let favFruits : string[] = ["Mango", "Banana", "Oranges"];
favFruits.push("Apple"); // added apple to the end

console.log(favFruits);


// Question 92: 
// Write a function to remove the last element from an array and return the removed element.

function removeLastElement<E>  (arr: E[]): E | undefined {
    return arr.pop();
}

const fruits: string[] = ["Apple", "Banana", "Lichi", "Cherry"];

console.log(removeLastElement<string>(fruits)); // Cherry
console.log(fruits); // ['Apple', 'Banana']


// Question 93: 
// Find the index of "Banana" in an array of fruits and replace it with "Mango".

let replaceBananaWithMango = (fruits: string[]) => {
    const bananaIndex = fruits.indexOf('Banana');
    if(bananaIndex !== -1) {
        fruits[bananaIndex] = 'Mango';
    }
}
replaceBananaWithMango(fruits); // replacing
console.log(fruits); // updated