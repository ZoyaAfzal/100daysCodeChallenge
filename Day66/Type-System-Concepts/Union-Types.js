//Union Types :
let myVar;
myVar = "Hello"; // Valid assignment
console.log(myVar);
myVar = 42; // Valid assignment
console.log(myVar);
export {};
// Uncommenting the line below would result in a TypeScript error
// myVar = true;  // Error: Type 'boolean' is not assignable to type 'string | number'.
