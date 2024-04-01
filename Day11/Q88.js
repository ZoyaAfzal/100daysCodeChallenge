/*Question 88: Rounding to the Nearest Integer: Write a function that takes a decimal number as input and returns
the number rounded to the nearest integer.*/
//Thiis function rounds a decimal number to the nearest whole number:
function roundToNearestIntegar(num) {
    return Math.round(num);
    //This method rounds the number
}
;
//Example: Rounding a decimal:
console.log(roundToNearestIntegar(6.8));
console.log(roundToNearestIntegar(3.4));
console.log(roundToNearestIntegar(4.5));
export {};
//This is showing how the function round numbers either up or down.
