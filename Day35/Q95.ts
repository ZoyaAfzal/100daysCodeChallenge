//Question 95: Write a function that uses the .filter() method to return an array of numbers greater than 10.

//This function filters an array, keeping only numbers greater than 10:
function filterGreaterThanTen(numbers:number[]){
    return numbers.filter(number => number>10)
};
//Example: Filtering an array of numbers:
const numbers:number[] = [5,10,15,20,15,30,35,40];
console.log(filterGreaterThanTen(numbers));

//The new array will contain only the numbers greater than 10...