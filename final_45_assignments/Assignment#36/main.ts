// Assignment # 36

// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt

const make_shirt = (size: string, message: string) => {
    console.log(`Making a ${size} t-shirt with the message "${message}" printed on it.`);
}

make_shirt("medium", "Code is Life");