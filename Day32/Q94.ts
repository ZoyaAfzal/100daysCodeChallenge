/*Question 94: Use the .map() method to create a new array that contains the length of each word from an 
array of words.*/

//Defining an array with some words:
const words:string[] = ["Hello", "World", "JavaScript", "TypeScript"];
const length:number[] = words.map(word => word.length);
//using .map() to create a new array with the length of each word.

console.log(length);
//Each number in the new array represents the length of the corresponding word of the original array.

