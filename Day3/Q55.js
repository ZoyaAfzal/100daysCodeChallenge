/*Question 55: Double Numbers in an Array: Make a list of numbers. Then, use a trick to make a new list where each
number is twice its original value.*/
//Starting with a list of numbers
var numbers = [1, 3, 5, 7, 9];
//Doubling each number
var doubledNumbers = numbers.map(function (number) { return number * 2; });
//Showing the new list of doubled numbers
console.log(doubledNumbers);
