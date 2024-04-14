//Question 127: Convert a traditional function expression to an arrow function.
//Traditional function expression:
const traditionalFunction = function (a, b) {
    return a + b;
};
//Converting to arrow function:
const arrowFunction = (a, b) => a + b;
//Logging the traditional function:
console.log(traditionalFunction(5, 3));
console.log(traditionalFunction(7, 4));
//Now, logging the arrow function:
console.log(arrowFunction(5, 3));
console.log(arrowFunction(7, 4));
export {};
//Demonstrating the conversion of a traditional function expression to an arrow function.
