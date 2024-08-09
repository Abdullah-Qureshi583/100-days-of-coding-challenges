// Assignment # 21
// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

// Making interface of object
interface Object{
    product: string;
    discription: string;
    health: number;
}

// storing items in ob=bjct
let items: Object={
    product: "laptop",
    discription: "This is a laptop",
    health: 96,
} 

console.log(items);
