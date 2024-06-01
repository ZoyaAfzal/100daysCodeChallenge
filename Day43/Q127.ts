//Question 127: Convert a traditional function expression to an arrow function.

//Traditional function expression:
const traditionalFunction = function (a:number, b:number):number {
    return a + b;
};
//Converting to arrow function:
const arrowFunction = (a:number, b:number) => a + b;

//Logging the traditional function:
console.log(traditionalFunction(5, 3));
console.log(traditionalFunction(7, 4));

//Now, logging the arrow function:
console.log(arrowFunction(5, 3));
console.log(arrowFunction(7, 4));

//Demonstrating the conversion of a traditional function expression to an arrow function.
