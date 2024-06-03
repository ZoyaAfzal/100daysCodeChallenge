"use strict";
/*Question 65: Determine the Remainder: Make a function that gets two numbers and shows the leftover from dividing
them using the % sign. For example, remainder(5, 2) should give 1.*/
//This function finds the leftover of dividing two numbers:
function findRemainder(num1, num2) {
    //gives back the leftover of num1 divided by num2:
    return num1 % num2;
}
;
//Trying it with 5 divided by 2:
console.log(findRemainder(5, 2));
//This tells us the leftover, which is 1 here.
