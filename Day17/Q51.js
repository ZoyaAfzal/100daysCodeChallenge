"use strict";
/*Question 51: Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle
and refactor it into an arrow function.*/
//Original function for calculating the area of a rectangle
function calculateArea(width, height) {
    return width * height;
}
//Refactotred into an arrow function
let calculateAreaArrow = (width, height) => width * height;
//Example usage of the arrow function
console.log(calculateAreaArrow(7, 9));
//Log the area of the rectangle
