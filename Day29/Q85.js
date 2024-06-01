"use strict";
/*Question 85: Finding the Position of a Substring: Write a function that locates the first occurrence of the word
"code" within any given string and returns its position.*/
Object.defineProperty(exports, "__esModule", { value: true });
//This function finds where "code" first shows up in a string:
function findCodePosition(str) {
    return str.indexOf("code");
    //It will look for a "code" and tell where it found it.
}
;
//Example: Searching within a sentence:
console.log(findCodePosition("I like to write code with JavaScript"));
//It will tell the position number wher "code" started.
