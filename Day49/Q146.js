//Question 146: Show an example of a callback function used to filter an array of numbers.
// This array of numbers will be filtered:
const numbers = [11, 22, 33, 44, 55, 66, 77, 88, 99];
// Uses .filter() with a callback function to filter out numbers greater than 50:
const filteredNumbers = numbers.filter((number) => number > 50);
console.log(filteredNumbers);
export {};
//outputs:[ 55, 66, 77, 88, 99 ]
// The callback function here checks each number, and .filter() creates a new array with numbers that meet the criteria.
