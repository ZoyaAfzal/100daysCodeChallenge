/*Question 76: Function Parameters and Return Values: Create a function that takes two numbers as parameters, adds 
them together, and returns the result. Show how you can call this function and log the result.*/

//This function adds two numbers and return the result:
function addNumbers(num1:number, num2:number):number {
    //Calculating the sum of num1 and num2:
    return num1 + num2;

}
//Calling the function with two numbers and logging the result:
console.log(addNumbers(2,5));
console.log(addNumbers(8,9));
console.log(addNumbers(3,6));
//Here we ask our function to add 2 and 5, 8 and 9, and 3 and 6 , it is telSling the ouput is 7, 17 and 9.