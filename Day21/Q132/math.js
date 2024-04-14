"use strict";
//Question 132: Discuss the difference between default and named exports in JavaScript modules.
Object.defineProperty(exports, "__esModule", { value: true });
exports.division = exports.multiply = void 0;
//Nmaed export example in math.ts file:
const multiply = (a, b) => a * b;
exports.multiply = multiply;
const division = (a, b) => a / b;
exports.division = division;
