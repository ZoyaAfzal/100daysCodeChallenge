//Nullable Types :
let username = "Glicher"; // The variable can hold a string or null
let ageEx = null; // The variable can hold a number or null
console.log(ageEx); //null
function greetUser(username) {
    if (username === null) {
        console.log("Hello, Guest!");
    }
    else {
        console.log(`Hello, ${username}!`);
    }
}
greetUser("Glitcher"); // Output: Hello, Glitcher!
greetUser(null); // Output: Hello, Guest!
export {};
