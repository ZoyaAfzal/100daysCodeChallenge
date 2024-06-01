/*Question 78: Function Expressions vs. Function Declarations: Compare function expressions and declarations 
by creating one of each that performs the same task, such as squaring a number.*/

//Function Declaration for squaring a number:
function squareDeclaration(number:number):number {
    return number * number;

};
//Function Expression for squaring a number:
const squareExpression = function(number:number):number {
    return number * number;
};

//Using both functions to square the number 8
console.log(squareDeclaration(8));
console.log(squareExpression(8));

/*Both methods give us the same result, shocking two different ways to create 
functions that do the samething*/