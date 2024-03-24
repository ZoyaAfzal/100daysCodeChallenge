/*Question 68: Multiplying Decimals: Create a function that accepts two decimal numbers and returns their product.
Round the result to two decimal places.*/
//This function multiplies two deciaml numbers:
function multiplyDecimals(num1, num2) {
    //Multiplying the numbers and rounding the result to two decimal places:
    return Math.round(num1 * num2 * 100 / 100);
}
;
//Now, giving values to num1 and num2:
var num1 = 2.23;
var num2 = 1.6;
//Here, we have given two decimal numbers and in return we will get product:
var product = multiplyDecimals(num1, num2);
console.log("Product:", product);
//our product will be 4.
//After multiplying, we round to make a result easier to read.
