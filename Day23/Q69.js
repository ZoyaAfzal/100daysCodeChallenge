/*Question 69: Dividing and Finding the Remainder: Write a function that divides two numbers and returns both the
quotient and the remainder. Use an object to return both values.*/
//This function divides two numbers and find the quotient and remainder:
function divideAndRemainder(dividend, divisor) {
    //Calculating the quotient and remainder:
    let quotient = Math.floor(dividend / divisor);
    let remainder = dividend % divisor;
    //Returns\ing both in an object:
    return { quotient, remainder };
}
;
//Trying it with 20 divided by 7:
console.log(divideAndRemainder(20, 7));
export {};
//It will be showing { quotient: 2, remainder: 6 }.
//It will show how many times 7 goes into 20, and what's left over.
