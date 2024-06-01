"use strict";
/*Question 75: Compound Assignment Operators: Use compound assignment operators to simplify arithmetic operations.
Start with x = 4 and perform a series of operations (addition, subtraction, multiplication, division) on x using
compound operators.*/
//This function uses compound reassignment operators for different operations:
function compoundAssignmentOperators() {
    let x = 4; //Starting with x equal to 4
    console.log("Initial x: ", x);
    x += 3;
    //Adding 3 to x
    console.log("after Addition =", x);
    //Showing x after Addition
    x -= 1;
    //Subtracting 1 from x
    console.log("after Subtraction =", x);
    //Showing x after Subtracting
    x *= 4;
    //Multiplying x by 2
    console.log("after Multiplication =", x);
    //Showing x after Multiplication
    x /= 2;
    //Dividing x by 2
    console.log("after Division =", x);
    //Showing x after Division
}
//Calling the function:
compoundAssignmentOperators();
//We simplified, Arithmetic Operators on x using Compound Assignment Operators, like a Shortcut.
