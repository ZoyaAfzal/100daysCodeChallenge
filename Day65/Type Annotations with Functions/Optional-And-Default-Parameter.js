//OPTIONAL AND DEFAULT PARAMETERS :
// Optional Parameters:
function greetOptional(name, age) {
    if (age !== undefined) {
        console.log(`Hello, ${name}! You are ${age} years old.`);
    }
    else {
        console.log(`Hello, ${name}!`);
    }
}
greetOptional("Alice"); // Output: "Hello, Alice!"
greetOptional("Bob", 30); // Output: "Hello, Bob! You are 30 years old."
// Default Parameters:
function greetDefault(name, age = 25) {
    console.log(`Hello, ${name}! You are ${age} years old.`);
}
greetDefault("Alice"); // Output: "Hello, Alice! You are 25 years old."
greetDefault("Bob", 30); // Output: "Hello, Bob! You are 30 years old."
export {};
