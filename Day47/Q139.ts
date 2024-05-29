//Question 139: List three reserved words in JavaScript and create a valid use case for each.

//Reserved word: 'let' -used to declare a blockscoped local variable
let name = "Eric";
console.log(name);

//Reserved word 'if' -used to execute a block of code if specified condition is true
if (name === "Eric") {
    console.log(`Hello ${name}, how are you doing?`);
}

//Reserved word 'return' -used to exit a function and return a value from function
function greet(name: string): string {
    return `Hello ${name}, have a good day!`
};
console.log(greet("Eric")); 

//Demonstrated valid use cases for the reserved words 'let', 'if', and 'return'.

