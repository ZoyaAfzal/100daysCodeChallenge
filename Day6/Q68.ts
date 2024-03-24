/*Question 68: Multiplying Decimals: Create a function that accepts two decimal numbers and returns their product. 
Round the result to two decimal places.*/

//This function multiplies two deciaml numbers:
function multiplyDecimals(num1:number, num2:number):number {
    //Multiplying the numbers and rounding the result to two decimal places:
    return Math.round(num1 * num2 * 100 / 100);
};

//Now, giving values to num1 and num2:
let num1: number = 2.23;
let num2: number = 1.6;
//Here, we have given two decimal numbers and in return we will get product:
let product: number = multiplyDecimals(num1, num2);
console.log("Product:", product);
//our product will be 4.
//After multiplying, we round to make a result easier to read.