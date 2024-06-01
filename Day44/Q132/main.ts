//Question 132: Discuss the difference between default and named exports in JavaScript modules.

//Importing name exports:
import { multiply, divide} from "./math";
console.log(multiply(2, 6));
console.log(divide(15, 5));


//Importing a default export:
import Calculator from "./calculator";
const addition = new Calculator(4, 4);
console.log(addition.add());



// This code illustrates the syntax and usage differences between default and named exports.