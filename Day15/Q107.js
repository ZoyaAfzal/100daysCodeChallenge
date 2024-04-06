//Question 107: Write a condition using logical operators that checks if a number is divisible by both 2 and 3.
//This function checks if the number is divisible by both 2 and 3:
function isDivisibleByTwoAndThree(number) {
    //use the modulus operator to check for no reminder
    return number % 2 === 0 && number % 3 === 0;
}
;
console.log(isDivisibleByTwoAndThree(6));
console.log(isDivisibleByTwoAndThree(9));
console.log(isDivisibleByTwoAndThree(12));
console.log(isDivisibleByTwoAndThree(14));
console.log(isDivisibleByTwoAndThree(18));
console.log(isDivisibleByTwoAndThree(15));
export {};
//Logical Operators help us to verify the number's divisibility by both 2 and 3.
