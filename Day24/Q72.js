"use strict";
/*Question 72: Block Scope with let and const: Demonstrate block scope by creating a code block with {} that uses both
let and const. Show how variables declared inside the block are not accessible outside of it.*/
//Demonstrating Block Scope:
{
    let blockLet = "kept inside the block";
    const blockConst = "also kept inside the block";
    console.log(blockLet); //It will work fine here
    console.log(blockConst); //It will also work fine here
}
try {
    console.log(blockLet); //It will fail
}
catch (error) {
    console.log("'blockLet' is not accessible outside the block.");
}
try {
    console.log(blockConst); //It will also fail
}
catch (error) {
    console.log("'blockConst' is also not accessible outside the block.");
}
/*This Demonstration of Block Scope shows that 'let' and 'const' keep variables safe inside the block where they
are defined*/
