"use strict";
/*Question 71: Compare let and const: Create two examples where let allows reassignment but const does not. Try to
reassign a const-declared variable and catch the error.*/
//Using 'let' for a variable that can be reassigned:
let number = 15;
number = 20; //'let' allows reassignment
console.log(number);
//Trying to reassign a 'const'-declared variable:
const name1 = "Aiza";
try {
    name1 = "Sara"; //This line is showing an error
}
catch (error) {
    console.log("Error! can't reassign a 'const'-declared variable");
}
console.log(name1);
//This illustrates that 'const' prevents changing the variables once it's set.
