"use strict";
/*Question 64: Combine Strings and Numbers: Write a function that merges a piece of text with a number. For example,
if provided with "Age: " and 30, it should give back "Age: 30".*/
//This function merges a test and a number:
function combineStringAndNumber(text, number) {
    //Joining the text and and number into single text:
    return text + number;
}
;
//Trying it out with "Age: " and 30:
console.log(combineStringAndNumber("Age: ", 30));
//Here, we put together the text and a number
