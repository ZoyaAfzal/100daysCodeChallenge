/*Question 55: Double Numbers in an Array: Make a list of numbers. Then, use a trick to make a new list where each
number is twice its original value.*/

//Starting with a list of numbers
let numbers= [1, 3, 5, 7, 9];

//Doubling each number
let doubledNumbers= numbers.map((number) => number * 2);

//Showing the new list of doubled numbers
console.log(doubledNumbers);
//It is doubling each number and converting all odd numbers into even numbers.