"use strict";
/*Question 86: Checking for Text Presence: Create a function that checks if the word "JavaScript" is present in a
given string. It should return true if found, otherwise false.*/
Object.defineProperty(exports, "__esModule", { value: true });
//This function checks if a sentence has "Javascript" in it:
function containsJavaScript(str) {
    return str.includes("JavaScript");
    //It will check for "Javascript" and return true or false
}
//Example:Seeing if a text mentioned "JavaScript":
console.log(containsJavaScript("JavaScript is my favourite Programming Language."));
//It will simply say true if "Javascipt" is there, otherwise false.
