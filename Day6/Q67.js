/*Question 67: Arithmetic with Mixed Types: Write a function that takes two parameters: a number and a string that
represents a number (e.g., "5"). Return their sum as a number.*/
//This function adds a number and a string that represents a number:
function addNumberAndString(num1, numString) {
    //Converting the string to a number and adds it to the first number:
    return num1 + Number(numString);
}
;
//Trying it with 12 and "3":
console.log(addNumberAndString(12, "3"));
//The string "3" will turned into the number 3, and then added to 12.
