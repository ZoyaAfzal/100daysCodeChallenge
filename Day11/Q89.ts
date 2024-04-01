/*Question 89: Converting Strings to Numbers: Create a function that takes a string representing a number 
(like "123") and converts it into an actual number type.*/

//This function changes a string into a number:
function convertStringToNumber(str:string):number {
    return parseFloat(str);
    //Converting a string into a number
}
//Example: Turning a numeric string into a real number:
console.log(convertStringToNumber("123.45"));
console.log(convertStringToNumber("456.78"));
console.log(convertStringToNumber("67"));

//We are converting strings that looks like a number into an actual number.