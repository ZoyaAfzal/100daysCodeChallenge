/*Question 90: Checking if a Value is NaN: Demonstrate how to check if a variable's value is NaN (Not a Number)
and return a boolean result.*/
//This function checks if a value is NaN(Not a Number):
function isValueNaN(value) {
    return isNaN(value);
    //It will check and return true if the value is NaN, otherwise will return false.
}
//Examples:Checking different Values:
console.log(isValueNaN("hello"));
//Output will be true, because "hello" is : NaN.
console.log(isValueNaN(123));
export {};
//Output will be false because 123 is a number.
// This way, we can guard against unexpected non-numeric values in our calculations or inputs.
