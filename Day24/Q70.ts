/*Question 70: Understanding let in Loops: Write a function that uses a loop with the let keyword to print numbers 
from 1 to 5. Explain how the let keyword affects the visibility of the loop variable.*/

function printNumbersWithLet() {
    for (let i = 1; i <= 5; i++) {
        //using 'let' for loop variable 'i'
    console.log(i);
    //It will print numbers from 1 to 5.
    
    };
    //'i' is not acceptable here, outside the loop because it is defined with 'let' which is loop variable.
    };


printNumbersWithLet();
//This shows that 'let' limits 'i' to the loop.
