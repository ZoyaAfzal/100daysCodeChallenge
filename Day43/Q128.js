//Question 128: Create an arrow function that takes multiple parameters and returns the product of all parameters.
//Arrow function that calculates the product of all it's parameters:
const multiplyParameters = (...numbers) => {
    return numbers.reduce((total, number) => total * number, 1);
};
//Logging the arrow function and putting multiple values:
console.log(multiplyParameters(2, 3, 4));
console.log(multiplyParameters(4, 5, 3, 7, 6));
export {};
//This function used the rest parameter syntax to take any number of arguments then multiplies them together.
