/*Question 83: Converting to Upper and Lower Case: Create a function that takes a string, converts it to uppercase, 
then to lowercase, and logs both.*/

//This function converts a string to Uppercase and then to Lowercase:
function conversionString(str:string){
    let upperCaseStr = str.toUpperCase();
    //It will convert string to Uppercase.

    let lowerCaseStr = str.toLowerCase();
    //It will convert string to LowerCase.

console.log(`UpperCase: ${upperCaseStr} , LowerCase: ${lowerCaseStr}`);
}
//Example: Changing the case of "Hello Eric!":
conversionString("Hello Eric!");
//We are showing the same text in Uppercase and then to Lowercase.