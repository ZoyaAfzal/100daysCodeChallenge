"use strict";
//Question130: Question 130: Explain how to export a function from one JavaScript file and import it into another file.
Object.defineProperty(exports, "__esModule", { value: true });
//In another file where you want to use the add function:
const mathFunctions_js_1 = require("./mathFunctions.js");
console.log((0, mathFunctions_js_1.add)(3, 7));
//Demonstrated importing the add function from mathFunctions.ts and using it.
