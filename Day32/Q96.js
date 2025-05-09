//Question 96: Demonstrate how to use the .reduce() method to calculate the sum of all numbers in an array.
//This function calculates the sum of all numbers in an array:
function calculateSum(numbers) {
    return numbers.reduce((accumulator, current) => accumulator + current, 0);
}
;
//Example: Calculating the sum of an array of numbers:
const numbers = [1, 2, 3, 4, 5];
console.log(calculateSum(numbers));
export {};
//It adds up all the numbers in the array, resulting in a single sum value.
